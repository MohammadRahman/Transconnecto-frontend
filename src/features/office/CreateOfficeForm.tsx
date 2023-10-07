/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form';
import FormRowVertical from '../../ui/FormRowVertical';
import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { officeService } from '../../services/office';
import toast from 'react-hot-toast';

const OfficeFormContainer = styled.div`
  width: 70%;
  border: 1px solid #b33605;
  border-radius: 4px;
`;
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
  padding: 1.5rem 3rem 2rem;
  /* border-bottom: 1px solid var(--color-grey-100); */
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
const StyledButton = styled.button`
  width: 20%;
  margin-left: 3rem;
  background-color: #0d966b;
  border: none;
  outline: none;
  padding: 6px;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;
const CreateOfficeForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
 
  async function formHandler(value: any) {
    searchParams.set('city', value.city)
    setSearchParams(searchParams)
    searchParams.set('country', value.country)
    setSearchParams(searchParams)
    searchParams.set('address', value.address)
    setSearchParams(searchParams)
    try {
      const response = await officeService.createOffice(value
      )
      if (response.data) {
        toast.success('new office added')
        setTimeout(() => {
          navigate("/dashboard");
        },1500)
      }
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  } 

  return (
    <OfficeFormContainer>
      <h2 style={{marginLeft: '3.5rem'}}>Create new office</h2>
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
          <StyledButton type="submit">submit</StyledButton>
      </Form>
    </OfficeFormContainer>
  );
}

export default CreateOfficeForm;