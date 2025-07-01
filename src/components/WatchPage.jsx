import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const [searchParams] = useSearchParams(); 

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(closeMenu());
    }, [])
  return (
    <div className='px-5'>
      <iframe width="914" height="514" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="Panchayat Season 4 live Shooting #panchayatseason4 #phulera #youtube #yt #baliyapanchayat #amazon" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default WatchPage
