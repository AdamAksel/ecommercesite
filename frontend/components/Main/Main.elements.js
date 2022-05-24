import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
`

export const MainArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 99%;
  min-height: 100vh;
`

export const MainItem1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99%;
  height: 70vh;
`

export const MainItem2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 49%;
  height: 48vh;
`
export const MainItem3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24%;
  height: 24vh;
`
export const MainImg = styled.img`
  position: relative;
  max-height: 70%;
  max-width: 40%;

  transition-delay: 0.1s;
  transition-duration: 0.6s;

  &:hover {
    max-width: 60%;
    max-height: 90%;
  }
`

export const MainImg1 = styled.img`
  position: relative;

  max-height: 70%;
  max-width: 40%;
  transition-delay: 0.1s;
  transition-duration: 0.8s;

  &:hover {
    max-width: 60%;
    max-height: 90%;
  }
`

export const MainLoading = styled.div`
  position: absolute;
  top: 45%;
  left: 47%;
  transform: translate(-50%, -50%);

  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`
