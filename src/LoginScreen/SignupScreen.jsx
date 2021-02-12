import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoading, toggleLoading } from '../features/userSlice'
import { auth } from '../firebase'
import Loader from '../Loader/Loader'
import './SignupScreen.css'


function SignupScreen() {

    const dispatch = useDispatch()
    const loading = useSelector(selectLoading)

    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const register = (e) =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser)
        }).catch((e)=>{
            alert(e.message)
        })
    }
    const signIn = (e) =>{
        e.preventDefault()
        dispatch(toggleLoading(true))
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            dispatch(toggleLoading(false))
            console.log(authUser)
        }).catch((e)=>{
            dispatch(toggleLoading(false))
            alert(e.message)
        })
    }
    return (
        <div className="signupScreen">
            {loading ? <Loader/>:(
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email"/>
                <input ref={passwordRef} placeholder="Password" type="password"/>
                <button onClick={signIn} type="submit">Sign In</button>
                <h4>
                    <span>New to Netflix? </span>
                    <span  onClick={register} className="signupScreen__link">Sign Up now.</span>
                </h4>
            </form>
        )}
        </div>
        
    )
}

export default SignupScreen
