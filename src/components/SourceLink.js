import React, { Component } from 'react';

class SourceLink extends Component {
  constructor(props) {
    super(props)

    this.state = {}

  }

  render () {
    return (
      <div className='App-Link link'>
        <a
          href={this.props.sources[0].link}
          target="_blank"
          rel="noopener noreferrer">
          {this.props.sources[0].name}
        </a>
      </div>
    )
  }
}

export default SourceLink