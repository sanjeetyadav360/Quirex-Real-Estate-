import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './components/landingComponents/NavBar';
const Notfound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        // navigate('/login');
    }, [])
    return (
        <>
            <NavBar />
            <div>
                <div className='row'>
                    <div className='col-sm-3'></div>
                    <div className='col-sm-7'>
                        <img src="/img/Notfound.png" />

                    </div>
                    <div className='col-sm-2'></div>

                </div>
            </div >
        </>
    )
}

export default Notfound