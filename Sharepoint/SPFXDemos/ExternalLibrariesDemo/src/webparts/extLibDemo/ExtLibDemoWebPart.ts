import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ExtLibDemoWebPartStrings';
import ExtLibDemo from './components/ExtLibDemo';
import { IExtLibDemoProps } from './components/IExtLibDemoProps';

import * as $ from 'jquery';
import 'jqueryui';

import { SPComponentLoader } from '@microsoft/sp-loader';

export interface IExtLibDemoWebPartProps {
  description: string;
}

export default class ExtLibDemoWebPart extends BaseClientSideWebPart<IExtLibDemoWebPartProps> {


  public constructor() {
    super();
    SPComponentLoader.loadCss('https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css');
  }

  public render(): void {

    const accordionOptions: JQueryUI.AccordionOptions = {
      animate: true,
      collapsible: false,
      icons: {
        header: 'ui-icon-circle-arrow-e',
        activeHeader: 'ui-icon-circle-arrow-s'
      }
    };

    ($('.accordion', this.domElement)).accordion(accordionOptions);

    const element: React.ReactElement<IExtLibDemoProps> = React.createElement(
      ExtLibDemo,
      {
        description: this.properties.description
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
