import * as React from 'react';
import styles from './CrudReact.module.scss';
import { ICrudReactProps } from './ICrudReactProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ICrudReactState } from './ICrudReactState';

import { ISPHttpClientOptions, SPHttpClient, SPHttpClientResponse} from '@microsoft/sp-http';

export default class CrudReact extends React.Component<ICrudReactProps, ICrudReactState> {

  public constructor (props: ICrudReactProps, state: ICrudReactState) {
    super(props);

    this.state = {
      status: 'Ready',
      SoftwareListItems: [],
      SoftwareListItem: {
        Id: 0,
        Title: '',
        SoftwareName: '',
        SoftwareDescription: '',
        SoftwareVendor: 'Select an option',
        SoftwareVersion: ''
      }
    };

    // this._selection = new Selection({

    // })
  }

  public render(): React.ReactElement<ICrudReactProps> {
    return (
      <div className={ styles.crudReact }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
