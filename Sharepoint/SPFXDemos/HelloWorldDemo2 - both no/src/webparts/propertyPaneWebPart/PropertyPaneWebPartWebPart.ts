import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './PropertyPaneWebPartWebPart.module.scss';
import * as strings from 'PropertyPaneWebPartWebPartStrings';

export interface IPropertyPaneWebPartWebPartProps {
  description: string;

  productName: string;
  productDescription: string;
  productCost: number;
  quantity: number;
  billAmount: number;
  discount: number;
  netBillAmount: number;
  isCertified: boolean;
}

export default class PropertyPaneWebPartWebPart extends BaseClientSideWebPart<IPropertyPaneWebPartWebPartProps> {

  protected onInit(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.properties.productName = 'Mouse';
      this.properties.productDescription = 'Mouse Description';
      this.properties.quantity = 500;
      this.properties.productCost = 300;

      resolve(undefined);
    });
  }

  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.propertyPaneWebPart}">
    <div class="${ styles.container}">
      <div class="${ styles.row}">
        <div class="${ styles.column}">
            <table>
              <tr>
              <td>Product Name</td>
              <td>${this.properties.productName}</td>
              </tr>
              <tr>
              <td>Product Description</td>
              <td>${this.properties.productDescription}</td>
              </tr>
              <tr>
              <td>Product Cost</td>
              <td>${this.properties.productCost}</td>
              </tr>
              <tr>
              <td>Quantity</td>
              <td>${this.properties.quantity}</td>
              </tr>
              <tr>
              <td>Bill Amount</td>
              <td>${this.properties.billAmount = this.properties.productCost * this.properties.quantity}</td>
              </tr>
              <tr>
              <td>Discount</td>
              <td>${this.properties.discount = this.properties.billAmount * 0.1}</td>
              </tr>
              <tr>
              <td>Net Bill Amount</td>
              <td>${this.properties.netBillAmount = this.properties.billAmount - this.properties.discount}</td>
              </tr>
              <tr>
              <td>ISI Certified</td>
              <td>${this.properties.isCertified}</td>
              </tr>
            </table>
          </div>
          </div>
          </div>
          </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  //   protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
  //   return {
  //     pages: [
  //       {
  //         header: {
  //           description: strings.PropertyPaneDescription
  //         },
  //         groups: [
  //           {
  //             groupName: strings.BasicGroupName,
  //             groupFields: [
  //               PropertyPaneTextField('description', {
  //                 label: strings.DescriptionFieldLabel
  //               })
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   };
  // }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [{
        groups: [{
          groupName: 'Product Details',
          groupFields: [
            PropertyPaneTextField('productName', {
              label: 'Product Name',
              multiline: false,
              resizable: false,
              deferredValidationTime: 5000,
              placeholder: 'Please enter product name', 'description': 'Name property field'
            }),
            PropertyPaneTextField('productDescription', {
              label: 'Product Name',
              multiline: true,
              resizable: false,
              deferredValidationTime: 5000,
              placeholder: 'Please enter product description', 'description': 'Name property field'
            }),
            PropertyPaneTextField('productCost', {
              label: 'Product Cost',
              multiline: false,
              resizable: false,
              deferredValidationTime: 5000,
              placeholder: 'Please enter product cost', 'description': 'Number property field'
            }),
            PropertyPaneTextField('quantity', {
              label: 'Product Quantity',
              multiline: false,
              resizable: false,
              deferredValidationTime: 5000,
              placeholder: 'Please enter product quantity', 'description': 'Number property field'
            }),
            PropertyPaneToggle('isCertified', {
              key: 'IsCertified',
              label: 'Is it Certified?',
              onText: 'ISI Certified',
              offText: 'Not an ISI Certified product'
            })
          ]
        }]
      }]
    };
  }
}
