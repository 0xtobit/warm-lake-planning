import React from "react"

class FetchResponse extends React.Component {
  render () {
    if (this.props.success) {
      var message_color = 'bg-light-green'
    } else {
      var message_color = 'bg-light-red'
    }
    return (
      <div className=''>
        <span className={`pa2 br2 dark-gray ${message_color}`}>
          {this.props.message}
        </span>
      </div>
    );
  }
}

export default FetchResponse
