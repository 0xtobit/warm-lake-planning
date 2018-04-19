import React from "react"
import PropTypes from "prop-types"
import MealSelector from "./MealSelector"
import ErrorBoundary from "./ErrorBoundary"
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
    var newSelected = JSON.parse(JSON.stringify(this.state.selected.slice()))
    newSelected[i][meal] = !newSelected[i][meal]
    this.setState({selected: newSelected, selectionError: newSelected.find((x) => {return x.includes(true)}) === undefined})
  }

  handleClick (i, event) {
    // TODO: handle shift click to do range
    var newSelected = this.state.selected.slice()
    newSelected[i] = Array(3).fill(newSelected[i].indexOf(true) === -1)
    this.setState({selected: newSelected, selectionError: newSelected.find((x) => {return x.includes(true)}) === undefined})
  }

  handleChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit (e) {
    e.preventDefault()
    // If no trues are set in the selected matrix
    fetch('/attendances', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': this.props.csrf_token,
      },
      body: JSON.stringify({
        selected: this.state.selected,
        party_name: this.state.partyName,
        attendees: this.state.attendees,
      }),
      credentials: 'same-origin'
    }).then ( (response) => {
      console.log(response)
    })
  }

  render () {
    var mealSelectors = new Array
    for(var i=0; i<this.props.days; i++) {
      mealSelectors.push(<MealSelector key={i} day={moment(this.props.first_day, 'MMDDYYYY').add(i, 'days').format('ddd, MMM Do')} selected={this.state.selected[i]} mealClick={this.handleMealClick.bind(this, i)} bigClick={this.handleClick.bind(this, i)} />)
    }
    return (
      <ErrorBoundary>
        <form ref={form => this.formEl = form} onSubmit={this.handleSubmit.bind(this)}>
          <div className="measure">
            <label className="f6 b db mb2">Name of Party</label>
            <input name='partyName' value={this.state.partyName} className="input-reset ba b--black-20 pa2 mb2 db" type="text" aria-describedby="party-name-desc" onChange={this.handleChange.bind(this)} required={true} />
            <label className="f6 b db mb2"> Number of Attendees</label>
            <input name='attendees' type='number' value={this.state.attendees} className="input-reset ba b--black-20 pa2 mb2 db" aria-describedby="attendees-desc" onChange={this.handleChange.bind(this)} required={true} />
          </div>
          <div className='flex flex-wrap'>
            {mealSelectors}
          </div>
          {!this.state.selectionError &&
          <input type='submit' className='f6 link dim br-pill ph3 pv2 mb2 dib white bg-navy' value='Submit' />}
         {this.state.selectionError && <h2 className='red'>Please select at least one day or meal to attend</h2>}
        </form>
      </ErrorBoundary>
    );
  }
}

export default Attendance
