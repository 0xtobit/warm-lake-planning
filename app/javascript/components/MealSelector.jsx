import React from 'react'
import PropTypes from 'prop-types'
import {emojify} from 'react-emojione'

class MealSelector extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick.bind(this)
  }

  handleClick (e, meal) {
    this.props.mealClick(e, meal)
  }

  render () {
    var selected_color = 'dim bg-moon-gray'
    var unselected_color = 'hover-bg-near-white'
    if (this.props.selected.indexOf(true) !== -1) {
      var color = selected_color
      if (this.props.selected[0] == true) {
        var color0 = selected_color
      } else {
        var color0 = unselected_color
      }
      if (this.props.selected[1] == true) {
        var color1 = selected_color
      } else {
        var color1 = unselected_color
      }
      if (this.props.selected[2] == true) {
        var color2 = selected_color
      } else {
        var color2 = unselected_color
      }
    } else {
      var color = unselected_color
      var color0 = unselected_color
      var color1 = unselected_color
      var color2 = unselected_color
    }
    // TODO all on one line
    return (
      <div className='pa1'>
        <div className='tl tc f6'>
          <div className={`ba pa2 ${color}`} onClick={this.props.bigClick}>
            {this.props.day}
          </div>
          <div className='flex flex-box w-100 f5'>
            <div title='Breakfast' className={`pa2 bb bl ${color0}`} onClick={this.handleClick.bind(this, 0)}>
              {emojify(':cooking:', {output: 'unicode'})}
            </div>
            <div title='Lunch' className={`pa2 bb bl ${color1}`} onClick={this.handleClick.bind(this, 1)}>
              {emojify(':sandwich:', {output: 'unicode'})}
            </div>
            <div title='Dinner' className={`pa2 bb bl br ${color2}`} onClick={this.handleClick.bind(this, 2)}>
              {emojify(':cut_of_meat:', {output: 'unicode'})}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MealSelector
