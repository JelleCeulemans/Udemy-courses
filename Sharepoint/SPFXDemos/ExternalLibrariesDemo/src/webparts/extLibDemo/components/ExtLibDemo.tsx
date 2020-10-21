import * as React from 'react';
import styles from './ExtLibDemo.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { IExtLibDemoProps } from './IExtLibDemoProps';
import { IAccordionContent } from './Accordion/IAccordionContent';
import Accordion from './Accordion/Accordion';

export default class ExtLibDemo extends React.Component<IExtLibDemoProps, {}> {
  public render(): React.ReactElement<IExtLibDemoProps> {

    const accordionContent: IAccordionContent[] = [
      {
        title: "Lesson 14 - ECMAScript Implementation",
        listItems: [
          "Overview ECMAScript",
          "Using ECMAScript in Application pages",
          "Using ECMAScript in Web Parts",
          "Implementing onSuccess Function",
          "Implementing onFail Function",
        ]
      },
      {
        title: "Lesson 15 - Silverlight Implementation",
        listItems: [
          "Overview of Silverlight Implementation",
          "Using Load Function to load resources",
          "Adding Fields to a custom list using Silverlight Implementation",
          "Exception handling with Silverlight Implementation",
          "Cross Domain Policy"
        ]
      },
      {
        title: "Lesson 16 - Developing Custom Dialogs",
        listItems: [
          "Create a Custom Dialog for Data Entry",
          "JavaScript and the Client Obhect Model",
          "Modal Dialogs",
          "Creating a Custom Dialog",
          "Controlling the Client Side Behavior and Visibility of the Dialog",
          "Adding Server Side Functionality to the Dailog",
          "Deployig and Testing the Dialog User Control"
        ]
      }
    ];

    return (
      <div className={styles.extLibDemo}>
        <Accordion content={accordionContent} />
      </div>
    );
  }
}
