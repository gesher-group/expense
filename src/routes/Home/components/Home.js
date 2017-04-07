import './Home.scss'
import React from 'react'
import Profile from './Profile.js'
import SignIn from './SignIn.js'
import * as firebase from 'firebase'

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
        reject(false)
      }
    })
  }).then(res => {
    if (!props.userData.uid) props.setUserData(res)
  }).catch(res => {
    console.log('%cUser is not signed in.', 'color: dodgerblue')
  })
}

function getWelcomeMessage () {
  return (
    <div className='home'>
      <div className='intro'>
        <h1>/expense</h1>
        <p>An easier way to file expense reports at Gesher Group.</p>
        <p className='subtext'>
          Not a member of Gesher Group?
          <br /><br />
          We're a student-run consultancy at the University of California, Santa
          Cruz. If you'd like to get in touch about a potential relationship,
          reach out, or visit our website at <a href='http://geshergroup.org'
          title='Our website'>geshergroup.org</a>.
          <br /><br />

          &#62; <a href='mailto:team@geshergroup.com' title='Email the team'>
          team@geshergroup.com</a>
        </p>
      </div>

      <SignIn firebase={firebase} />
    </div>
  )
}

export const Home = (props) => (
  <div>
    { console.log('%cRendering home...', 'color: grey; font-style: italic;padding: 2px') }
    { (!props.userData.uid) ? getWelcomeMessage() : <Profile displayName={props.userData.displayName} uid={props.userData.uid} firebase={firebase} /> }
    { (!props.userData.uid) ? checkForUser(props) : null }
  </div>
)

export default Home
