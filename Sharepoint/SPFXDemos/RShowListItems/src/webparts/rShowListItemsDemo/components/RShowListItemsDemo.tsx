import * as React from "react";
import styles from "./RShowListItemsDemo.module.scss";
import { IRShowListItemsDemoProps } from "./IRShowListItemsDemoProps";
import { escape } from "@microsoft/sp-lodash-subset";

import * as jquery from "jquery";

export interface IRShowListItemsState {
  listItems: [
    {
      Title: "";
      ID: "";
      SoftwareName: "";
    }
  ];
}

export default class RShowListItemsDemo extends React.Component<
  IRShowListItemsDemoProps,
  IRShowListItemsState
> {
  static siteUrl: string = "";
  public constructor(
    props: IRShowListItemsDemoProps,
    state: IRShowListItemsState
  ) {
    super(props);
    this.state = {
      listItems: [
        {
          Title: "",
          ID: "",
          SoftwareName: "",
        },
      ],
    };
    RShowListItemsDemo.siteUrl = this.props.websiteUrl;
  }

  public componentDidMount() {
    const reactContextHandler = this;
    jquery.ajax({
      url: `${RShowListItemsDemo.siteUrl}/_api/web/lists/getbytitle('MicrosoftSoftware')/items`,
      type: "GET",
      headers: { Accept: "application/json;odata=verbose;" },
      success: (resultData) => {
        //console.log(`${RShowListItemsDemo.siteUrl}/_api/web/lists/getbytitle('MicrosoftSoftware')/items`);
        console.log(resultData.d.results);
        reactContextHandler.setState({
          listItems: resultData.d.results,
        });
      },
      error: (jqXHR, textStatus, errorThrown) => {},
    });
  }

  private createUrl(itemID: string) {
    return `${RShowListItemsDemo.siteUrl}/lists/MicrosoftSoftware/DispForm.aspx?ID=${itemID}`;
  }

  public render(): React.ReactElement<IRShowListItemsDemoProps> {

    const tableContent = this.state.listItems.map((item) => {
      return (
        <tr key={item.ID}>
          <td>
            <a className={styles.label} href={this.createUrl(item.ID)}>
              {item.Title}
            </a>
          </td>
          <td className={styles.label}>{item.ID}</td>
          <td className={styles.label}>{item.SoftwareName}</td>
        </tr>
      );
    });

    const listContent = this.state.listItems.map((item) => {
      return (
        <li key={item.ID}>
          <a className={styles.label} href={this.createUrl(item.ID)}>
            <span>{item.Title}</span>,<span>{item.SoftwareName}</span>
          </a>
        </li>
      );
    });

    return (
      <div className={styles.rShowListItemsDemo}>
        <table className={styles.row}>{tableContent}</table>
        <ol>{listContent}</ol>
      </div>
    );
  }
}
