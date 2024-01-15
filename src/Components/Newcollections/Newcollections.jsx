import React, { useEffect, useState } from 'react'
import './Newcollections.css'
// import new_collections from '../Assets/new_collections'
import Item from '../Items/Item'
// import { useActionData } from 'react-router-dom'
const Newcollections = () => {

  const [newCollection, setNewCollection] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/newcollection').then((res) => res.json()).then((data) => setNewCollection(data));
  },[])

  return (
    <div className='new-collections'>
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {newCollection.map((item, i)=>{
            return <Item key ={i} id ={item.id} name={item.name} image={item.image} new_price = {item.new_price} old_price = {item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Newcollections
