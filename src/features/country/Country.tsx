import { HiXMark } from "react-icons/hi2";
import { CountryI } from "../../interface";
import styled from "styled-components";
import { countryService } from "../../services/country";
import toast from "react-hot-toast";

const StyledList = styled.li`
  min-width: 20%;
  height: 140px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: relative;
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
type CountryProps = {
  country: CountryI;
};

const Country = ({ country }: CountryProps) => {

 async function deleteCountry(name: any) {
    try {
      const response = await countryService.deleteCountry(name)
      if (response.status === 200) {
        toast.success(`${name} deleted`)
      }
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <StyledList>
      <h2>{country.country}</h2>
      <p>{country.timezone}</p>
      <StyledIcon onClick={()=>deleteCountry(country.country)}>
        <HiXMark/>
      </StyledIcon>
    </StyledList>
  );
};

export default Country;
