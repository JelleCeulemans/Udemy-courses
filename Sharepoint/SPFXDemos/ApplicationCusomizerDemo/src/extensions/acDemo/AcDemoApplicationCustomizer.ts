import { override } from "@microsoft/decorators";
import { Log } from "@microsoft/sp-core-library";
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName,
} from "@microsoft/sp-application-base";
import { Dialog } from "@microsoft/sp-dialog";

import { escape } from "@microsoft/sp-lodash-subset";

import * as strings from "AcDemoApplicationCustomizerStrings";

import styles from "./ACDemo.module.scss";

const LOG_SOURCE: string = "AcDemoApplicationCustomizer";

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IAcDemoApplicationCustomizerProperties {
  // This is an example; replace with your own property
  top: string;
  bottom: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class AcDemoApplicationCustomizer extends BaseApplicationCustomizer<
  IAcDemoApplicationCustomizerProperties
> {
  private _topPlaceholder: PlaceholderContent | undefined;
  private _bottomPlaceholder: PlaceholderContent | undefined;

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    this.context.placeholderProvider.changedEvent.add(
      this,
      this._renderPlaceHolders
    );

    this._renderPlaceHolders();

    return Promise.resolve();
  }

  private _renderPlaceHolders() {
    console.log(
      "Available placeholders are: ",
      this.context.placeholderProvider.placeholderNames
        .map((phn) => PlaceholderName[phn])
        .join(", ")
    );

    if (!this._topPlaceholder) {
      this._topPlaceholder = this.context.placeholderProvider.tryCreateContent(
        PlaceholderName.Top,
        { onDispose: this._onDispose }
      );

      if (!this._topPlaceholder) {
        console.error("The placeholder Top was nog found...");
        return;
      }
    }

    if (this.properties) {
      let topString: string = this.properties.top;
      if (!topString) {
        topString = "(Top property was not defined...)";
      }

      if (this._topPlaceholder.domElement) {
        this._topPlaceholder.domElement.innerHTML = `
        <div class="${styles.acdemoapp}">
        <div class="ms-bgColor-themeDark ms-fontColot-white ${
          styles.topPlaceholder
        }">
        <i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i>${escape(
          topString
        )}
        </div></div>`;
      }
    }


    if (!this._bottomPlaceholder) {
      this._bottomPlaceholder = this.context.placeholderProvider.tryCreateContent(
        PlaceholderName.Bottom,
        { onDispose: this._onDispose }
      );

      if (!this._bottomPlaceholder) {
        console.error("The placeholder Top was nog found...");
        return;
      }
    }

    if (this.properties) {
      let bottomString: string = this.properties.bottom;
      if (!bottomString) {
        bottomString = "(Top property was not defined...)";
      }

      if (this._bottomPlaceholder.domElement) {
        this._bottomPlaceholder.domElement.innerHTML = `
        <div class="${styles.acdemoapp}">
        <div class="ms-bgColor-themeDark ms-fontColot-white ${
          styles.bottomPlaceholder
        }">
        <i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i>${escape(
          bottomString
        )}
        </div></div>`;
      }
    }
  }

  private _onDispose(): void {
    console.log('Disposed custom top and bottom placeholders.');
  }
}
