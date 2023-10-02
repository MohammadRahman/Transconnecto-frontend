/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import FormRowVertical from "../../ui/FormRowVertical";
// import { useEffect, useState } from "react";
// import { getGMTOffsetByCountry } from "../../utils/helper";
import CustomSelect from "../../ui/CustomSelect";
import COUNTRIES from '../../data/countries.json'
import { useSearchParams } from "react-router-dom";
// import { useCreateCountry } from "./useCreateCountry";
import { countryService } from "../../services/country";
// import axios from "axios";
import toast from "react-hot-toast";


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

// const FormInput = styled.input`
//   border: none;
//   padding: 0.6rem 1rem;
//   opacity: 0.5;
//   border-radius: 2px;
//   background-color: var(--color-grey-200);
//   &:focus {
//     outline: none;
//   }
// `;
const CreateCountryForm = () => {
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
      }
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  }
    
  return (
    <Form onSubmit={handleSubmit(formHandler)}>
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
          <input
            id="gmt"
            type="text"
            disabled
            value={gmt || ''}
            {...register("gmt")}
          />
        </FormRowVertical>
      </FormInputWrapper>
      <div>
        <button type="submit">submit</button>
      </div>
    </Form>
  );
};

export default CreateCountryForm;
