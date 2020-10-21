import * as React from 'react';
import styles from './UserProfileInfo.module.scss';
import { IUserProfileInfoProps } from './IUserProfileInfoProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Aux from '../../../hoc/Auxiliary';

export default class UserProfileInfo extends React.Component<IUserProfileInfoProps, {}> {
  public render(): React.ReactElement<IUserProfileInfoProps> {
    const output = this.props.user ?
      <Aux>
        <p className={styles.description}>Display Name: {this.props.user.displayName}</p>
        <p className={styles.description}>Given Name: {this.props.user.givenName}</p>
        <p className={styles.description}>Surname: {this.props.user.surname}</p>
        <p className={styles.description}>Email ID: {this.props.user.mail}</p>
        <p className={styles.description}>Mobile Phone: {this.props.user.mobilePhone}</p>
      </Aux> :
      <p>No user graph present</p>;

    return (
      <div>{output}</div>
    );
  }
}
