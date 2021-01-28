import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header'
import MainPage from './components/MainPage';
import { login, selectUser,logout } from './features/userSlice';
import Login from './components/Login/Login'
import {useSelector,useDispatch} from 'react-redux'
import {auth} from './firebase'
function App() {
  const user = useSelector(selectUser)
  const dispacht = useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
          dispacht(login(
            {
              email:userAuth.user.email,
              uid: userAuth.user.uid,
              displayName:userAuth.displayName,
              photoUrl:userAuth.photoUrl
         }
          ))
      } else {
         dispacht(logout());
      }
    })
  },[])

  return (
    <div className="app">
      <Header/>
      {!user ?<Login/>:<MainPage/>}
      
    </div>
  );
}

export default App;
