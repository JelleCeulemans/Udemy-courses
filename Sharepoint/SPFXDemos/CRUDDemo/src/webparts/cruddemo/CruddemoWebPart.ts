import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";

import styles from "./CruddemoWebPart.module.scss";
import * as strings from "CruddemoWebPartStrings";

import {
  ISPHttpClientOptions,
  SPHttpClient,
  SPHttpClientResponse,
} from "@microsoft/sp-http";
import { ISoftwareListItem } from "../../ISoftwareListItem";

export interface ICruddemoWebPartProps {
  description: string;
}

export default class CruddemoWebPart extends BaseClientSideWebPart<
  ICruddemoWebPartProps
> {
  public render(): void {
    this.domElement.innerHTML = `<div>
    <table border="5" bgcolor="aqua">
        <tr>
            <th>Please Enter Software ID</th>
            <td><input type="text" id="softwareId"></td>
            <td><input type="button" id="btnRead" value="Read Details"></td>
        </tr>
        <tr>
            <th>Software Title</th>
            <td><input type="text" id="softwareTitle"></td>
        </tr>
        <tr>
            <th>Software Name</th>
            <td><input type="text" id="softwareName"></td>
        </tr>
        <tr>
            <th>Software Vendot</th>
            <td>
            <select id="softwareVendor">
                <option value="Microsoft">Microsoft</option>
                <option value="Sun">Sun</option>
                <option value="Oracle">Oracle</option>
                <option value="Google">Google</option>
            </select>
            </td>
        </tr>
        <tr>
            <th>Software Version</th>
            <td><input type="text" id="softwareVersion"></td>
        </tr>
        <tr>
            <th>Software Description</th>
            <td><textarea id="softwareDescription" cols="40" rows="5"></textarea></td>
        </tr>
        <tr>
            <td colspan="2" align="center">
                <input type="button" value="Insert Item" id="btnSubmit">
                <input type="button" value="Update" id="btnUpdate">
                <input type="button" value="Delete" id="btnDelete">
                <input type="button" value="Show All Records" id="btnReadAll">
            </td>
        </tr>
    </table>
</div>
<p id="status"></p>`;
    this.bindEvents();
    this.readAllItems();
  }

  private readAllItems(): void {
    this.getListItems().then((listItems: ISoftwareListItem[]) => {
      let html: string = `<table border="1" width="100%" style="border-collapse: collapse">
      <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Name</th>
          <th>Vendor</th>
          <th>Version</th>
          <th>Description</th>
      </tr>`;

      listItems.forEach((listItem: ISoftwareListItem) => {
        html += `
        <tr>
        <td>${listItem.Id}</td>
        <td>${listItem.Title}</td>
        <td>${listItem.SoftwareName}</td>
        <td>${listItem.SoftwareVendor}</td>
        <td>${listItem.SoftwareVersion}</td>
        <td>${listItem.SoftwareDescription}</td>
    </tr>`;
      });
      html += '</table>';
      const listContainer: Element = this.domElement.querySelector('#status');
      listContainer.innerHTML = html;
    });
  }

  private getListItems(): Promise<ISoftwareListItem[]> {
    const url: string =
      this.context.pageContext.site.absoluteUrl +
      "/_api/web/lists/getbytitle('SoftwareCatalog')/items";
    return this.context.spHttpClient
      .get(url, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => response.json())
      .then((json) => json.value);
  }

  private bindEvents(): void {
    this.domElement
      .querySelector("#btnSubmit")
      .addEventListener("click", () => this.addListItem());
    this.domElement
      .querySelector("#btnRead")
      .addEventListener("click", () => this.readListItem());
    this.domElement
      .querySelector("#btnUpdate")
      .addEventListener("click", () => this.updateListItem());
    this.domElement
      .querySelector("#btnDelete")
      .addEventListener("click", () => this.deleteListItem());
      this.domElement
      .querySelector("#btnReadAll")
      .addEventListener("click", () => this.readAllItems());
  }

  private deleteListItem(): void {
    const softwareId = document.getElementById("softwareId")["value"];

    const url: string =
      this.context.pageContext.site.absoluteUrl +
      "/_api/web/lists/getbytitle('SoftwareCatalog')/items(" +
      softwareId +
      ")";

    const headers: any = {
      "X-HTTP-Method": "DELETE",
      "IF-MATCH": "*",
    };

    const spHttpClientOptions: ISPHttpClientOptions = {
      headers: headers,
    };

    this.context.spHttpClient
      .post(url, SPHttpClient.configurations.v1, spHttpClientOptions)
      .then((response: SPHttpClientResponse) => {
        let statusMessage: Element = this.domElement.querySelector("#status");
        if (response.status === 204) {
          statusMessage.innerHTML =
            "Delete List Item has been deleted successfully.";
        } else {
          statusMessage.innerHTML =
            "Failed to Delete..." +
            response.status +
            " - " +
            response.statusText;
        }
      });
  }

  private updateListItem(): void {
    const softwareTitle = document.getElementById("softwareTitle")["value"];
    const softwareName = document.getElementById("softwareName")["value"];
    const softwareVendor = document.getElementById("softwareVendor")["value"];
    const softwareVersion = document.getElementById("softwareVersion")["value"];
    const softwareDescription = document.getElementById("softwareDescription")[
      "value"
    ];

    const softwareId = document.getElementById("softwareId")["value"];

    const url: string =
      this.context.pageContext.site.absoluteUrl +
      "/_api/web/lists/getbytitle('SoftwareCatalog')/items(" +
      softwareId +
      ")";

    const itemBody: any = {
      Title: softwareTitle,
      SoftwareVendor: softwareVendor,
      SoftwareDescription: softwareDescription,
      SoftwareName: softwareName,
      SoftwareVersion: softwareVersion,
    };
    const headers: any = {
      "X-HTTP-Method": "MERGE",
      "IF-MATCH": "*",
    };

    const spHttpClientOptions: ISPHttpClientOptions = {
      headers: headers,
      body: JSON.stringify(itemBody),
    };

    this.context.spHttpClient
      .post(url, SPHttpClient.configurations.v1, spHttpClientOptions)
      .then((response: SPHttpClientResponse) => {
        let statusMessage: Element = this.domElement.querySelector("#status");
        if (response.status === 204) {
          statusMessage.innerHTML = "List Item has been updated successfully.";
        } else {
          statusMessage.innerHTML =
            "List Item updation failed. " +
            response.status +
            " - " +
            response.statusText;
        }
      });
  }

  private readListItem(): void {
    const softwareId = document.getElementById("softwareId")["value"];
    this.getListItemByID(softwareId)
      .then((listItem: ISoftwareListItem) => {
        console.log(listItem);
        document.getElementById("softwareTitle")["value"] = listItem.Title;
        document.getElementById("softwareName")["value"] =
          listItem.SoftwareName;
        document.getElementById("softwareVendor")["value"] =
          listItem.SoftwareVendor;
        document.getElementById("softwareVersion")["value"] =
          listItem.SoftwareVersion;
        document.getElementById("softwareDescription")["value"] =
          listItem.SoftwareDescription;
      })
      .catch((error: Error) => {
        let statusMessage: Element = this.domElement.querySelector("#status");
        statusMessage.innerHTML =
          "Read: Could not fetch detail... " + error.message;
      });
  }

  private getListItemByID(id: string): Promise<ISoftwareListItem> {
    const url: string =
      this.context.pageContext.site.absoluteUrl +
      "/_api/web/lists/getbytitle('SoftwareCatalog')/items?$filter=Id eq " +
      id;
    return this.context.spHttpClient
      .get(url, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => response.json())
      .then((listItems: any) => listItems.value[0]);
  }

  private addListItem(): void {
    const softwareTitle = document.getElementById("softwareTitle")["value"];
    const softwareName = document.getElementById("softwareName")["value"];
    const softwareVendor = document.getElementById("softwareVendor")["value"];
    const softwareVersion = document.getElementById("softwareVersion")["value"];
    const softwareDescription = document.getElementById("softwareDescription")[
      "value"
    ];

    // console.log(softwareTitle);
    // console.log(softwareName);
    // console.log(softwareVendor);
    // console.log(softwareVersion);
    // console.log(softwareDescription);

    const url: string =
      this.context.pageContext.site.absoluteUrl +
      "/_api/web/lists/getbytitle('SoftwareCatalog')/items";

    const itemBody: any = {
      Title: softwareTitle,
      SoftwareVendor: softwareVendor,
      SoftwareDescription: softwareDescription,
      SoftwareName: softwareName,
      SoftwareVersion: softwareVersion,
    };

    const spHttpClientOptions: ISPHttpClientOptions = {
      body: JSON.stringify(itemBody),
    };

    this.context.spHttpClient
      .post(url, SPHttpClient.configurations.v1, spHttpClientOptions)
      .then((response: SPHttpClientResponse) => {
        let statusMessage: Element = this.domElement.querySelector("#status");
        if (response.status === 201) {
          statusMessage.innerHTML = "List Item has been created successfully.";
          this.clear();
        } else {
          statusMessage.innerHTML =
            "An error has occured i.e. ." +
            response.status +
            " - " +
            response.statusText;
        }
      });
  }

  private clear(): void {
    document.getElementById("softwareTitle")["value"] = "";
    document.getElementById("softwareName")["value"] = "";
    document.getElementById("softwareVendor")["value"] = "Microsoft";
    document.getElementById("softwareVersion")["value"] = "";
    document.getElementById("softwareDescription")["value"] = "";
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
