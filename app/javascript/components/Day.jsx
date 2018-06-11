import React from "react"
import PropTypes from "prop-types"
import Meal from "./Meal"

class Day extends React.Component {
  render () {
    let breakfast
    if (this.props.day === 0) {
      breakfast = <div className='bg-washed-green f6'>
        <div className='dark-green br bl pa1 ph1'>
          <div className='pa1 nowrap dark-gray overflow-x-auto'>
            <br />
          </div>
          <div className='pa1 nowrap overflow-x-auto dark-gray'>
            <br />
          </div>
        </div>
      </div>
    } else {
      breakfast = <Meal meal='breakfast' menu={this.props.breakfast} attendance={this.props.breakfast_attendance} attendees={this.props.breakfast_attendees} host={this.props.breakfast_host} link={this.props.breakfast_link} open={this.props.breakfast_open} />
    }
    return (
      <div className='w-20 tl pa1 f5'>
        <div className='pa1 tc bg-dark-green white'>
          {this.props.date}
        </div>
        {breakfast}
        <Meal meal='dinner' menu={this.props.dinner} attendance={this.props.dinner_attendance} attendees={this.props.dinner_attendees} host={this.props.dinner_host} link={this.props.dinner_link} open={this.props.dinner_open} />
      </div>
    );
  }
}

export default Day
