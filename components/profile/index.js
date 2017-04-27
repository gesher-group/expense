import React, { Component } from 'react'
import sheet from './index.scss'
import Style from '../general/style'

class Profile extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      name: '',
      email: this.props.user.email,
      phone: '',
      address: []
    }
  }

  signOut (firebase) {
    console.info('Signing out...')
    firebase.auth().signOut()
    return window.location.reload(true)
  }

  componentDidMount () {
    let db = this.props.firebase.database()

    db.ref('users').child(this.props.user.uid).once('value')
      .then((snapshot) => {
        this.setState({
          name: snapshot.val()['name'],
          phone: snapshot.val()['phone'],
          address: snapshot.val()['address'].split('\\n')
        })
      },
    (error) => console.warn('Something went wrong: ', error))
  }

  formatAddress (address) {
    let res = []
    for (let i in address) {
      res.push(<div className='address' key={`address${i}`}>{address[i]}</div>)
    }

    return res
  }

  formatPhoneNumber (original) {
    if (original === undefined) return original
    let cleanNumber = original.toString().replace(/[^0-9]+/g, '')
    let response = cleanNumber
    let length = cleanNumber.length

    if (length > 14) {
      cleanNumber = cleanNumber.substring(0, 14)
      length = cleanNumber.length
    }

    if (length > 10) {
      response = `+${cleanNumber.substring(0, length - 10)} (${
        cleanNumber.substring(length - 10, length - 7)}) ${
        cleanNumber.substring(length - 7, length - 4)}-${
        cleanNumber.substring(length - 4, length)}`
    } else if (length > 7) {
      response = `(${cleanNumber.substring(0, 3)}) ${
        cleanNumber.substring(3, 6)}-${cleanNumber.substring(6, length)}`
    } else if (length > 3) {
      response = `(${cleanNumber.substring(0, 3)}) ${
        cleanNumber.substring(3, length)}`
    } else if (length > 2) response = `(${cleanNumber.substring(0, 3)}`

    return response
  }

  getSavedData () {
    if (this.state.name) {
      return (
        <div className='savedData'>
          <div className='row'>
            <div className='key'>Saved data</div>
            {/* <div className='key'><div class='onboarding'>Edit</div></div> */}
            {/* TODO: Make that edit button do stuff */}
          </div>

          <div className='row' key='name'>
            <div className='key'>Name</div>
            <div className='value'>{ this.state.name }</div>
          </div>

          <div className='row'>
            <div className='key'>Email</div>
            <div className='value'>{ this.state.email }</div>
          </div>

          <div className='row'>
            <div className='key'>Phone</div>
            <div className='value'>{ this.formatPhoneNumber(this.state.phone) }</div>
          </div>

          <div className='row'>
            <div className='key'>Address</div>
            <div className='value'>{ this.formatAddress(this.state.address) }</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='savedData'>
          <div className='row'>
            <div className='key'>Saved data</div>
          </div>

          <div className='row' key='name'>
            <div className='key'>Name</div>
            <div className='value' />
          </div>

          <div className='row'>
            <div className='key'>Email</div>
            <div className='value' />
          </div>

          <div className='row'>
            <div className='key'>Phone</div>
            <div className='value' />
          </div>

          <div className='row'>
            <div className='key'>Address</div>
            <div className='value'><br /><br /></div>
          </div>
        </div>
      )
    }
  }

  render () {
    return (
      <div className='page' key='page'>
        <Style sheet={sheet} />
        <header>
          <nav>
            <h1>/expense</h1>
            <div onClick={() => this.signOut(this.props.firebase)} className='link subtext'>Logout</div>
            <img className='profile-pic' src={this.props.user.profilePicture} />
          </nav>

          <p>Make sure the saved data we have below is accurate—we use this to track expenses, and send you checks.</p>
          <p className='subtext'>
            Need help? Post in <a href='https://gesher-group.slack.com/messages/finance/' className='link'>#finance</a>.
          </p>
        </header>

        { this.getSavedData() }

        {/* <Link to='/expense' className='button'>File a new expense report</Link> */}
      </div>
    )
  }
}

export default Profile
