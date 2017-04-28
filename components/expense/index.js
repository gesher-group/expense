import React, { Component } from 'react'
import sheet from './index.scss'
import Style from '../general/style'

class Expense extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
    }
  }

  render () {
    return (
      <div className='expense' >
        <Style sheet={sheet} />
        Yo dawg, you about to file a new expense. That's dope.
      </div>
    )
  }
}

export default Expense
