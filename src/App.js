import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Footer from './Footer/Footer';
import HomeScreen from './HomeScreen/HomeScreen';
import LoginScreen from './LoginScreen/LoginScreen';
import ProfileScreen from './ProfileScreen/ProfileScreen';

function App() {
  
  const dispatch = useDispatch();
  const user = useSelector(selectUser)

  useEffect(()=>{
     const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
       if(userAuth){
         dispatch(login({
           uid:userAuth.uid,
           email:userAuth.email
         }))
       }else{
        dispatch(logout())
       }
     })
     return unsubscribe
     
  },[dispatch])

  return (
    <>
    <BrowserRouter>
    <div className="app">
        {!user ? (
          <LoginScreen/>
        ):(
          <Switch>
          <Route path="/profile">
             <ProfileScreen/>
          </Route>
          <Route exact path="/">
             <HomeScreen/>
          </Route>
          </Switch>
        )}
        <Footer/>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
