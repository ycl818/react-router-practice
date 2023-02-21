import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios'

const api = 'https://api.unsplash.com/search/photos'
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS
console.log(api, accessId)
const AlbumLayout = () => {

  const [list, setList] = useState([])

  useEffect(()=>{
    (async() => {
        const response = await axios.get(`${api}?client_id=${accessId}&query=animal`)
        console.log(response);
        const { results } = response.data
        setList(results)
    })()
  },[])

  return (
    <div className="row">
        <div className="col-4">
            左側選單
            {list.map((item)=> {
                return <li key={item.id}>{item.id}</li>
            })}
        </div>
        <div className="col-8">
           <Outlet context={list}/>
        </div>
    </div>
  )
}

export default AlbumLayout