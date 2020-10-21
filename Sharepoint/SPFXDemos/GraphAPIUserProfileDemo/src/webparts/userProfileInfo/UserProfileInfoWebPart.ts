import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'UserProfileInfoWebPartStrings';
import UserProfileInfo from './components/UserProfileInfo';
import { IUserProfileInfoProps } from './components/IUserProfileInfoProps';

import { MSGraphClient } from '@microsoft/sp-http';

import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';

export interface IUserProfileInfoWebPartProps {
  description: string;
}

export default class UserProfileInfoWebPart extends BaseClientSideWebPart <IUserProfileInfoWebPartProps> {
  public render(): void {

    this.context.msGraphClientFactory.getClient().then((graphClient: MSGraphClient) => {
      graphClient.api('/me').get((error, user: MicrosoftGraph.User, rawResponse?: any) => {
        console.log(user);
        const element: React.ReactElement<IUserProfileInfoProps> = React.createElement(
          UserProfileInfo,
          {
            description: this.properties.description,
            user
          }
        );
        ReactDom.render(element, this.domElement);
      });
    });

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
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
