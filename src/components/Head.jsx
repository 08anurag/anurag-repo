import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col shadow'>
      <div className='flex col-span-1 items-center justify-center'>
        <img className='h-8 ' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEX///+bm5uXl5fi4uKVlZW3t7fNzc3Pz8/8/PyoqKi7u7vHx8ft7e3o6Oijo6Pw8PDV1dU7uO5cAAABSElEQVR4nO3cDY6CMBCAUWxZ/hT1/qeVmM3GC8y2Du/d4AsWMQ4zDAAAAAAAAAAAAAAAAABAqNu0/bS1TbfAvmUrPdiWsMK1XHpQ1qjAax+BR+I1JnBpHfYh5nNae7mEx0WsIYVTR4VTSGE3xzDsIM4dFT5DCveOCveQwuHeOuzPPSZwqGPrsl9jzK30MPWROMbcSd/qWsrYVilr2BV8e9TG9kdoHwAAAAAA8DWWOk9tzTVuXugwX8bWA1FlvMxxgVsn/x9uUYHPPgKPxJhBhWFoHfYhJjD/TFRP8zQxNxszUf8o6BrmP4f576Un+D7M/0xzgufSE/y2AAAAAAAAvsdjz/0ud/r38dPvVMi/FyP9bpP8+2l6mqeJGVXIPxOVf9dX/pmo/Dv3+jmIUXsTT7D78gT7S/PvoAUAAAAAAAAAAAAAAAAADi8trCwI/F7ZPgAAAABJRU5ErkJggg=='/>
        <img className='h-12' src ='https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png'/>
      </div>
      <div className='col-span-8 flex items-center justify-center'>
        <input className='rounded-l-full w-1/2 border border-r-0 border-gray-500' type="text"/>
        <button className='rounded-r-full  border border-gray-500 px-2'>🔍</button>
      </div>
      <div className='col-span-1 flex items-center justify-center'>
        <img className='h-8' src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"/>
      </div>
    </div>
  )
}

export default Head
