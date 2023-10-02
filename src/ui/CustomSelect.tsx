/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import styled from "styled-components";
import { HiChevronDown, HiMiniXMark } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

// const SelectParentContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 0.1rem;
//   position: relative;
//   cursor: pointer;
// `;
// const StyledSearchBox = styled.div`
//   max-width: 100%;
//   border: 2px solid var(--color-grey-100);
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: white;
//   position: relative;
//   border: 1px solid red;
// `;
// const StyledInput = styled.input`
//   width: 93%;
//   border: none;
//   outline: none;
//   padding: 1rem;
//   background: none;
//   &:focus {
//     outline: none;
//   }
// `;
// const StyledOptions = styled.div`
// height: 2.5rem;
// background-color: white;
   /* width: 100%;
  overflow-y: scroll;
  background-color: white;
  border: 2px solid var(--color-grey-100);
  scroll-behavior: smooth;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  flex-direction: column;
  position: absolute;  */
// `;
// const ListOption = styled.div`
//   width: 100%;
//   padding: 0 1rem;
//   overflow-y: scroll;
//   &:hover,
//   &:active {
//     background-color: var(--color-grey-100);
//   }
// `;
// const StyledLabel = styled.div``;
// const StyledLabelAndIcon = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0.5rem;
//   gap: 4px;
// `;
const SelectParentContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2px;
  flex-direction: column;
  background-color: var(--color-grey-50);
  border: 1px solid var(--color-grey-200);
`
const StyledSearchBox = styled.div`
  width: 100%;
  display: flex;
  height: 3rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-grey-200);
`;
const StyledSelectedOptions = styled.div`
width: auto;
display: flex;
gap: 2px;
`
const StyledLabelAndIcon = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
`
const StyledLabel = styled.label``
const StyledOptions = styled.div`
height: 13rem;
overflow-y: scroll;
scroll-behavior: smooth;
`;
const ListOption = styled.div`
  padding: 0 4px;
  &:hover,
  &:active {
    background-color: var(--color-grey-200);
    cursor: pointer;
  }
`;
const StyledIcon = styled.span`
width: 20px;
height: 20px;
`
type Option = {
  country: string;
  timezone: string;
  // label: string;
};
interface SelectOptions {
  options: Option[];
  register?: any;
  name?: string;
}
function CustomSelect({
  options = [],
  register, // name
}: SelectOptions) {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [searchParams, setSerchParams] = useSearchParams()
  const [showOptions, setShowOptions] = useState(false);

    function handleSelectOptions() {
    setShowOptions((prev) => !prev);
    }
  function handleOption(item: Option) {
    setSelectedOptions((prev) => {
        register([...prev, item]);
      return [...prev, item];
    });
    searchParams.set('gmt', item.timezone)
    setSerchParams(searchParams)
      setShowOptions(false);  
  }

  function deleteOption(itemId: string) {
    setSelectedOptions((prev) =>
      prev.filter((item: Option) => item.country != itemId)
    );
    searchParams.set("gmt", '');
    setSerchParams(searchParams);
  }

  return (
    <SelectParentContainer>
      <StyledSearchBox className="search-box">
        <StyledSelectedOptions>
          {selectedOptions.map((option: Option) => (
            <StyledLabelAndIcon key={option.country}>
              <StyledLabel>{option.country}</StyledLabel>
              <HiMiniXMark
                style={{ cursor: "pointer" }}
                onClick={() => deleteOption(option.country)}
              />
            </StyledLabelAndIcon>
          ))}
        </StyledSelectedOptions>
        {/* {register && (
          <input
            type="text"
            placeholder={selectedOptions.length ? "" : "choose from dropdown"}
          />
        )} */}
        <StyledIcon onClick={handleSelectOptions}>
          <HiChevronDown />
        </StyledIcon>
      </StyledSearchBox>
      {/* <div> */}
      {showOptions && (
        <StyledOptions>
          {options.map((option: Option) => (
            <ListOption
              key={option.country}
              onClick={() => handleOption(option)}
            >
              {option.country}
            </ListOption>
          ))}
        </StyledOptions>
      )}
      {/* </div> */}
    </SelectParentContainer>
  );
}

export default CustomSelect;
