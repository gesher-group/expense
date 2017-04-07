import Head from 'next/head'
import React, { Component } from 'react'
import Style from '../components/general/style'
import sheet from '../components/base.scss'
import * as firebase from 'firebase'
import Profile from '../components/profile'
import SignIn from '../components/general/signin'

if (!firebase.apps.length) {
  console.log('%cCreating a new firebase instance...', 'color: grey; font-style: italic;padding: 2px')
  let config = {
    apiKey: 'AIzaSyANToL6Ybf-yoYNbB9jiZ_qjW3EVhu17P0',
    authDomain: 'expense-9fef4.firebaseapp.com',
    databaseURL: 'https://expense-9fef4.firebaseio.com',
    storageBucket: 'expense-9fef4.appspot.com',
    messagingSenderId: '144236555959'
  }

  firebase.initializeApp(config)
}

class Home extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      user: {}
    }
  }

  checkForUser () {
    console.log('Checking for user...')
    new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          resolve({
            name: user.displayName,
            email: user.email,
            profilePicture: user.photoURL,
            uid: user.uid
          })
        } else {
          reject(new Error(`Firebase error, user not initialized.`))
        }
      })
    }).then(res => {
      this.setState({ user: res })
    }).catch(res => {
      console.log('%cUser is not signed in.', 'color: dodgerblue')
    })
  }

  getWelcomeMessage () {
    return <section className='home'>
      <div className='intro'>
        <h1>/expense</h1>
        <p>An easier way to file expense reports at Gesher Group.</p>
        <p className='subtext'>
          Not a member of Gesher Group?
          <br /><br />
          We're a student-run consultancy at the University of California, at
          Santa Cruz. If you'd like to get in touch, email us below, or visit our
          website at geshergroup.org.
          <br /><br />
          &#62; <a href='mailto:team@geshergroup.org' title='Email the team'>
          team@geshergroup.org</a>
        </p>
      </div>

      <SignIn firebase={firebase} />
    </section>
  }

  render () {
    return <div>
      <Head>
        <title>/expense</title>
      </Head>
      <Style sheet={sheet} />
      { console.log('%cRendering home...', 'color: grey; font-style: italic;padding: 2px') }
      { (!this.state.user.uid)
        ? this.getWelcomeMessage()
        : <Profile {...this.state} firebase={firebase} /> }
      { (!this.state.user.uid) ? this.checkForUser() : null }
    </div>
  }
}

export default Home
