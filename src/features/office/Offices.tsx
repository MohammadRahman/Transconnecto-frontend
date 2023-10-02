import { OfficeI } from '../../interface';
import Office from './Office';
import { useFetchOffices } from './useOffice'
import styled from 'styled-components'

const StyledOffices = styled.ul`
    display: flex;
    gap: 8px;
`
export function Offices() {

  const { offices, isLoading } = useFetchOffices();


  if(isLoading) return <h2>Loading...</h2>
  return (
    <StyledOffices>
      {offices?.map((office: OfficeI) => <Office key={office.name} office={office} />)}
    </StyledOffices>
  )
}

export default Offices