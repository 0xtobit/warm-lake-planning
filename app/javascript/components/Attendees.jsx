import React from "react"

class Attendees extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let comma = ''
    let attendee_lines = []
    let i
    for (i=0; i < this.props.attendees.length / 3; i++) {
      attendee_lines.push(<span key={i}>{this.props.attendees.slice(i*3, i*3+3).join(', ')}<br /></span>)
    }

    return (
      <div className='ph3 pv2'>
        {attendee_lines}
      </div>
    )
  }
}

export default Attendees
