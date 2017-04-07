import React from 'react'

function authLink (firebase) {
  var provider = new firebase.auth.GoogleAuthProvider()
  provider.addScope('https://www.googleapis.com/auth/plus.login')
  return firebase.auth().signInWithRedirect(provider)
}

export const SignIn = (props) => (
  <div className='button' onClick={() => authLink(props.firebase)}>Sign In</div>
)

export default SignIn
