import React, { useState } from 'react'
import {
  LoginContainer,
  LoginArea,
  LoginForm,
  LoginButton,
  LoginInput,
  LoginStatement,
} from './Login.elements'

const Login = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [eMailAdress, setEMailAdress] = useState('')
  const [password, setPassword] = useState('')
  const [rPassword, setRPassword] = useState('')
  const [isUser, setIsUser] = useState(true)

  function sumbmitter(e) {
    if (password !== rPassword) {
      return null
    }
    console.log([firstName, lastName, eMailAdress, password, rPassword])
  }

  return (
    <>
      <LoginContainer>
        {isUser ? (
          <>
            <LoginArea>
              <LoginStatement>Login</LoginStatement>
              <LoginForm>
                <label htmlFor='eMailLogin'>E-Mail:</label>
                <LoginInput
                  type='text'
                  id='eMailLogin'
                  name='eMailLogin'
                ></LoginInput>
                <label htmlFor='pWordLogin'>Password:</label>
                <LoginInput
                  type='text'
                  id='pWordLogin'
                  name='pWordLogin'
                ></LoginInput>
              </LoginForm>
              <LoginButton>Login</LoginButton>
            </LoginArea>
          </>
        ) : (
          <>
            <LoginArea>
              <LoginStatement>Become a Member</LoginStatement>
              <LoginForm>
                <label htmlFor='fName'>First Name:</label>

                <LoginInput
                  type='text'
                  id='fName'
                  name='fName'
                  onChange={(e) => setFirstName(e.target.value)}
                ></LoginInput>
                <label htmlFor='lName'>Last Name:</label>

                <LoginInput
                  type='text'
                  id='lName'
                  name='lName'
                  onChange={(e) => setLastName(e.target.value)}
                ></LoginInput>
                <label htmlFor='eMail'>E-mail:</label>
                <LoginInput
                  type='text'
                  id='eMail'
                  name='eMail'
                  onChange={(e) => setEMailAdress(e.target.value)}
                ></LoginInput>
                <label htmlFor='pWord'>Password:</label>
                <LoginInput
                  type='text'
                  id='pWord'
                  name='pWord'
                  onChange={(e) => setPassword(e.target.value)}
                ></LoginInput>
                <label htmlFor='rWord'>Repeat Password:</label>
                <LoginInput
                  type='text'
                  id='rWord'
                  name='rWord'
                  onChange={(e) => setRPassword(e.target.value)}
                ></LoginInput>
              </LoginForm>

              <LoginButton onClick={(e) => sumbmitter(e)}>Submit</LoginButton>
            </LoginArea>
          </>
        )}
      </LoginContainer>
    </>
  )
}

export default Login
