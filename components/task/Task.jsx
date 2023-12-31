import React from 'react'
import './task.css'

const Task = (props) => {
    console.log(props)
    
  return (
    <div className='row df jcsb flw'>
        <div className="serial">
            <p>{props.index}</p>
        </div>
        <div className="title">
            <p className='heading'>TITLE</p>
            <p className="heading-content">{props.title}</p>
        </div>
        <div className="desc">
            <div className="heading">DESCRIPTION</div>
            <div className="heading-content">{props.desc}</div>
        </div>
        <div className="delete">
            <p onClick={()=>{props.deleteHandler(props.index-1)}}>🗑️</p>
        </div>
    </div>
  )
}

export default Task
