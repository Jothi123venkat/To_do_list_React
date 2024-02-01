import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Additem from './Additem'
import { useState } from 'react'



const App = () => {
  const[items,setitems]=useState(
    [
        {
            id:1,
            checked:true,
            task : 'learning react js'
        },

        {
             id:2,
             checked:true,
             task:'youtube videos'
        },
        {
            id:3,
            checked:true,
            task:'playing cricket'
        }

    ]
)

const [newitem,setnewitem]=useState('')

const additem = (item)=>
{
  const id=items.length ? items[items.length-1].id+1:1;
  const addnewitem ={id,checked:false,task:item}
  const listitems=[...items,addnewitem]
  setitems(listitems)
  localStorage.setItem('todolist',JSON.stringify(listitems))
}

const handlecheck =(id)=>{
  const listitems = items.map((x)=>
  x.id===id?{...x,checked:!x.checked}:x)
  setitems(listitems)
}

const handledelete =(id)=>
{
 const listitems = items.filter(
    (z)=>z.id!==id)
    setitems(listitems)
    localStorage.setItem('todo_list',JSON.stringify(listitems))
}

const handleitemsubmit=(e)=>
{
  e.preventDefault()
  if(!newitem) return;
  additem(newitem)
  setnewitem('')
}

  return (
    <div className='App'>
        <Header title='VENKAT TODO LIST' />
        <Additem
         newitem={newitem}
         setnewitem={setnewitem}
         handleitemsubmit={handleitemsubmit}
        />
        <Content
         items={items}
         setitems={setitems}
         handlecheck={handlecheck}
         handledelete={handledelete}
        />
        <Footer/>
    </div>
  )
}

export default App