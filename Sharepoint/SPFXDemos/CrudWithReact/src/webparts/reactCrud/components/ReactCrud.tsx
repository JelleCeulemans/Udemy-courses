import * as React from 'react';
import styles from './ReactCrud.module.scss';
import { IReactCrudProps } from './IReactCrudProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IReactCrudState } from './IReactCrudState';

import { ISPHttpClientOptions, SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

import { TextField } from 'office-ui-fabric-react';

let _softwareListColumns = [{
  key: 'ID',
  name: 'ID',
  fieldName: 'ID',
  minWidth: 50,
  maxWidth: 100,
  isResizable: true
},
{
  key: 'Title',
  name: 'Title',
  fieldName: 'Title',
  minWidth: 50,
  maxWidth: 100,
  isResizable: true
},
{
  key: 'SoftwareName',
  name: 'SoftwareName',
  fieldName: 'ID',
  minWidth: 50,
  maxWidth: 100,
  isResizable: true
}];

export default class ReactCrud extends React.Component<IReactCrudProps, IReactCrudState> {
  constructor(props: IReactCrudProps, state: IReactCrudState) {
    super(props);
    this.state = {
      status: 'Ready',
      SoftwareListItems: [],
      SoftwareListItem: {
        Id: 0,
        Title: "",
        SoftwareName: "",
        SoftwareDescription: "",
        SoftwareVendor: "Select an option",
        SoftwareVersion: ""
      }
    };

    // this._selection = new Selection({
    //   onSelectionChanged: this._onItemsSelectionChanged
    // });
  }
  public render(): React.ReactElement<IReactCrudProps> {
    return (
      <div className={styles.reactCrud}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
