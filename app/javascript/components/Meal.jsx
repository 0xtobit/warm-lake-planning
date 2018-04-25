import React from "react"
import PropTypes from "prop-types"
import {emojify} from 'react-emojione'

class Meal extends React.Component {
  render () {
    if (this.props.meal === 'breakfast') {
      var meal_icon = <span title='Breakfast' className='ph2'>{emojify(':cooking:', {output: 'unicode'})}</span>
      var border_class = 'bt br bl pa1 ph1'
    } else {
      var meal_icon = <span title='Dinner' className='ph2'>{emojify(':cut_of_meat:', {output: 'unicode'})}</span>
      var border_class = 'ba pa1 ph1'
    };

    if (this.props.open) {
      var menu = (
        <a href={this.props.link} className='dim ba br2 bg-dark-gray white ph1 f5 no-underline'>
          Claim meal!
        </a>)
    } else {
      var menu = <span className='f6'>{this.props.menu}</span>
      var host = 'by ' + this.props.host
    }

    var i = 0
    if (this.props.attendees != null) {
      var attendees = this.props.attendees.map( (attendees) =>
        <span key={i++}>{attendees}<br /></span>
      )
    } else {
      var attendees = ''
    }

    return (
      <div className='bg-washed-green'>
        <div className={border_class}>
          <div className='pa1 f5 nowrap overflow-x-auto'>
            {meal_icon}
            {menu}
          </div>
          <div className='pa1 hide-child'>
            <span className='dt child pl0 ml0 absolute center ba br3 white bg-dark-gray wrap w-10'>
              <span className='ph3 pv2'>{attendees}</span>
            </span>
            <i title='Attendance' className='fa fa-users ph2'/>
            <code>{this.props.attendance}</code>
            <span className='pl2 f6 i'>
              {host}
              {this.props.open && '' /* FIXME: edit link */ }
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Meal
