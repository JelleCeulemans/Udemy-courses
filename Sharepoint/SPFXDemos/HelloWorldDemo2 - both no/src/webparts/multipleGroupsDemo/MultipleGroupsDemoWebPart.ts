import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, PropertyPaneToggle } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './MultipleGroupsDemoWebPart.module.scss';
import * as strings from 'MultipleGroupsDemoWebPartStrings';

export interface IMultipleGroupsDemoWebPartProps {
  description: string;
  productName: string;
  isCertified: boolean;
}

export default class MultipleGroupsDemoWebPart extends BaseClientSideWebPart<IMultipleGroupsDemoWebPartProps> {

  protected onInit(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.properties.productName = 'Printer';
      this.properties.isCertified = false;

      resolve(undefined);
    });
  }

  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.multipleGroupsDemo}">
        <div class="${ styles.container}">
          <div class="${ styles.row}">
            <div class="${ styles.column}">
              <span class="${ styles.title}">Welcome to SharePoint!</span>
              <p class="${ styles.subTitle}">Customize SharePoint experiences using Web Parts.</p>
              <p class="${ styles.description}">${escape(this.properties.description)}</p>
              <p class="${ styles.description}">${escape(this.properties.productName)}</p>
              <p class="${ styles.description}">${this.properties.isCertified}</p>
              <a href="https://aka.ms/spfx" class="${ styles.button}">
                <span class="${ styles.label}">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [{
        header: {
          description: 'Page 1'
        },
        groups: [{
          groupName: strings.FirstGroup,
          groupFields: [
            PropertyPaneTextField('productName', {
              label: 'Product Name 1',

            })
          ]
        },
        {
          groupName: strings.SecondGroup,
          groupFields: [
            PropertyPaneToggle('isCertified', {
              label: 'Is Certified 1'
            })
          ]
        }
        ],
        displayGroupsAsAccordion: true
      },
      {
        header: {
          description: 'Page 2'
        },
        groups: [{
          groupName: strings.FirstGroup,
          groupFields: [
            PropertyPaneTextField('productName', {
              label: 'Product Name 2',

            })
          ]
        },
        {
          groupName: strings.SecondGroup,
          groupFields: [
            PropertyPaneToggle('isCertified', {
              label: 'Is Certified 2?'
            })
          ]
        }
        ],
        displayGroupsAsAccordion: true
      },
      {
        header: {
          description: 'Page 3'
        },
        groups: [{
          groupName: strings.FirstGroup,
          groupFields: [
            PropertyPaneTextField('productName', {
              label: 'Product Name 3',

            })
          ]
        },
        {
          groupName: strings.SecondGroup,
          groupFields: [
            PropertyPaneToggle('isCertified', {
              label: 'Is Certified 3?'
            })
          ]
        }
        ],
        displayGroupsAsAccordion: true
      },
      {
        header: {
          description: 'Page 4'
        },
        groups: [{
          groupName: strings.FirstGroup,
          groupFields: [
            PropertyPaneTextField('productName', {
              label: 'Product Name 4',

            })
          ]
        },
        {
          groupName: strings.SecondGroup,
          groupFields: [
            PropertyPaneToggle('isCertified', {
              label: 'Is Certified 4?'
            })
          ]
        }
        ],
        displayGroupsAsAccordion: true
      }]
    };
  }
}
