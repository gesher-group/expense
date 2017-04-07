import React, { Component } from 'react'
import Style from '../general/style'
import sheet from './index.scss'

class Onboarding extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      step: 1,
      legalName: ((this.props.legalName) ? this.props.legalName : null),
      ucscEmail: ((this.props.legalName) ? this.props.legalName : null),
      phone: ((this.props.legalName) ? this.props.legalName : null),
      slack: {
        value: null,
        error: null
      }
    }
  }

  render () {
    return (
      <div>
        <Style sheet={sheet} />
        <header>
          <nav>
            <h1>/expense</h1>
            <div onClick={() => this.signOut(this.props.firebase)} className='link subtext'>Logout</div>
          </nav>

          <p className='subtext'>
            Need help? Post in <a title='Finance channel link' className='link'
              href='https://gesher-group.slack.com/messages/finance/'>#finance</a>.
          </p>
          <hr />
        </header>

        <section>
          <div className='inputGroup'>
            <p>What's your Slack username?</p>
            <input type='text' placeholder='@username' />
            <span className='error'>{ this.state.slack.error }</span>
          </div>

          <div className='inputGroup'>
            <p>What's your legal name?</p>
            <input type='text' placeholder='Firstname lastname' />
          </div>

          <div className='inputGroup'>
            <p>What's your phone number?</p>
            <p className='helperText'>This is required for submitting reimbursement forms to the university.</p>
            <input type='tel' placeholder='123.456.7890' />
          </div>
        </section>
      </div>
    )
  }
}
export default Onboarding
