/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import FormRowVertical from "../../ui/FormRowVertical";
import CustomSelect from "../../ui/CustomSelect";
import COUNTRIES from '../../data/countries.json'
import { useNavigate, useSearchParams } from "react-router-dom";
import { countryService } from "../../services/country";
import toast from "react-hot-toast";

const FormContainer = styled.div`
  width: 50%;
  border: 1px solid #b33605;
  border-radius: 4px;
`;
const Form = styled.form`
  width: 100%;
  border-top: 1px solid var(--color-grey-100);
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
`;
const StyledHeader = styled.h2`
margin-left: 3rem;
  margin-bottom: 10px;
`
const StyledButton = styled.button`
  width: 20%;
  background-color: #0d966b;
  border: none;
  outline: none;
  padding: 6px;
  border-radius: 4px;
  margin-left: 3rem;
  margin-top: -2.5rem;
  &:focus{
    outline: none;
  }
`;
const FormInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  column-gap: 3rem;
  padding: 1.5rem 3rem 5rem;
`;
const StyledInput = styled.input`
  height: 3rem;
  padding: 1.5rem;
  border: none;
`;
const CreateCountryForm = () => {
  const navigate = useNavigate()
    const { register, handleSubmit, control } = useForm();
    const [searchParams] = useSearchParams()
    const gmt = searchParams.get('gmt')
    
  async function formHandler(value: any) {
    try {
       const response = await countryService.createCountry({
         country: value.country[0].country,
         timezone: gmt,
       });
      if (response.data) {
        toast.success('new country added')
        setTimeout(() => {
           navigate("/countries");
        },1500)
      }
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  }
    
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(formHandler)}>
        <StyledHeader> Create new country</StyledHeader>
        <FormInputWrapper>
          <FormRowVertical label="Country">
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <CustomSelect options={COUNTRIES} register={field.onChange} />
              )}
            />
          </FormRowVertical>
          <FormRowVertical label="GMT">
            <StyledInput
              id="gmt"
              type="text"
              disabled
              value={gmt || ""}
              {...register("gmt")}
            />
          </FormRowVertical>
        </FormInputWrapper>
        <StyledButton type="submit">submit</StyledButton>
      </Form>
    </FormContainer>
  );
};

export default CreateCountryForm;
