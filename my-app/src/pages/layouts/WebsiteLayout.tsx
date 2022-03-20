import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Homepage from '../Homepage'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <header>
            <Header /> 
        </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default WebsiteLayout