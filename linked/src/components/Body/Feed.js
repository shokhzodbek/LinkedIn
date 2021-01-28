import React,{useState,useEffect} from 'react'
import './Feed.css'
import Icon from '@material-ui/icons/Create'
import InputOption from './InputOption'
import Post from './Post'

import Image from '@material-ui/icons/Image'
import Video from '@material-ui/icons/Subscriptions'
import  Events from '@material-ui/icons/Event'
import Write from '@material-ui/icons/CalendarViewDay'

import {db} from '../../firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'

import {useSelector} from 'react-redux'
import {selectUser} from '../../features/userSlice'
function Feed() {
      const [posts,setPost] = useState([])
      const [input,setInput] = useState('')
      const user = useSelector(selectUser)
      useEffect(
            ()=>{
               db.collection('posts').orderBy("timestamp",'desc').onSnapshot(snapshot=>setPost(snapshot.docs.map(doc=>(
                     {
                           id:doc.id,
                           data:doc.data()
                     }
               ))))
            }
      ,[])

      const sendPost = () =>{
                     db.collection('posts').add({
                           name: user.displayName,
                           description:user.email,
                           message:input,
                           photo:user.photoUrl||'',
                           timestamp:firebase.firestore.FieldValue.serverTimestamp()
                     });
                setInput('')
          
      };
      return (
            <div className="feed">
                  <div className="inputContainer">
                        <div className="input">
                              <Icon/>
                               <form onClick={(e)=>e.preventDefault()}>
                                     <input 
                                     value={input}
                                     onChange={(e)=>setInput(e.target.value)}
                                     type="text"/>
                                     <button type='submit' onClick={sendPost}>Send</button>
                               </form>
                        </div>
                        <div className="inputOp">    
                              <InputOption title="Photo" Icon={Image} color={"cadetblue"}/>
                              <InputOption title="Video" Icon={Video} color={"rgb(218, 152, 53)"}/>
                              <InputOption title="Events" Icon={Events} color={"grey"}/>
                              <InputOption title="Write article" Icon={Write} color={"grey"}/>
                        </div>
                  </div>
            <FlipMove>
    {
          posts.map(({id,data:{name,description,message,photo}})=><Post
          key={id}
          name={name}
          description={description}
          message={message}
          photo={photo}
          />)
    }</FlipMove>

            </div>
      )
}

export default Feed
