import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'AnonymousApiDemo2WebPartStrings';
import AnonymousApiDemo2 from './components/AnonymousApiDemo2';
import { IAnonymousApiDemo2Props } from './components/IAnonymousApiDemo2Props';

export interface IAnonymousApiDemo2WebPartProps {
  description: string;
  apiURL: string;
  userID: string;
}

export default class AnonymousApiDemo2WebPart extends BaseClientSideWebPart<IAnonymousApiDemo2WebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAnonymousApiDemo2Props> = React.createElement(
      AnonymousApiDemo2,
      {
        description: this.properties.description,
        apiURL: this.properties.apiURL,
        userID: this.properties.userID,
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('apiURL', {
                  label: "News API URL"
                }),
                PropertyPaneTextField('userID', {
                  label: "User ID"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
