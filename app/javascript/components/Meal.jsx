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
      var menu = (
        <a href={this.props.link} className='dim ba br2 bg-dark-gray white ph1 f5 no-underline'>
          Claim meal!
        </a>)
    } else {
      var menu = <span className='f6'>{this.props.menu}</span>
      var host = 'by ' + this.props.host
    }

    return (
      <div>
        <div className={border_class}>
          <div className='pa1 f5 nowrap overflow-x-auto'>
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
              {this.props.open && '' /* FIXME: edit link */ }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Meal
