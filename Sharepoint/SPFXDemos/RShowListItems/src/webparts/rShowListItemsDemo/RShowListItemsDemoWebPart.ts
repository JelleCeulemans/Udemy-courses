import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'RShowListItemsDemoWebPartStrings';
import RShowListItemsDemo from './components/RShowListItemsDemo';
import { IRShowListItemsDemoProps } from './components/IRShowListItemsDemoProps';

export interface IRShowListItemsDemoWebPartProps {
  description: string;
}

export default class RShowListItemsDemoWebPart extends BaseClientSideWebPart <IRShowListItemsDemoWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IRShowListItemsDemoProps> = React.createElement(
      RShowListItemsDemo,
      {
        description: this.properties.description,
        websiteUrl: this.context.pageContext.web.absoluteUrl
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
