// import React from 'react'
import ComponentTwo from "./ComponentTwo.jsx"

const ComponentOne = () => {
    const users = [
        {id:1, name:"Nishant", ag:21, city:"Panipat"},
        {id:2, name:"Prince Ahlawat", ag:21, city:"Rohtak"},
        {id:3, name:"Abhishek", ag:19, city:"Lucknow"},
        {id:4, name:"Dev", ag:21, city:"Karnal"},
        {id:5, name:"Rahul", ag:22, city:"Delhi"},
        {id:6, name:"Krish", ag:17, city:"Mumbai"},
        {id:7, name:"Bob", ag:24, city:"London"},
        {id:7, name:"Haarry", ag:26, city:"Paris"}
    ]
  return (
    <div>
        <ComponentTwo users = {users}/>
    </div>
  )
}

export default ComponentOne