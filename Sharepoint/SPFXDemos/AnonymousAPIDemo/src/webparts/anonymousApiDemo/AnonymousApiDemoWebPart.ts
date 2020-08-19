import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import * as strings from "AnonymousApiDemoWebPartStrings";
import AnonymousApiDemo from "./components/AnonymousApiDemo";
import { IAnonymousApiDemoProps } from "./components/IAnonymousApiDemoProps";

import { HttpClient, HttpClientResponse } from '@microsoft/sp-http';

export interface IAnonymousApiDemoWebPartProps {
  description: string;
}

export default class AnonymousApiDemoWebPart extends BaseClientSideWebPart<IAnonymousApiDemoWebPartProps> {
  public render(): void {

    this.getUserDetails().then(response => {
      const element: React.ReactElement<IAnonymousApiDemoProps> = React.createElement(
        AnonymousApiDemo,
        {
          description: this.properties.description,
          id: response.id,
          name: response.name,
          username: response.username,
          email: response.email,
          address: response.address.street + ' ' + response.address.suite + ' ' + response.address.city,
          phone: response.phone,
          website: response.website,
          company: response.company.name,
        }
      );
      ReactDom.render(element, this.domElement);
    });
  }

  private getUserDetails(): Promise<any> {
    return this.context.httpClient.get('https://jsonplaceholder.typicode.com/users/1', HttpClient.configurations.v1)
    .then((response: HttpClientResponse) => response.json()); // .then((jsonResponse => jsonResponse))
  }

  protected onDispose(): void {
  ReactDom.unmountComponentAtNode(this.domElement);
}

  protected get dataVersion(): Version {
  return Version.parse("1.0");
}

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
  return {
    pages: [
      {
        header: {
          description: strings.PropertyPaneDescription,
        },
        groups: [
          {
            groupName: strings.BasicGroupName,
            groupFields: [
              PropertyPaneTextField("description", {
                label: strings.DescriptionFieldLabel,
              }),
            ],
          },
        ],
      },
    ],
  };
}
}
