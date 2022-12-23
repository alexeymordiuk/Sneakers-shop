import React from 'react'
import { Container } from '../components/Container';
import Navigation from '../components/routes/Navigation';
import { Outlet } from 'react-router-dom';


const Layout: React.FC = () => {
  return (
    <Container>
      <Outlet/>
      <Navigation/>
    </Container>
  )
}

export default Layout