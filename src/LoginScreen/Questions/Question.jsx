import React, { useState } from 'react'
import './Question.css'
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import { toggleQuestion } from '../../features/userSlice';
import { IconButton } from '@material-ui/core';

function Question({ question, answer}) {
    const [show, setShow] = useState(false)
    return (
        <div className="question">
            <div className="question__header">
              <p>{question}</p>
               <IconButton onClick={()=>setShow(!show)}>
               {show ? <CloseIcon/>:<AddIcon/>}
              </IconButton> 
            </div>
            <div className={`question__body ${show && 'show'}`}>
               <p>{answer}</p>
            </div>
        </div>
    )
}

export default Question
