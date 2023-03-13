

import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppButton from '../../components/button/AppButton'

const Home = () => {
    const navigate = useNavigate()
    const logoutHandler = () => {
        navigate('/')
        localStorage.clear()
    }
    return (
        <div>
            <h1>Home</h1>
            <AppButton text={'Logout'} onClickFunc={logoutHandler} />
        </div>
    )
}

export default Home