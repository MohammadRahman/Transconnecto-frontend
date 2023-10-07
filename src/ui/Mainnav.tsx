import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  HiCloudArrowUp,
  HiOutlineCalendarDays,
//   HiOutlineCog6Tooth,
  HiOutlineHome,
//   HiOutlineHomeModern,
//   HiOutlineUsers,
} from "react-icons/hi2";
import { useState } from "react";
import { countryService } from "../services/country";
import toast from "react-hot-toast";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;
const StyledSampleData = styled.div`
  width: 100%;
  display: flex;
  height: 200px;
  justify-content: flex-end;
  flex-direction: column;
  border-radius: 4px;
  gap: 8px;
  /* justify-content: center; */
  align-items: center;
  border: 2px solid white;
  position: absolute;
  top: 300px;
  padding: 1rem;
`
const StyledButton = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  outline: none;
  border: none;
  &:focus {
    outline: none;
    border: none;
  }
`;
function MainNav() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  async function handleClick() {
    setLoading(true)
    try {
      const response = await countryService.uploadSampleCountries();
      if (response.status === 200) {
        navigate('countries')
        toast.success('sample data uploaded')
        setLoading(false)
      }

    } catch (error: any) {
      console.log(error)
      toast.error(error.response.data.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/countries">
            <HiOutlineCalendarDays />
            <span>Countries</span>
          </StyledNavLink>
        </li>
        <StyledSampleData>
          <HiCloudArrowUp
            style={{ width: "100px", height: "100px", color: "white" }}
          />
          <StyledButton onClick={handleClick}>
            {loading ? "Loading" : "UPLOAD COUNTRIES"}
          </StyledButton>
        </StyledSampleData>
      </NavList>
    </nav>
  );
}
export default MainNav;


