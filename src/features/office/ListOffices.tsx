import { OfficeDI } from "../../interface";
import styled from "styled-components";
import { useUpdateTime } from "../../hooks/updateTime";

const StyledList = styled.li`
  /* min-width: 20%; */
  width: 100%;
  height: 140px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
type OfficeProps = {
  office: OfficeDI;
};

const ListOffices = ({ office }: OfficeProps) => {
  const currentTime = useUpdateTime(office.latitude, office.longitude);
  console.log(currentTime)
  return (
    <StyledList>
      <h2>{office.name}</h2>
          <p>{office.city}</p>
          <p>{office.distance}</p>
      <h3>{currentTime}</h3>
    </StyledList>
  );
};

export default ListOffices;
