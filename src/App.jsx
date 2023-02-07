import { useState } from 'react'
import Resume from './Components/Resume'

import './App.css'
import Navbar from './Components/Navbar'
import LogoDiv from './Components/LogoDiv'

import { Container } from '@mui/material'

function App() {


  return (
    <Container sx={{ height: "100%", bgcolor: "grey" }}>
      <Navbar />
      <LogoDiv />
      <Resume />
    </Container>
  )
}

export default App;
