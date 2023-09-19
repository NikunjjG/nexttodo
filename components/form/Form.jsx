'use client'
import React, { useState } from 'react'
import '../../globalcss/global.css'
import './form.css'
import { Poppins } from 'next/font/google'
import Task from '../task/Task'

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
  })

const Form = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [tasks, setTasks] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    setTasks([...tasks, {title, desc}])
    console.log(tasks)
    setTitle("")
    setDesc("")
  }

  return (
    <div className={poppins.className}>
      <div className="form">
        <form className='df jcsb aic flw' onSubmit={submitHandler}>
            <div className="input-form df aic">
                <p>Enter Task: </p>
                <input type="text" name="" id="" placeholder='Enter task Title' 
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                />
            </div>
            <div className="input-form df aic">
                <p>Enter Task Description: </p>
                <input type="text" name="" id="" placeholder='Enter task description'
                value={desc}
                onChange={(e) => {setDesc(e.target.value)}}
                />
            </div>
            <div className="input-form">
                <button>Add Task</button>
            </div>
        </form>
        <hr />
        {
          tasks.map((t, i) => (
            <Task key={i} index={i + 1} title={t.title} desc={t.desc} />
          ))
        }
      </div>
    </div>
  )
}

export default Form
