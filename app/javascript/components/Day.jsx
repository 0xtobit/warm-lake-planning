import React from "react"
import PropTypes from "prop-types"
import Meal from "./Meal"

class Day extends React.Component {
  render () {
    return (
      <div className='w-25 tl pa1 f7'>
        <div className='bt br bl pa1'>
          {this.props.date}
        </div>
        <Meal meal='breakfast' menu={this.props.breakfast} attendance={this.props.breakfast_attendance} host={this.props.breakfast_host} link={this.props.breakfast_link} open={this.props.breakfast_open} />
        <Meal meal='dinner' menu={this.props.dinner} attendance={this.props.dinner_attendance} host={this.props.dinner_host} link={this.props.dinner_link} open={this.props.dinner_open} />
      </div>
    );
  }
}

export default Day
