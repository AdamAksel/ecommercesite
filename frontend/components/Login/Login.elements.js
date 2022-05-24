import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
`

export const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: auto;
  margin-top: 10vh;
  padding: 10px;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 200px;
  height: auto;
`

export const LoginInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  margin-bottom: 15px;

  &:focus {
    background-color: whitesmoke;
  }
`

export const LoginButton = styled.button`
  width: 200px;
  height: 30px;
  background-color: #141c3a;
  color: white;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    box-shadow: 2px 2px #888888;
    color: lightblue;
  }
`

export const LoginStatement = styled.h1`
  margin: 20px;
`
