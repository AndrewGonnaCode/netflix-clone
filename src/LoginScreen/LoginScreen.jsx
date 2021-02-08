import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTab, selectQuestions, selectTabs } from '../features/userSlice'
import './LoginScreen.css'
import Question from './Questions/Question'
import SignupScreen from './SignupScreen'
import CancelTab from './Tabs/CancelTab'
import PickTab from './Tabs/PickTab'
import WatchTab from './Tabs/WatchTab'

function LoginScreen() {
    const [signIn, setSignIn] = useState(false)
    const tabs = useSelector(selectTabs)
    const questions = useSelector(selectQuestions)
    const dispatch = useDispatch()
    const [currentTab, setCurrentTab] = useState(1)
   
    const selectTab = (id) =>{
        dispatch(changeTab(id))
        setCurrentTab(id)
    } 
    return (
      <>
        <div className="loginScreen">
            <div className="loginScreen__background">
               <img className="loginScreen__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="loginScreen__logo"/>
               <button onClick={()=>setSignIn(true)} className="loginScreen__button">Sign In</button>
               <div className="loginScreen__gradient"/>
            </div>
            <div className="loginScreen__body">
                {signIn ? (
                    <SignupScreen/>
                ):(
                    <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                      <h2>Watch anywhere. Cancel at any time</h2>
                      <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                       <div className="loginScreen__input">
                            <form>
                               <input type='email' placeholder="Email Address"/>
                               <button onClick={()=>setSignIn(true)} className="loginScreen__getStarted">GET STARTED</button>    
                            </form>   
                        </div> 
                      </>
                )}
            </div>
        </div>
        <div className="loginScreen__panel">
            <div  className="loginScreen__tabs">
                {tabs.map(({id,text,icon, checked})=>(
                    <div key={id} onClick={()=>selectTab(id)}  className={`loginScreen__tab ${checked && 'tab__border'}`}>
                    <i  class={`fas ${icon} fa-3x`}></i>
                    <p class="hide-sm">{text}</p>
                </div>
                ))}
         </div>
        </div>
        <div className="tabs__content">
            <div>
              {currentTab === 1 && <CancelTab/>} 
              {currentTab === 2 && <WatchTab/>} 
              {currentTab === 3 && <PickTab/>}
            </div>
            <div className="loginScreen__questions">
                <h1>Frequently Asked Questions</h1>
                <div className="questions__items">
                    {questions.map(({id, answer, question, opened})=><Question answer={answer} question={question} key={id} opened={opened}/>)}
                </div>
            </div>
        </div>
       
       
        </>
    )
}

export default LoginScreen
