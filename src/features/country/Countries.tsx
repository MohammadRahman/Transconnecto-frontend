/* eslint-disable @typescript-eslint/no-explicit-any */
import { CountryI, OfficeDI } from "../../interface";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Country from "./Country";
import {  useCountry } from "./useCountry";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useSearchCountry } from "./useSearchCountry";
import { useForm } from "react-hook-form";
import FormRowVertical from "../../ui/FormRowVertical";
import { HiMagnifyingGlass } from "react-icons/hi2";
import ListOffices from "../office/ListOffices";

const StyledOffices = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  gap: 8px;
  align-items: center;
  justify-content: center;
`;
const SearchBox = styled.div`
/* width: 20rem; */
height: 4rem;
border: 1px solid var(--color-grey-100);
`

 const FormInput = styled.input`
  border: none;
  padding: 0.6rem 1rem;
  opacity: 0.5;
  border-radius: 2px;
  background-color: var(--color-grey-200);
  &:focus {
    outline: none;
  }
`;

const Form = styled.form`
width: 100%;
height: 100%;
border: 1px solid black;
`
const FormWrapper = styled.div`
  display: flex;
  /* gap: 2px; */
`
const StyledButton = styled.button`
  margin: 0;
  width: 40px;
  padding: 0;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: none;
  }
`;
export function Offices() {
  const { countries, isLoading } = useCountry();
  const { offices } = useSearchCountry();
  const [serachParam, setSerachParam] = useSearchParams()
  const {register, handleSubmit} = useForm()

  function handleFormSubmit(value: any) {
    serachParam.set('country', value.country);
    setSerachParam(serachParam)
}
  if (isLoading) return <h2>Loading...</h2>;
  return (
    <Row>
      <Row type="horizontal">
        <Heading as="h1" style={{ marginBottom: "10px" }}>
           Lists#
        </Heading>
        <SearchBox>
          <Form onSubmit={handleSubmit(handleFormSubmit)}>
            <FormWrapper>
              <FormRowVertical>
                <FormInput
                  id="country"
                  type="text"
                  {...register("country")}
                  placeholder="search country"
                />
              </FormRowVertical>
              <StyledButton>
                <HiMagnifyingGlass />
              </StyledButton>
            </FormWrapper>
          </Form>
        </SearchBox>
      </Row>
      {offices.length ? (
        <StyledOffices>
          {offices.map((office: OfficeDI) => (
            <ListOffices key={office.name} office={office} />
          ))}
        </StyledOffices>
      ) : (
        <StyledOffices>
          {countries?.map((country: CountryI) => (
            <Country key={country.country} country={country} />
          ))}
        </StyledOffices>
      )}
    </Row>
  );
}

export default Offices;
