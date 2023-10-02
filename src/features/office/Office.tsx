import { OfficeI } from '../../interface'
import styled from 'styled-components'
import { useUpdateTime } from '../../hooks/updateTime'

const StyledList = styled.li`
    min-width: 20%;
    height: 140px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    gap: 2px;
`
type OfficeProps = {
    office: OfficeI
}

const Office = ({ office }: OfficeProps) => {
    const currentTime = useUpdateTime(office.latitude, office.longitude);
    return (
      <StyledList>
        <h2>{office.name}</h2>
        <p>{office.city}</p>
        <h3>{currentTime}</h3>
      </StyledList>
    );
};

export default Office