import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false)
    const history = useHistory()

    const transitionNavBar = () =>{
          if(window.scrollY > 100){
            handleShow(true)
          }else{
              handleShow(false)
          }
        }
    useEffect(()=>{
       window.addEventListener('scroll', transitionNavBar)
       return ()=>window.removeEventListener('scroll', transitionNavBar)
    },[])
    return (
        <div className={`nav ${show ? 'nav__black' : ''}`}>
            <div className="nav__contents">
                <img onClick={()=>history.push('/')} className="nav__logo" src="https://i.ibb.co/r5krrdz/logo.png" alt=""/>
                <img onClick={()=>history.push('/profile')} src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="" className="nav__avatar"/>
            </div>
        </div>
    )
}

export default Nav
