import React from 'react'
import Button from './Button'
const list = ["All", "Live", "Soocer", "Music", "Technology", "Movies", "News", "Trending"]

const ButtonList = () => {
  return (
    <div className='flex'>
    {
        list.map((item, index)=> {
            return <Button name={item}/>
        })
    }
    </div>
  )
}

export default ButtonList
