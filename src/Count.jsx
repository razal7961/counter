import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset } from './store/storeslice'

function Count() {

    const count= useSelector((state)=>state.counterreducer.count)
    const dispatch=useDispatch()






  return (
    <div className='d-flex justify-content-center align-items-center'>
        <div>
        
        <div><h1 className='text-center'>Counter application</h1></div>
        <div className='bg-info ' style={{width:'100px', height:'50px'}}>{count}</div>
        <div className='d-flex justify-content-center mt-3'>
             <button className='btn btn-success' onClick={()=>dispatch(increment())}>Increment</button>
             <button className='btn btn-primary ms-2' onClick={()=>dispatch(decrement())}>Decrement</button>
             <button className='btn btn-secondary ms-2' onClick={()=>dispatch(reset())}>Reset</button>
        </div>
        </div>
        
      
    </div>
  )
}

export default Count
