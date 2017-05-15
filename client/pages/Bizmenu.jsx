import React from 'react';
import { connect } from 'react-redux';
import * as UserActions from '../actions';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

export default class Manage extends React.Component {


  render() {
    const loc = window.location.href.split('/');
    console.log(loc[loc.length - 1]);
    const allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k]);
    return (
      <div>
        <BigCalendar
          selectable
          defaultView="week"
          startAccessor="start"
          endAccessor="end"
          views={allViews}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(Date.now())}
          events={
          [{
              title: 'All Day Event',
              allDay: false,
              start: new Date(2017, 4, 15, 8),
              end: new Date(2017, 4, 15, 12),
            }]
          }
        />
      </div>
    );
  }
}
