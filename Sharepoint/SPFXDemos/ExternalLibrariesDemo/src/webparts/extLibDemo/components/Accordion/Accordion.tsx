import * as React from 'react';
import { IAccordionProps } from './IAccordionProps';
import AccordionItem from './AccordionItem/AccordioItem';
import Aux from '../../hoc/Auxiliary';

export default class Accordion extends React.Component<IAccordionProps, {}> {
  public render(): React.ReactElement<IAccordionProps> {

    const accordionItems = this.props.content.map((item, i) => <AccordionItem item={item} key={i} />);


    return (
      <div className="accordion">
        {accordionItems}
      </div>
    );
  }
}
