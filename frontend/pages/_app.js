import styled from 'styled-components'

import { GlobalStyle } from '../styles/globalstyles'
import { Nav, Footer } from '../components/componentIndex'

const StyledApp = styled.div``

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StyledApp>
        <GlobalStyle />

        <Nav />
        <Component {...pageProps} />
        <Footer />
      </StyledApp>
    </>
  )
}

export default MyApp
