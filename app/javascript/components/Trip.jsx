import React from "react"
import PropTypes from "prop-types"
import Day from "./Day"

class Trip extends React.Component {
  render () {
    var days = this.props.days.map( (day) =>
      <Day key={day.date} {...day} />
    )
    return (
      <div className='flex flex-wrap'>
        {days}
      </div>
    );
  }
}

export default Trip
