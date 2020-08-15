import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './NewListCreationWebPartWebPart.module.scss';
import * as strings from 'NewListCreationWebPartWebPartStrings';

import { SPHttpClient, SPHttpClientResponse, ISPHttpClientOptions } from '@microsoft/sp-http';

export interface INewListCreationWebPartWebPartProps {
  description: string;
}

export default class NewListCreationWebPartWebPart extends BaseClientSideWebPart<INewListCreationWebPartWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.newListCreationWebPart}">
      <h3>Creating a New List Dynamically</h3>
      <p>Please fill out tge below details to create a new list programmatically</p>
      <p>New List Name</p>
      <p><input type="text" id="txtNewListName"></p>
      <p>New List Description</p>
      <p><input type="text" id="txtNewListDescription"></p>
      <p><input type="button" id="btnCreateNewList" value="Create New List"></p>
      </div>`;

      this.bindEvents();
  }

  private bindEvents(): void {
    this.domElement.querySelector('#btnCreateNewList').addEventListener('click', () => this.createNewList());
  }

  private createNewList(): void {
    var newListName = document.getElementById("txtNewListName")['value'];
    console.log(newListName);
    var newListDescription = document.getElementById("txtNewListDescription")['Value'];

    const listUrl: string = this.context.pageContext.web.absoluteUrl + "/_api/web/lists/GetByTitle('" + newListName + "')";

    this.context.spHttpClient.get(listUrl, SPHttpClient.configurations.v1)
    .then((responseGet: SPHttpClientResponse) => {
      if (responseGet.status === 200) {
        alert("A List already exist with this name.");
        return;
      }
      if (responseGet.status === 404) {
        const url: string = this.context.pageContext.web.absoluteUrl + "/_api/web/lists";
        const listDefinition: any = {
          "Title": newListName,
          "Description": newListDescription,
          "AllowContentTypes": true,
          "BaseTemplate": 100,
          "ContentTtpesEnabled": true
        };
        const spHttpClientOptions: ISPHttpClientOptions = {
          "body": JSON.stringify(listDefinition)
        };
        this.context.spHttpClient.post(url, SPHttpClient.configurations.v1, spHttpClientOptions)
        .then((responsePost: SPHttpClientResponse) => {
          if (responsePost.status === 201) {
            alert("A new list has been created succesfully!");
          } else {
            alert("Error Message " + responsePost.status + " " + responsePost.statusText);
          }
        });
      }
    })
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
