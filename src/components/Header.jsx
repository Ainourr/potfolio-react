import React from 'react'
import Typed from 'react-typed'
import shekil from '../components/resume.pdf'

const Header = () =>{
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Aynur Mahmudova</h1>
                <Typed
                className="typed-text"
                strings={[
                    'Baku Engineering University',
                    'Math Teacher',
                    'Microsoft Technology Associate',
                    'English Language B2 level',]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                   
                </Typed>

                <a href={shekil} className="downloadcv" download>Download CV</a>
            </div>
            
        </div>
    )
}

export default Header
