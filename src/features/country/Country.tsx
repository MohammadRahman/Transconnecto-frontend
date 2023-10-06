/* eslint-disable @typescript-eslint/no-explicit-any */
import { HiXMark } from "react-icons/hi2";
import { CountryI } from "../../interface";
import styled from "styled-components";
import { countryService } from "../../services/country";
import toast from "react-hot-toast";
import COUNTRIS from '../../data/countries.json'
import Heading from "../../ui/Heading";
import { useNavigate } from "react-router-dom";

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
const navigate = useNavigate()
 async function deleteCountry(name: any) {
    try {
      const response = await countryService.deleteCountry(name)
      if (response.status === 200) {
        toast.success(`${name} deleted`)
        navigate('/')
      }
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
 }
  const { flag } = COUNTRIS.find(count => count.country === country.country)
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
      <StyledIcon onClick={() => deleteCountry(country.country)}>
        <HiXMark />
      </StyledIcon>
    </StyledList>
  );
};

export default Country;
