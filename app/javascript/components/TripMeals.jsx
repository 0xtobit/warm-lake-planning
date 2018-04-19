import React from "react"
import PropTypes from "prop-types"
import Day from "./Day"
import ErrorBoundary from "./ErrorBoundary"

class TripMeals extends React.Component {
  render () {
    var days = this.props.days.map( (day) =>
      <Day key={day.date} {...day} />
    )
    return (
      <ErrorBoundary>
        <div className='flex flex-wrap'>
          {days}
        </div>
      </ErrorBoundary>
    );
  }
}

export default TripMeals
