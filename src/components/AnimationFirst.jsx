import React from 'react'
import { LOGO_URL } from '../config/dev.enviromental'
import '../styles/small/animationPage.scss'

function AnimationFirst() {


    return (
        <>
            <div class="loading-screen">
                <img src={LOGO_URL} class="loading-icon" />
                <span class="line"></span>
            </div>
        </>
    )
}

export default AnimationFirst