import { OfficeI } from '../../interface';
import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import Office from './Office';
import { useOfficeWithEffect } from './useOffice'
import styled from 'styled-components'

const StyledOffices = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    gap: 8px;
`
export function Offices() {

  
  // const { offices, isLoading } = useFetchOffices();
  const { offices, isLoading } = useOfficeWithEffect();

  if(isLoading) return <h2>Loading...</h2>
  return (
    <Row>
        <Heading as="h1" style={{ marginBottom: "10px" }}>
          Office Lists#
        </Heading>
      <StyledOffices>
        {offices?.map((office: OfficeI) => (
          <Office key={office.name} office={office} />
        ))}
      </StyledOffices>
    </Row>
  );
}

export default Offices