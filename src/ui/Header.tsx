import { HiPlus } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.nav`
    height: 5rem;
    display: flex;
    padding: 0 1rem;
    border-bottom: 1px solid var(--color-grey-100);
    align-items: center;
    justify-content: flex-end;
`
const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 4px;
`
// const Common = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   outline: none;
//   border: none;

// `
const StyledNavlink = styled(NavLink)`
  padding: 0.5rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #b33605;
  background-color: var(--color-grey-100);
  color: #1d1f4e;

  &:hover {
    background-color: #1d1f4e;
    color: white;
  }
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