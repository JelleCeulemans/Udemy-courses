import * as React from 'react';
import { IAccordionItemProps } from './IAccordionItemProps';
import Aux from '../../../hoc/Auxiliary';

export default class AccordionItem extends React.Component<IAccordionItemProps, {}> {
  public render(): React.ReactElement<IAccordionItemProps> {
    const listItems = this.props.item.listItems.map((item, i) => <li key={i}>{item}</li>);
    return (
      <Aux>
        <h3>{this.props.item.title}</h3>
       <div>
       <ul>{listItems}</ul>
       </div>
      </Aux>
    );
  }
}
