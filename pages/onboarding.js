import React, { Component } from 'react'
import * as firebase from 'firebase'
import Onboarding from '../components/onboarding'

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

class OnboardingWrapper extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      user: {}
    }
  }

  checkForUser () {
    new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          resolve({
            name: user.displayName,
            email: user.email,
            profilePicture: user.photoURL,
            uid: user.uid
          })
        } else reject(new Error(`Firebase error, user not initialized.`))
      })
    }).then(res => {
      this.setState({ user: res })
    }).catch(res => {
      console.log('%cUser is not signed in.', 'color: dodgerblue')
    })
  }

  render () {
    return (<Onboarding {...this.props} />)
  }
}

export default OnboardingWrapper
