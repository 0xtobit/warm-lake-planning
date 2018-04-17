import React from "react"
import PropTypes from "prop-types"
import MealSelector from "./MealSelector"
import 'whatwg-fetch'
import moment from 'moment'

class Attendance extends React.Component {
  constructor(props) {
    super(props)
    this.state = {selected: Array(this.props.days).fill([false, false, false])}

    this.handleChange.bind(this)
    this.handleMealClick.bind(this)
    this.handleClick.bind(this)
    this.handleSubmit.bind(this)
  }

  handleMealClick (i, meal, event) {
    var new_select = JSON.parse(JSON.stringify(this.state.selected.slice()))
    new_select[i][meal] = !new_select[i][meal]
    this.setState({selected: new_select})
  }

  handleClick (i, event) {
    // TODO: handle shift click to do range
    var new_selected = this.state.selected.slice()
    new_selected[i] = Array(3).fill(new_selected[i].indexOf(true) === -1)
    this.setState({selected: new_selected})
  }

  handleChange (e) {
    this.setState({attendees: parseInt(e.target.value)})
  }

  handleSubmit (e) {
    console.log(this.state)
    e.preventDefault()
    fetch('/trip/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        selected: this.state.selected,
        attendees: 0,
      })
    })
  }

  render () {
    var mealSelectors = new Array
    for(var i=0; i<this.props.days; i++) {
      mealSelectors.push(<MealSelector key={i} day={moment(this.props.first_day, 'MMDDYYYY').add(i, 'days').format('ddd, MMM Do')} selected={this.state.selected[i]} mealClick={this.handleMealClick.bind(this, i)} bigClick={this.handleClick.bind(this, i)} />)
    }
    return (
      <div>
        <div className='flex flex-wrap'>
          {mealSelectors}
        </div>
        <input type='number' onChange={this.handleChange.bind(this)}></input>
        <a className='f6 link dim br-pill ph3 pv2 mb2 dib white bg-navy' href='#' onClick={this.handleSubmit.bind(this)}>
          Submit
        </a>
      </div>
    );
  }
}

export default Attendance
