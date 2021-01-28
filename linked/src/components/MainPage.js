import React from 'react'

import Feed from './Body/Feed'
import Sidebar from './Body/Sidebar'
import Widget from './Body/Widget'
import Header from './Header/Header'

import './MainPage.css'
function MainPage() {
      return (
            <div className="main">
                  
                  <div className="page">
                  <Sidebar/>
                  <Feed/>
                  <Widget/>
                  </div>
                 
            </div>
      )
}

export default MainPage
