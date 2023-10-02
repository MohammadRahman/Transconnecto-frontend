import { CountryI } from "../../interface";
import Country from "./Country";
import { useCountry } from "./useCountry";
import styled from "styled-components";

const StyledOffices = styled.ul`
  display: flex;
  gap: 8px;
`;
export function Offices() {
  const { countries, isLoading } = useCountry();

  if (isLoading) return <h2>Loading...</h2>;
  return (
    <StyledOffices>
      {countries?.map((country: CountryI) => (
        <Country key={country.country} country={country} />
      ))}
    </StyledOffices>
  );
}

export default Offices;
