import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloWorldWebPart.module.scss';
import * as strings from 'HelloWorldWebPartStrings';

import { Environment, EnvironmentType } from '@microsoft/sp-core-library';

export interface IHelloWorldWebPartProps {
  description: string;
  environmentTitle: string;
}



export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  private findOutEnvironment(): void {
    if (Environment.type === EnvironmentType.Local) {
      this.properties.environmentTitle = "Local Sharepoint Environment";
    } else if(Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
      this.properties.environmentTitle = "Online Sharepoint Environment";
    }
  }

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.helloWorld}">
    <div class="${ styles.container}">
      <div class="${ styles.row}">
        <div class="${ styles.column}">
          <span class="${ styles.title}">Welcome to SharePoint!</span>
  <p class="${ styles.subTitle}">Customize SharePoint experiences using Web Parts.</p>
    <p class="${ styles.description}">${escape(this.properties.description)}</p>

    <p class="${ styles.description}">Absolute URL: ${escape(this.context.pageContext.web.absoluteUrl)}</p>
    <p class="${ styles.description}">Title: ${escape(this.context.pageContext.web.title)}</p>
    <p class="${ styles.description}">Relative URL: ${escape(this.context.pageContext.web.serverRelativeUrl)}</p>
    <p class="${ styles.description}">User Name: ${escape(this.context.pageContext.user.displayName)}</p>


    <p class="${ styles.description}">Environment: ${EnvironmentType[Environment.type]  + ' / ' + this.properties.environmentTitle }</p>


      <a href="https://aka.ms/spfx" class="${ styles.button}">
        <span class="${ styles.label}">Learn more</span>
          </a>
          </div>
          </div>
          </div>
          </div>`;

          this.findOutEnvironment();
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
