import React from 'react'
import { BrowserRouter } from "react-router-dom"
import CustomProvider from "./CustomProvider"
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </CustomProvider>
  )
}

export default App