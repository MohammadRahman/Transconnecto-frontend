/* eslint-disable @typescript-eslint/no-explicit-any */
import { HiXMark } from "react-icons/hi2";
import { CountryI } from "../../interface";
import styled from "styled-components";
import COUNTRIS from '../../data/countries.json'
import Heading from "../../ui/Heading";
import { useDelete } from "./useDelete";

const StyledList = styled.li`
  width: 100%;
  height: 180px;
  border: 1px solid #b33605 ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  position: relative;
  border-radius: 4px;
`;
const StyledIcon = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2px;
  right: 2px;
  cursor: pointer;
  &:hover {
    border: 1px solid red;
    color: red;
  }
`;
const StyledHeader = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`
type CountryProps = {
  country: CountryI;
};

const Country = ({ country }: CountryProps) => {
  const { removeCountry } = useDelete();
  const countryData = COUNTRIS.find(count => count.country === country.country)
  const flag = countryData?.flag || ''
  return (
    <StyledList>
      <StyledHeader>
        <div
          style={{
            width: "60px",
            height: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img width="60px" src={flag} alt="flag" />
        </div>

        <Heading as="h3">{country.country}</Heading>
      </StyledHeader>
      <p>{country.timezone}</p>
      <StyledIcon onClick={() => removeCountry(country.country)}>
        <HiXMark />
      </StyledIcon>
    </StyledList>
  );
};

export default Country;
