import React, { Component } from 'react';
import {string} from 'prop-types'

class Button extends Component {
  static propTypes = {
    type: string,
    className: string
  }

  static defaultProps = {
    type: 'button',
    className: 'button'
  }

  render(){
    const {type, className} = this.props
    return <button type={type} className={className} >提交</button>
  }
}

export default Button