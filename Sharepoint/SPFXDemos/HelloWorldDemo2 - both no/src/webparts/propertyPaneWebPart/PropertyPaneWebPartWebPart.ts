import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle,
  PropertyPaneSlider,
  PropertyPaneChoiceGroup,
  PropertyPaneDropdown,
  PropertyPaneCheckbox,
  PropertyPaneLink
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape, trimEnd } from '@microsoft/sp-lodash-subset';

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

  currentTime: Date;
  isCertified: boolean;

  rating: number;
  processorType: string;
  invoiceType: string;

  newProcessorType: string;
  discountCoupon: boolean;
}

export default class PropertyPaneWebPartWebPart extends BaseClientSideWebPart<IPropertyPaneWebPartWebPartProps> {

  protected onInit(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.properties.productName = 'Mouse';
      this.properties.productDescription = 'Mouse Description';
      this.properties.quantity = 500;
      this.properties.productCost = 300;
      this.properties.isCertified = false;
      this.properties.rating = 1;
      this.properties.processorType = 'I7';
      this.properties.invoiceType = 'MSWord';
      this.properties.newProcessorType = 'I7';
      this.properties.discountCoupon = false;

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
            <td>Current Time</td>
            <td>${this.properties.currentTime = new Date()}</td>
            </tr>
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
              <tr>
              <td>Rating Score</td>
              <td>${this.properties.rating}</td>
              </tr>
              <tr>
              <td>Processor Type</td>
              <td>${this.properties.processorType}</td>
              </tr>
              <tr>
              <td>Invoice File Type</td>
              <td>${this.properties.invoiceType}</td>
              </tr>
              <tr>
              <td>New Processor Type</td>
              <td>${this.properties.newProcessorType}</td>
              </tr>
              <tr>
              <td>Do you have a Discount Coupon ?</td>
              <td>${this.properties.discountCoupon}</td>
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
            }),
            PropertyPaneSlider('rating', {
              label: 'Rating',
              min: 1,
              max: 10,
              step: 1,
              showValue: true,
              value: 1
            }),
            PropertyPaneChoiceGroup('processorType', {
              label: 'Choices',
              options: [
                { key: 'I5', text: 'Intel I5' },
                { key: 'I7', text: 'Intel I7', checked: true },
                { key: 'I9', text: 'Intel I9' }
              ]
            }),
            PropertyPaneChoiceGroup('invoiceType', {
              label: 'Select Invoice File type:',
              options: [
                {
                  key: 'MSWord', text: 'MSWord',
                  imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Word_hi-res_icon_%282019%29.svg',
                  imageSize: { width: 32, height: 32 },
                  selectedImageSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Word_hi-res_icon_%282019%29.svg',
                  checked: true
                },
                {
                  key: 'MSExcel', text: 'MSExcel',
                  imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Microsoft_Excel_2013_logo.svg',
                  imageSize: { width: 32, height: 32 },
                  selectedImageSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Microsoft_Excel_2013_logo.svg'
                },
                {
                  key: 'MSPowerpoint', text: 'MSPowerpoint',
                  imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Microsoft_PowerPoint_2013_logo.svg',
                  imageSize: { width: 32, height: 32 },
                  selectedImageSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Microsoft_PowerPoint_2013_logo.svg'
                }
              ]
            }),
            PropertyPaneDropdown('newProcessorType', {
              label: 'New Processor Type',
              options: [
                { key: 'I5', text: 'Intel I5' },
                { key: 'I7', text: 'Intel I7'},
                { key: 'I9', text: 'Intel I9' }
              ],
              selectedKey: 'I7'
            }),
            PropertyPaneCheckbox('discountCoupon', {
              text: 'Do you have a discount Coupon',
              checked: false,
              disabled: false
            }),
            PropertyPaneLink('', {
              href: 'https://www.bol.com',
              text: 'Buy Intel Processor from the best Seller',
              target: '_blank',
              popupWindowProps: {
                height: 500,
                width: 500,
                positionWindowPosition: 2,
                title: 'Bol.com'
              }
            })
          ]
        }]
      }]
    };
  }
}
