import React from 'react'
import {
  FooterContainer,
  FooterArea,
  FooterSubArea,
  FooterItem,
} from './Footer.elements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterArea>
        <FooterSubArea>
          <FooterItem>Something1</FooterItem>
          <FooterItem>Something2</FooterItem>
          <FooterItem>Something3</FooterItem>
          <FooterItem>Something4</FooterItem>
        </FooterSubArea>
        <FooterSubArea>
          <FooterItem></FooterItem>
          <FooterItem>Help</FooterItem>
          <FooterItem>About</FooterItem>
          <FooterItem>Seek treatment</FooterItem>
        </FooterSubArea>
        <FooterSubArea>
          <FooterItem></FooterItem>
          <FooterItem>Contact</FooterItem>
          <FooterItem>Adress: something st</FooterItem>
          <FooterItem>Email: something@somethingelse.we</FooterItem>
        </FooterSubArea>
      </FooterArea>
    </FooterContainer>
  )
}

export default Footer
