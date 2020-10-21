import * as React from 'react';
import styles from './IsolatedWebParts.module.scss';
import { IIsolatedWebPartsProps } from './IIsolatedWebPartsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { MSGraphClient } from '@microsoft/sp-http';
import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';
import { IIsolatedWebPartsState } from './IIsolatedWebPartsState';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

export default class IsolatedWebParts extends React.Component<IIsolatedWebPartsProps, IIsolatedWebPartsState> {

  constructor(props: IIsolatedWebPartsProps) {
    super(props);
    this.state = {
      user: null
    };
  }

  public componentDidMount() {
    this.props.context.msGraphClientFactory.getClient()
      .then((client: MSGraphClient) => {
        client.api('/me').get((error, user: MicrosoftGraph.User, rawResponse?) => {
          if (error) {
            console.log("Message is: " + error.message);
            return;
          }

          this.setState({ user });
        });
      });
  }

  public render(): React.ReactElement<IIsolatedWebPartsProps> {
    const { displayName, givenName, surname, mail, mobilePhone } = this.state.user;
    const output = this.state.user ?
      <Aux>
        <p className={styles.description}>Display Name: {displayName}</p>
        <p className={styles.description}>Given Name: {givenName}</p>
        <p className={styles.description}>Surname: {surname}</p>
        <p className={styles.description}>Email: {mail}</p>
        <p className={styles.description}>Mobile Phone: {mobilePhone}</p>
      </Aux> : <p>No user fetched</p>;

    return (
      <div className={styles.isolatedWebParts}>

      </div>
    );
  }
}
