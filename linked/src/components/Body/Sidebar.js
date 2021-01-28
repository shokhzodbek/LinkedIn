import React from 'react'
import './Sidebar.css'
import {Avatar} from '@material-ui/core'
import {useSelector} from 'react-redux'
import { selectUser } from '../../features/userSlice'
function Sidebar() {
      const user = useSelector(selectUser)
      const itemRecent = (theme)=>(
              <div className="recentItem">
                    <span className="hash">#</span>
                    <p>{theme}</p>
              </div>
      )
      return (
            <div className="sidebar"> 
                  <div className="sidebarTop">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQscBArNouMBJsvtb5zl9e9BaUzLMci6oOg&usqp=CAU" alt=""/>
                        <Avatar className="sidebarAvatar">
                              {user.email[0]}
                        </Avatar>
                        <h2>{user.displayName}</h2>
                        <h4>{user.email}</h4>
                  </div>
                  <div className="sidebarStates">
                        <div className="state">
                              <p>Who viewed you</p>
                              <p className="stateNumber">{300}</p>
                        </div>

                        <div className='state'>
                        <p>Who viewed you</p>
                        <p className="stateNumber">{300}</p>
                        </div>
                        
                  </div>
                  <div className="sidebarBottom">
                        <p>Resent</p>
                        {itemRecent("Python")}
                        {itemRecent("Python")}
                        {itemRecent("Python")}
                        {itemRecent("Python")}
                  </div>

            </div>
      )
}

export default Sidebar
