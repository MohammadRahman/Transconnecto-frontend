import { OfficeDI } from "../../interface";
import styled from "styled-components";
import { useUpdateTime } from "../../hooks/updateTime";
import COUNTRIES from "../../data/countries.json";

const StyledList = styled.li`
  /* min-width: 20%; */
  width: 100%;
  border: 1px solid #b33605;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px;
`;
const StyledCircular = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  justify-content: center;
`;
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledOffice = styled.div`
  display: flex;
  flex-direction: column;
`;
const ClockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const StyledTime = styled.p`
  font-size: 12px;
  font-style: italic;
`;
type OfficeProps = {
  office: OfficeDI;
};

const ListOffices = ({ office }: OfficeProps) => {
  const currentTime = useUpdateTime(office.latitude, office.longitude);

   const time = currentTime?.split(",")[1];
   const countryData = COUNTRIES.find(
     (count) => count.country === office.country
   );
  const flag = countryData?.flag || "";
  return (
    <StyledList>
      <StyledHeader>
        <StyledCircular>
          <img src={flag} />
        </StyledCircular>
        <StyledOffice>
          <span>name: {office.name}</span>
          <span>city:{office.city}</span>
          <span>distance:{office.distance}</span>
        </StyledOffice>
      </StyledHeader>
      <ClockContainer>
        <StyledTime>{time}</StyledTime>
      </ClockContainer>
    </StyledList>
  );
};

export default ListOffices;
