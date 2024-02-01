import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Additem = ({newitem,setnewitem,handleitemsubmit }) => {
  return (
    <form className='addForm' onSubmit={handleitemsubmit}>
    
    <input type="text"
   
     autoFocus 
     id='additem'
     placeholder='ADDITEM'
     required   
     value={newitem}
     onChange={(e)=>setnewitem(e.target.value)}
    />

   <button type='submit'><FaPlus/></button>


    </form>

    
  )
}

export default Additem
