import * as React from 'react';
import styles from './ReactLifecycleDemo.module.scss';
import { IReactLifecycleDemoProps } from './IReactLifecycleDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';

export interface IReactLifecycleState {
  stageTitle: string;
}

export default class ReactLifecycleDemo extends React.Component<IReactLifecycleDemoProps,  IReactLifecycleState> {

  public constructor(props: IReactLifecycleDemoProps, state: IReactLifecycleState) {
    super(props);
    this.state = {
      stageTitle: 'component Construtor has been called'
    };

    this.updateState = this.updateState.bind(this);

    console.log('Stage Title from constructor: ' + this.state.stageTitle);
  }


  public componentWillMount() {
    console.log('component will mount has been called');
  }

  public componentDidMount() {
    console.log('Stage Title from componentDidMount: ' + this.state.stageTitle);
    this.setState({
      stageTitle: 'componentDidmount has een called'
    });
  }

  public updateState() {
    this.setState({
      stageTitle: 'updateState has been called'
    });
  }


  public render(): React.ReactElement<IReactLifecycleDemoProps> {
    return (
      <div>
        <h1>REACT component's Lifecycle</h1>
        <h3>{this.state.stageTitle}</h3>
        <button onClick={this.updateState}>Click Here to Update Sate Data!</button>
      </div>
    );
  }

  public componentWillUnmount() {
    console.log('Component will unmount has been called');
  }
}
