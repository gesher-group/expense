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
      address: [((this.props.legalName) ? this.props.legalName : null)],
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

          <div className='inputGroup'>
            <p>What's your address?</p>
            <p className='helperText'>This is also required for submitting reimbursement forms to the university.</p>
            <input type='text' placeholder='123 Anydrive Road' />
            <div className='inputsRow'>
              <select className='oneThird'>
                <option value='AL'>AL</option>
                <option value='AK'>AK</option>
                <option value='AZ'>AZ</option>
                <option value='AR'>AR</option>
                <option value='CA'>CA</option>
                <option value='CO'>CO</option>
                <option value='CT'>CT</option>
                <option value='DE'>DE</option>
                <option value='DC'>DC</option>
                <option value='FL'>FL</option>
                <option value='GA'>GA</option>
                <option value='HI'>HI</option>
                <option value='ID'>ID</option>
                <option value='IL'>IL</option>
                <option value='IN'>IN</option>
                <option value='IA'>IA</option>
                <option value='KS'>KS</option>
                <option value='KY'>KY</option>
                <option value='LA'>LA</option>
                <option value='ME'>ME</option>
                <option value='MD'>MD</option>
                <option value='MA'>MA</option>
                <option value='MI'>MI</option>
                <option value='MN'>MN</option>
                <option value='MS'>MS</option>
                <option value='MO'>MO</option>
                <option value='MT'>MT</option>
                <option value='NE'>NE</option>
                <option value='NV'>NV</option>
                <option value='NH'>NH</option>
                <option value='NJ'>NJ</option>
                <option value='NM'>NM</option>
                <option value='NY'>NY</option>
                <option value='NC'>NC</option>
                <option value='ND'>ND</option>
                <option value='OH'>OH</option>
                <option value='OK'>OK</option>
                <option value='OR'>OR</option>
                <option value='PA'>PA</option>
                <option value='RI'>RI</option>
                <option value='SC'>SC</option>
                <option value='SD'>SD</option>
                <option value='TN'>TN</option>
                <option value='TX'>TX</option>
                <option value='UT'>UT</option>
                <option value='VT'>VT</option>
                <option value='VA'>VA</option>
                <option value='WA'>WA</option>
                <option value='WV'>WV</option>
                <option value='WI'>WI</option>
                <option value='WY'>WY</option>
              </select>
              <input type='text' placeholder='Santa Cruz' className='twoThird' />
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Onboarding
