import { Version, Environment, EnvironmentType } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './GetListOfListsDemoWebPart.module.scss';
import * as strings from 'GetListOfListsDemoWebPartStrings';

import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

export interface IGetListOfListsDemoWebPartProps {
  description: string;
}

export interface ISharePointList {
  Title: string;
  Id: string;
}

export interface ISharePointLists {
  value: ISharePointList[];
}



export default class GetListOfListsDemoWebPart extends BaseClientSideWebPart <IGetListOfListsDemoWebPartProps> {

  private getListOfLists(): Promise<ISharePointLists> {
    return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + `/_api/web/lists?$filter=Hidden eq false`, SPHttpClient.configurations.v1)
    .then((response: SPHttpClientResponse) => {
      return response.json();
    });
  }

  private getAndRederLists() {
    if (Environment.type === EnvironmentType.Local) {
    } else if(Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
      this.getListOfLists().then((response) => {
        this.renderListOfLists(response.value);
      });
    }
  }

  private renderListOfLists(items: ISharePointList[]): void {
    let html: string = '';
    items.forEach((item: ISharePointList) => {
      html += `
      <ul class="${styles.list}">
        <li class="${styles.listItem}">
          <span class="ms-font-1">${item.Title}</span>
        </li>
        <li class="${styles.listItem}">
          <span class="ms-font-1">${item.Id}</span>
        </li>
      </ul>`;
    });

    const listsPlaceholder: Element = this.domElement.querySelector('#');
    listsPlaceholder.innerHTML = html;
  }



  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.getListOfListsDemo }">
    <div class="${ styles.container }">
      <div class="${ styles.row }">
        <div class="${ styles.column }">
          <span class="${ styles.title }">Welcome to SharePoint!</span>
  <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
    <p class="${ styles.description }">${escape(this.properties.description)}</p>
      <a href="https://aka.ms/spfx" class="${ styles.button }">
        <span class="${ styles.label }">Learn more</span>
          </a>
          </div>
          </div>
          </div>
          <div id="SPListPlaceHolder"></div>
          </div>`;

          this.getAndRederLists();
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
