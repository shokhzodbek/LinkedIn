import React from 'react'
import './Widget.css'

import Info from '@material-ui/icons/InfoOutlined'
import Fiber from '@material-ui/icons/FiberManualRecord'
function Widget() {

      const article = (heading,subtitle)=>{
          return  <div className='article'>
                  <div className="left">
                  <Fiber/>
                  </div>
                
                  <div className="right">
                        <h4>{heading}</h4>
                        <p>{subtitle}</p>
                  </div>

            </div>


          
      }
      return (
            <div className="widget">
                  <div className="header_widget">
                        <h2>LinkedIn news</h2>
                        <Info/>
                  </div>
                  {article('everything is possible','Believe in Yourself')}
                  {article('everything is possible','Believe in Yourself')}
                  {article('everything is possible','Believe in Yourself')}
                  {article('everything is possible','Believe in Yourself')}
                  {article('everything is possible','Believe in Yourself')}
                  {article('everything is possible','Believe in Yourself')}
                  
            </div>
      )
}

export default Widget
