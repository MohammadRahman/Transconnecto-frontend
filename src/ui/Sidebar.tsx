import React from 'react'
import styled from 'styled-components'
import MainNav from './Mainnav'

const StyledSidebar = styled.aside`
    grid-row: 1/-1;
    display: flex;
    padding: 10rem 1rem;
    flex-direction: column;
    border-right: 1px solid black;
`
const Sidebar = () => {
  return (
    <StyledSidebar>
      <MainNav/>
    </StyledSidebar>
  )
}

export default Sidebar