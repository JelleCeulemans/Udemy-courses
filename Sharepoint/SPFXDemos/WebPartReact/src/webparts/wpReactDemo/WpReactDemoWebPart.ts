import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'WpReactDemoWebPartStrings';
import WpReactDemo from './components/WpReactDemo';
import { IWpReactDemoProps } from './components/IWpReactDemoProps';

export interface IWpReactDemoWebPartProps {
  description: string;
}

export default class WpReactDemoWebPart extends BaseClientSideWebPart <IWpReactDemoWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IWpReactDemoProps> = React.createElement(
      WpReactDemo,
      {
        description: this.properties.description,
        absoluteUrl: this.context.pageContext.web.absoluteUrl,
        siteTitle: this.context.pageContext.web.title,
        relativeUrl: this.context.pageContext.web.serverRelativeUrl,
        username: this.context.pageContext.user.displayName
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