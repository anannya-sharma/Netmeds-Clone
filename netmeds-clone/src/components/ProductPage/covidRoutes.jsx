import React from 'react'
import { Routes } from 'react-router-dom'
import Filters from './Filters'
import Products from './Products'
import "./productRouters.css";
function CovidRoutes() {
  return (
    <div className='dia'>
        <span className='left'>
            <Filters/>
        </span>
        <span className='right'>
            <Products/>
        </span>
        
    </div>
  )
}

export default CovidRoutes;