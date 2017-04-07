import Head from 'next/head'
import React, { Component } from 'react'
import Style from '../components/general/style'
import sheet from '../components/base.scss'
import * as firebase from 'firebase'
import Profile from '../components/profile'
import SignIn from '../components/signin'

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

let userData = {}
function checkForUser (props) {
  new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let displayName = user.displayName
        let email = user.email
        let photoURL = user.photoURL
        let uid = user.uid
        userData = { uid, displayName, email, photoURL }
        resolve(userData)
      } else {
        reject(new Error(`Firebase error, user not initialized.`))
      }
    })
  }).then(res => {
    if (!props.userData.uid) props.setUserData(res)
  }).catch(res => {
    console.log('%cUser is not signed in.', 'color: dodgerblue')
  })
}

function getWelcomeMessage () {
  return <div className='home'>
    <div className='intro'>
      <h1>/expense</h1>
      <p>An easier way to file expense reports at Formula Slug.</p>
      <p className='subtext'>
        Not a member of Formula Slug?
        <br /><br />
        We're a sustainable engineering organization at UCSC, working on
        electric racecars, solar power, transportation, and more.
        <br /><br />
        &#62; <a href='mailto:team@formulaslug.com' title='Email the team'>
        team@formulaslug.com</a>
      </p>
    </div>

    <SignIn firebase={firebase} />
  </div>
}

class Home extends Component {
  static async getInitialProps ({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }

  render () {
    return <div>
      <Head>
        <title>/expense</title>
      </Head>
      <Style sheet={sheet} />
      { console.log('%cRendering home...', 'color: grey; font-style: italic;padding: 2px') }
      { (!this.props.userData.uid)
        ? getWelcomeMessage()
        : <Profile displayName={this.props.userData.displayName}
          uid={this.props.userData.uid} firebase={firebase} /> }
      { (!this.props.userData.uid) ? checkForUser(this.props) : null }
    </div>
  }
}

export default Home
