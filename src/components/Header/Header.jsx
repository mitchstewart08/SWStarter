import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import './Header.css'

export default class Header extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="Header">
        <Link to="/" className="logo">{this.props.title}</Link>
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
}