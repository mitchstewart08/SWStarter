import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Header.css'

export default class Header extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        {this.props.title}
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
}