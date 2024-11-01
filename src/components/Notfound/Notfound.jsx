import React from 'react'
import notfound from '../../assets/images/404 error with person looking for.gif'

export default function Notfound() {
    return <>
        <div className="h-screen flex justify-center items-center">
            <img src={notfound} alt="" />
        </div>
    </>
}
