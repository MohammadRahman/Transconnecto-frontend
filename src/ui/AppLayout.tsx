import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar'

const StyledAppLayout = styled.div`
display: grid;
grid-template-columns: 26rem 1fr;
grid-template-rows: auto 1fr;
height: 100vh;
`
const StyledMain = styled.main`
    padding: 1rem;
`
const AppLayout = () => {
  return (
      <StyledAppLayout>
          <Header/>
          <Sidebar />
          <StyledMain>
              <Outlet/>
          </StyledMain>
    </StyledAppLayout>
  )
}

export default AppLayout