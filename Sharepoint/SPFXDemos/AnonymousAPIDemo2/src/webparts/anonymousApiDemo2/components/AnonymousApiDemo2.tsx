import * as React from 'react';
import styles from './AnonymousApiDemo2.module.scss';
import { IAnonymousApiDemo2Props } from './IAnonymousApiDemo2Props';
import { escape } from '@microsoft/sp-lodash-subset';
import { IAnonymousDemo2State } from './IAnonymousDemo2State';

import { HttpClient, HttpClientResponse } from '@microsoft/sp-http';

export default class AnonymousApiDemo2 extends React.Component<IAnonymousApiDemo2Props, IAnonymousDemo2State> {

  public constructor(props: IAnonymousApiDemo2Props, state: IAnonymousDemo2State) {
    super(props);

    this.state = {
      id: null,
      name: null,
      username: null,
      email: null,
      address: null,
      phone: null,
      website: null,
      company: null
    };
  }

  private getUserDetails(): Promise<any> {
    const url: string = this.props.apiURL + this.props.userID;
    return this.props.context.httpClient.get(url, HttpClient.configurations.v1)
      .then((response: HttpClientResponse) => response.json());
  }

  private InvokeAPIAndSetDataIntoState() {
    this.getUserDetails().then(response => {
      this.setState({
        id: response.id,
        name: response.name,
        username: response.username,
        email: response.email,
        address: response.address.street + ' ' + response.address.suite + ' ' + response.address.city,
        phone: response.phone,
        website: response.website,
        company: response.company.name,
      })
    })
  }

  public componentDidMount() {
    this.InvokeAPIAndSetDataIntoState();
  }

  public componentDidUpdate(prevProps: IAnonymousApiDemo2Props, prevState: IAnonymousDemo2State, prevContext: any) {
    this.InvokeAPIAndSetDataIntoState();
  }

  public render(): React.ReactElement<IAnonymousApiDemo2Props> {
    return (
      <div className={styles.anonymousApiDemo2}>
        <span className={styles.title}>User Details</span>
        <div><strong>ID: </strong>{this.state.id}</div>
        <div><strong>User Name: </strong>{this.state.username}</div>
        <div><strong>Name: </strong>{this.state.name}</div>
        <div><strong>Address: </strong>{this.state.address}</div>
        <div><strong>Phone: </strong>{this.state.phone}</div>
        <div><strong>Website: </strong>{this.state.website}</div>
        <div><strong>Company: </strong>{this.state.company}</div>
      </div>
    );
  }
}
