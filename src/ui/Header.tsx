import React from 'react'
import { HiPlus } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.nav`
    height: 5rem;
    display: flex;
    border: 1px solid black;
    align-items: center;
    justify-content: space-between;
`
const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 4px;
`
const Common = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;

`
const StyledNavlink = styled(NavLink)`
  padding: 5px 2px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--color-green-700);
  color: var(--color-grey-0);
`;
const Header = () => {
  return (
    <StyledHeader>
      <StyledList>
        <li>
          <StyledNavlink to="/office/create">
            <HiPlus />
            New Office
          </StyledNavlink>
        </li>
        <li>
          <StyledNavlink to="/country/create">
            <HiPlus />
            Add Country
          </StyledNavlink>
        </li>
      </StyledList>
    </StyledHeader>
  );
}

export default Header