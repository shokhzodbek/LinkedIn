import { DialogTitle } from '@material-ui/core'
import React from 'react'
import "./HeaderOption.css"
import {Avatar} from '@material-ui/core'
import {useSelector} from 'react-redux'
import {selectUser} from '../../features/userSlice'
function HeaderOption({title,Icon,avatar,onClick}) {
      const user = useSelector(selectUser);
      return (
            <div onClick={onClick} className="headerOption">
                {Icon && <Icon className="optionIcon"/>} 
                {avatar &&<Avatar className="optionIcon" src={user?.photoUrl}>{user?.email[0]}</Avatar> }
                <h3 className='optionIconTitle'>{title}</h3>
            </div>
      )
}

export default HeaderOption
