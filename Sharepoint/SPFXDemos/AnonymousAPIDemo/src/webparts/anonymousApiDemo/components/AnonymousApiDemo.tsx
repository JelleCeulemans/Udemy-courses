import * as React from 'react';
import styles from './AnonymousApiDemo.module.scss';
import { IAnonymousApiDemoProps } from './IAnonymousApiDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class AnonymousApiDemo extends React.Component<IAnonymousApiDemoProps, {}> {
  public render(): React.ReactElement<IAnonymousApiDemoProps> {
    return (
      <div className={styles.anonymousApiDemo}>
        <span className={styles.title}>User Details</span>
        <div><strong>ID: </strong>{this.props.id}</div>
        <div><strong>User Name: </strong>{this.props.username}</div>
        <div><strong>Name: </strong>{this.props.name}</div>
        <div><strong>Address: </strong>{this.props.address}</div>
        <div><strong>Phone: </strong>{this.props.phone}</div>
        <div><strong>Website: </strong>{this.props.website}</div>
        <div><strong>Company: </strong>{this.props.company}</div>
      </div>
    );
  }
}
