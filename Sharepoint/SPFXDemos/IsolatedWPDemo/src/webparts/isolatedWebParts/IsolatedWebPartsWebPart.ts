import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'IsolatedWebPartsWebPartStrings';
import IsolatedWebParts from './components/IsolatedWebParts';
import { IIsolatedWebPartsProps } from './components/IIsolatedWebPartsProps';

export interface IIsolatedWebPartsWebPartProps {
  description: string;
}

export default class IsolatedWebPartsWebPart extends BaseClientSideWebPart <IIsolatedWebPartsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IIsolatedWebPartsProps> = React.createElement(
      IsolatedWebParts,
      {
        description: this.properties.description,
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
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
