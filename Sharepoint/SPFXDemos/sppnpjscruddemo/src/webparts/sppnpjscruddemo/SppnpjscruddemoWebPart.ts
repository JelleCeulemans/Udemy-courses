import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";

import styles from "./SppnpjscruddemoWebPart.module.scss";
import * as strings from "SppnpjscruddemoWebPartStrings";

import * as pnp from "sp-pnp-js";
import { ISoftwareListItem } from "../../ISoftwareListItem";

export interface ISppnpjscruddemoWebPartProps {
  description: string;
}

export default class SppnpjscruddemoWebPart extends BaseClientSideWebPart<
  ISppnpjscruddemoWebPartProps
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
<p id="status"></p>
<h2>Get All List Items</h2>
<hr/>
<div id="listData"></div>`;

    this.bindEvents();
    // this.readAllItems();
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
    pnp.sp.web.lists.getByTitle("SoftwareCatalog").items.getById(softwareId).delete().then(() => alert("list item Deleted"));
  }

  private readAllItems(): void {
   pnp.sp.web.lists.getByTitle("SoftwareCatalog").items.get().then((listItems: ISoftwareListItem[]) => {
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
      const listContainer: Element = this.domElement.querySelector('#listData');
      listContainer.innerHTML = html;
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

    const softwareId: number = document.getElementById("softwareId")["value"];

    const itemBody: any = {
      Title: softwareTitle,
      SoftwareVendor: softwareVendor,
      SoftwareDescription: softwareDescription,
      SoftwareName: softwareName,
      SoftwareVersion: softwareVersion,
    };

    pnp.sp.web.lists
      .getByTitle("SoftwareCatalog")
      .items.getById(softwareId)
      .update(itemBody)
      .then(() => alert("Details Updated"))
      .catch(() => alert("Woepsie poopsie this went very wrroonnggg"));
  }

  private readListItem(): void {
    const softwareId = document.getElementById("softwareId")["value"];
    pnp.sp.web.lists
      .getByTitle("SoftwareCatalog")
      .items.getById(softwareId)
      .get()
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

  private addListItem(): void {
    const softwareTitle = document.getElementById("softwareTitle")["value"];
    const softwareName = document.getElementById("softwareName")["value"];
    const softwareVendor = document.getElementById("softwareVendor")["value"];
    const softwareVersion = document.getElementById("softwareVersion")["value"];
    const softwareDescription = document.getElementById("softwareDescription")[
      "value"
    ];

    const itemBody: any = {
      Title: softwareTitle,
      SoftwareVendor: softwareVendor,
      SoftwareDescription: softwareDescription,
      SoftwareName: softwareName,
      SoftwareVersion: softwareVersion,
    };

    pnp.sp.web.lists
      .getByTitle("SoftwareCatalog")
      .items.add(itemBody)
      .then(() => alert("success"))
      .catch((error) => console.log(error));
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
