import { useState } from 'react'

import './App.css'

import React, { Component } from 'react'
import NavBar from './components/NavBar'
import NewsDashboard from './components/NewsDashboard'

export default class   extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <NewsDashboard/>
      </div>
    )
  }
}
