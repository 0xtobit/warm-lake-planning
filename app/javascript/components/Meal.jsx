import React from "react"
import PropTypes from "prop-types"
import Attendees from "./Attendees"
import {emojify} from 'react-emojione'

class Meal extends React.Component {
  constructor (props) {
    super(props)

    this.state = {showAttendees: false}

    this.handleMouseLeave.bind(this)
    this.handleMouseEnter.bind(this)
  }

  handleMouseEnter (e) {
    this.setState({showAttendees: true})
  }

  handleMouseLeave (e) {
    this.setState({showAttendees: false})
  }

  render () {
    if (this.props.meal === 'breakfast') {
      var meal_icon = <span title='Breakfast' className='ph2'>{emojify(':cooking:', {output: 'unicode'})}</span>
      var border_class = 'dark-green br bl pa1 ph1'
    } else {
      var meal_icon = <span title='Dinner' className='ph2'>{emojify(':cut_of_meat:', {output: 'unicode'})}</span>
      var border_class = 'dark-green ba pa1 ph1'
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

    return (
      <div className='bg-washed-green f6'>
        <div className={border_class}>
          <div className='pa1 nowrap dark-gray overflow-x-auto'>
            {meal_icon}
            {menu}
          </div>
          <div className='pa1 nowrap overflow-x-auto dark-gray'>
            {this.state.showAttendees && (<span onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)} className='pl0 ml0 absolute br3 white bg-dark-gray wrap'>
              <Attendees attendees={this.props.attendees}/>
            </span>)}
            <span onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)}>
              <i title='Attendance' className='fa fa-users ph2' />
              <code>{this.props.attendance}</code>
            </span>
            <span className='pl2 f6 i'>
              {host}
              {!this.props.open && <a href={this.props.link} className='dim dark-gray ph1 f7 no-underline'><i className='fa fa-edit'></i></a>}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Meal
