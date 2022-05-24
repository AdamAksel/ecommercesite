import React from 'react'

import {
  MainContainer,
  MainArea,
  MainItem1,
  MainItem2,
  MainItem3,
  MainImg,
  MainImg1,
  MainLoading,
} from './Main.elements'

const Main = (props) => {
  function logger() {
    console.log(props)
  }

  return (
    <>
      <MainContainer>
        {!props.data ? (
          <>
            <MainLoading />
            <button onClick={() => logger()}>props</button>
          </>
        ) : (
          <MainArea>
            <button onClick={() => logger()}>props</button>
            <MainItem1>
              <MainImg1 src={props.data[19].image} />
            </MainItem1>
            <MainItem2>
              <MainImg1 src={props.data[18].image} />
            </MainItem2>
            <MainItem2>
              <MainImg1 src={props.data[2].image} />
            </MainItem2>
            <MainItem3>
              <MainImg src={props.data[16].image} />
            </MainItem3>
            <MainItem3>
              <MainImg src={props.data[15].image} />
            </MainItem3>
            <MainItem3>
              <MainImg src={props.data[14].image} />
            </MainItem3>
            <MainItem3>
              <MainImg src={props.data[1].image} />
            </MainItem3>
          </MainArea>
        )}
      </MainContainer>
    </>
  )
}

export default Main
