import * as React from 'react';
import styles from './WpReactDemo.module.scss';
import { IWpReactDemoProps } from './IWpReactDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class WpReactDemo extends React.Component<IWpReactDemoProps, {}> {
  public render(): React.ReactElement<IWpReactDemoProps> {
    return (
      <div className={ styles.wpReactDemo }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint With the use of React!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts with React.</p>
              <p className={ styles.description }>Absolute URL: {escape(this.props.absoluteUrl)}</p>
              <p className={ styles.description }>Title: {escape(this.props.siteTitle)}</p>
              <p className={ styles.description }>relative URL: {escape(this.props.relativeUrl)}</p>
              <p className={ styles.description }>User Name: {escape(this.props.username)}</p>
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
