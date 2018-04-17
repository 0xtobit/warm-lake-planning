import React from "react"
import PropTypes from "prop-types"
import {emojify} from 'react-emojione'

class Meal extends React.Component {
  render () {
    if (this.props.meal === 'breakfast') {
      var meal_icon = <span className='ph2'>{emojify(':cooking:', {output: 'unicode'})}</span>
      var border_class = 'bt br bl pa1 ph1'
    } else {
      var meal_icon = <span className='ph2'>{emojify(':cut_of_meat:', {output: 'unicode'})}</span>
      var border_class = 'ba pa1 ph1'
    };

    if (this.props.open) {
      var menu = <a href={'meals/sign_up?day?=' + String(this.props.day) } className='i'>Sign up for this meal!</a>
    } else {
      var menu = this.props.menu
      var host = 'by ' + this.props.host
    }

    return (
      <div className=''>
        <div className={border_class}>
          <div className='pa1 f5'>
            {meal_icon}
            <span onClick={this.props.handleClick} >
              {menu}
            </span>
          </div>
          <div className='pa1'>
            <i className='fa fa-users ph2'/>
            <code>{this.props.attendance}</code>
            <div className='i fr'>
              {host}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Meal
