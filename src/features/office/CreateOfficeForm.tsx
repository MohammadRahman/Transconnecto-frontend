/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form';
import FormRowVertical from '../../ui/FormRowVertical';
import styled from 'styled-components';
import { useLatAndLong } from './useLatAndLong';
import { useCreateOffice } from './useCreateOffice';
import { useSearchParams } from 'react-router-dom';

const Form = styled.form`
  width: 100%;
  border-top: 1px solid var(--color-grey-100);
  padding: 1rem 2rem;
`;
const FormInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  column-gap: 3rem;
  padding: 1.5rem 3rem 5rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

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
const CreateOfficeForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {latitude, longitude} = useLatAndLong()
  const { newOffice } = useCreateOffice();

  const { register, handleSubmit } = useForm();
 
  async function formHandler(value: any) {
    // const { address, ...rest } = value;
    searchParams.set('city', value.city)
    setSearchParams(searchParams)
    searchParams.set('country', value.country)
    setSearchParams(searchParams)
    searchParams.set('address', value.address)
    setSearchParams(searchParams)
    newOffice({...value, latitude, longitude});
  } 

  return (
    <Form onSubmit={handleSubmit(formHandler)}>
      <FormInputWrapper>
        <FormRowVertical label="Name">
          <FormInput id="name" type="text" {...register("name")} />
        </FormRowVertical>
        <FormRowVertical label="City">
          <FormInput id="city" type="city" {...register("city")} />
        </FormRowVertical>
        <FormRowVertical label="Country">
          <FormInput id="country" type="text" {...register("country")} />
        </FormRowVertical>
        <FormRowVertical label="Address">
          <FormInput id="address" type="text" {...register("address")} />
        </FormRowVertical>
      </FormInputWrapper>
      <div>
        <button type="submit">submit</button>
      </div>
    </Form>
  );
}

export default CreateOfficeForm;