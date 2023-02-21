import React from 'react'
import { useOutletContext } from 'react-router-dom'

const AlbumIndex = () => {

  const list = useOutletContext()
  console.log('album index', list)

  return (
    <div>這是相簿首頁
        {list.map((item)=> {
                return <li key={item.id}>{item.id}</li>
            })}
    </div>
  )
}

export default AlbumIndex