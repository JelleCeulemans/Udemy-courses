import * as React from 'react';
import styles from './GraphApiEvents.module.scss';
import { IGraphApiEventsProps } from './IGraphApiEventsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ICaledarEventsState } from './CalendarEventsDemoState';

import { MSGraphClient } from '@microsoft/sp-http';
import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';
import Moment from 'react-moment';


export default class GraphApiEvents extends React.Component<IGraphApiEventsProps, ICaledarEventsState> {

  constructor(props: IGraphApiEventsProps) {
    super(props);
    this.state = {
      events: []
    };
  }

  // https://graph.microsoft.com/v1.0/me/events?$select=*
  public componentDidMount() {
    this.props.context.msGraphClientFactory.getClient().then((client: MSGraphClient): void => {
      client.api('/me/events').get((error, eventResponse, rawResponse?) => {
        if (error) {
          console.error('Message is: ' + error);
          return;
        }

        const calendarEvents: MicrosoftGraph.Event[] = eventResponse.value;
        this.setState({ events: calendarEvents });
      });
    });
  }

  public render(): React.ReactElement<IGraphApiEventsProps> {
    const tableStyles = {
      border: '1px solid black',
      backgroundColor: 'aqua'
    };

    return (
      <div>
        {/* <ul>{
          this.state.events.map((item) =>
            <li key={item.id}>
              {item.subject},
              {item.organizer.emailAddress.name},
              <td><Moment format="DD MMMM YYYY">{item.start.dateTime}</Moment></td>
                <td><Moment format="hh:mm">{item.start.dateTime}</Moment></td>
                <td><Moment format="DD/MMMM/YYYY">{item.end.dateTime}</Moment></td>
                <td><Moment format="hh:mm">{item.end.dateTime}</Moment></td>
            </li>)
        }</ul> */}
        <table style={tableStyles}>
          <tr>
            <th>Subject</th>
            <th>Organizer Name</th>
            <th>Start Date</th>
            <th>Start Time</th>
            <th>End Date</th>
            <th>End Time</th>
          </tr>
          {
            this.state.events.map(item =>
              <tr>
                <td>{item.subject}</td>
                <td>{item.organizer.emailAddress.name}</td>
                <td><Moment format="DD MMMM YYYY">{item.start.dateTime}</Moment></td>
                <td><Moment format="hh:mm">{item.start.dateTime}</Moment></td>
                <td><Moment format="DD/MMMM/YYYY">{item.end.dateTime}</Moment></td>
                <td><Moment format="hh:mm">{item.end.dateTime}</Moment></td>
              </tr>
            )
          }
        </table>
      </div>
    );
  }
}
