import React,{forwardRef} from 'react'
import './Post.css'
import InputOption from './InputOption'

import Input from '@material-ui/icons/ThumbUpAltOutlined'
import Comment from '@material-ui/icons/ChatOutlined'
import Share from '@material-ui/icons/ShareOutlined'
import Send from '@material-ui/icons/SendOutlined'

import {Avatar} from '@material-ui/core'

import {useSelector} from 'react-redux'
import {selectUser} from '../../features/userSlice'
 
const Post = forwardRef(({name,description,message,photo},ref) => {
      const user = useSelector(selectUser)
      return (
            <div ref={ref} className="post">
                  <div className="headerPost">
                        <Avatar src={user?.email[0]}/>
                        <div className="postInfo">
                            <h2>{name}</h2>
                            <p>{description}</p>
                        </div>
                  </div>
                  <div className="postBody">
                        <p>{message}</p>

                  </div>
                  <div className="postButton">
                        <InputOption Icon={Input} title='Like' color="grey"/>
                        <InputOption Icon={Comment} title='Comment' color="grey"/>
                        <InputOption Icon={Share} title='Share' color="grey"/>
                        <InputOption Icon={Send} title='Send' color="grey"/>
                  </div>
                  
            </div>
      )
})

export default Post
