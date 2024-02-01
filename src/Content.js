
import { FaTrashAlt } from "react-icons/fa";

const Content = ({items,setitems,handlecheck,handledelete}) => {



  return (
    <main>
      {(items.length)?(
       
<ul>

  {items.map((x)=>(

  <li className='item' key={x.id}>
      <input type="checkbox" checked={x.checked}
      onChange={()=>handlecheck(x.id)}
      />
      <label style={(x.checked)?{textDecoration:'line-through'}:null}
      
      onDoubleClick={()=>handlecheck(x.id)}>{x.task}
       
      </label>
      < FaTrashAlt
        role='button'
        onClick={()=>handledelete(x.id)}
      />
      
  </li>

  ))}



</ul>
      ):(<p style={{color:'white', marginTop:'8rem'}}>Your list is empty</p>)
  
  }
    </main>
  
  )
}


export default Content