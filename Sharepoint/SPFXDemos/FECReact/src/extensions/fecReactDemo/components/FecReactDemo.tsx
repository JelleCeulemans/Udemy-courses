import { Log } from "@microsoft/sp-core-library";
import { override } from "@microsoft/decorators";
import * as React from "react";

import styles from "./FecReactDemo.module.scss";

export interface IFecReactDemoProps {
  text: string;
}

const LOG_SOURCE: string = "FecReactDemo";

export default class FecReactDemo extends React.Component<
  IFecReactDemoProps,
  {}
> {
  @override
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, "React Element: FecReactDemo mounted");
  }

  @override
  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, "React Element: FecReactDemo unmounted");
  }

  @override
  public render(): React.ReactElement<{}> {
    const displayStyles = {
      color: "white",
      width: `${this.props.text}px`,
      background: "red",
    };

    const spanStyles = {
      paddingLeft: '10px'
    };


    return (
      <div className={styles.FecReactDemo}>
        <div className={styles.cell}>
          <div style={displayStyles}>{this.props.text}%</div>
        </div>
      </div>
    );
  }
}
