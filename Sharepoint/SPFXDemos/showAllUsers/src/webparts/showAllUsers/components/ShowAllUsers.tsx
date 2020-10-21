import * as React from 'react';
import styles from './ShowAllUsers.module.scss';
import { IShowAllUsersProps } from './IShowAllUsersProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { IUser } from './IUser';
import { IShowAllUsersState } from './IShowAllUsersState';
import { MSGraphClient } from '@microsoft/sp-http';
import * as MicrosoftGraph from '@microsoft/microsoft-graph-client';

import { TextField, autobind, PrimaryButton, DetailsList, DetailsListLayoutMode, CheckboxVisibility, SelectionMode } from 'office-ui-fabric-react';

import * as strings from 'ShowAllUsersWebPartStrings';

const _userListColumns = [
  {
    key: 'displayName',
    name: 'Display Name',
    fieldName: 'displayName',
    minWidth: 50,
    maxWidth: 150,
    isResizable: true
  },
  {
    key: 'givenName',
    name: 'Given Name',
    fieldName: 'givenName',
    minWidth: 50,
    maxWidth: 100,
    isResizable: true
  },
  {
    key: 'mail',
    name: 'Mail',
    fieldName: 'mail',
    minWidth: 150,
    maxWidth: 100,
    isResizable: true
  },
  {
    key: 'mobilePhone',
    name: 'Mobile Phone',
    fieldName: 'mobilePhone',
    minWidth: 50,
    maxWidth: 100,
    isResizable: true
  },
  {
    key: 'userPrincipalName',
    name: 'User Principal Name',
    fieldName: 'userPrincipalName',
    minWidth: 200,
    maxWidth: 200,
    isResizable: true
  }

];
export default class ShowAllUsers extends React.Component<IShowAllUsersProps, IShowAllUsersState> {

  constructor(props: IShowAllUsersProps, state: IShowAllUsersState) {
    super(props);

    this.state = {
      users: [],
      searchFor: "Jelle"
    };
  }

  public componentDidMount(): void {
    this.fetchUserDetails();
  }

  @autobind
  private _search(): void {
    this.fetchUserDetails();
  }

  @autobind
  private _onSearchForChanged(newValue: string): void {
    this.setState({
      searchFor: newValue
    });
  }

  private _getSearchForErrorMessage(value: string): string {
    return (value == null || value.length == 0 || value.indexOf(" ") < 0) ? '' : strings.SearchForValidationErrorMessage;
  }

  private fetchUserDetails(): void {
    this.props.context.msGraphClientFactory.getClient().then((client: MSGraphClient): void => {
      client.api('users').filter(`startswith(givenname, '${escape(this.state.searchFor)}')`).get((error, response, rewResponse) => {
        if (error) {
          console.error("Message is: " + error);
          return;
        }

        const users = new Array<IUser>();

        response.value.map((item: IUser) => {
          console.log(item);
          users.push({ ...item });
        });

        this.setState({ users });
      });
    });
  }
  public render(): React.ReactElement<IShowAllUsersProps> {

    return (

      <div className={styles.showAllUsers}>
        <TextField
          label={strings.SearchFor}
          required={true}
          value={this.state.searchFor}
          onChanged={this._onSearchForChanged}
          onGetErrorMessage={this._getSearchForErrorMessage} />

        <p className={styles.title}>
          <PrimaryButton
            text="Search"
            title="Search"
            onClick={this._search} />
        </p>

        {
          (this.state.users != null && this.state.users.length > 0) ?
            <p className={styles.row}>
              <DetailsList
                items={this.state.users}
                columns={_userListColumns}
                setKey="set"
                checkboxVisibility={CheckboxVisibility.hidden}
                selectionMode={SelectionMode.none}
                layoutMode={DetailsListLayoutMode.fixedColumns}
                compact={true}
              />
            </p> : null
        }
      </div>
    );
  }
}
