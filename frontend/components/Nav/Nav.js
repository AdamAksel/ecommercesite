import React from 'react'
import Link from 'next/link'
import {
  NavContainer,
  NavArea,
  NavAreaRight,
  NavAreaLeft,
  NavItem,
} from './Nav.elements'

const Nav = () => {
  return (
    <NavContainer>
      <NavArea>
        <NavAreaLeft>
          <NavItem>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </NavItem>
          <NavItem>Hello2</NavItem>
          <NavItem>Hello3</NavItem>
          <NavItem>Hello1</NavItem>
          <NavItem>Hello2</NavItem>
          <NavItem>Hello3</NavItem>
        </NavAreaLeft>
        <NavAreaRight>
          <NavItem>
            <Link href='/login'>
              <a>Login</a>
            </Link>
          </NavItem>

          <NavItem>Hello5</NavItem>
          <NavItem>Hello6</NavItem>
        </NavAreaRight>
      </NavArea>
    </NavContainer>
  )
}

export default Nav
