import React from 'react'
import photo from '../pp.png'

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={photo} alt="photo" />
                    </div>
                </div>
            <div className="col-lg-6 col-xm-12">
                <h1 className="about-heading">About me</h1>
                <p className="p-text">I`m Aynur. My age is 21. I`m currently in my fourth years of studying Math teacher at Baku Engineering University. I am taking front-end courses for 3 months more . In the future, want to be proficient full-stack developer.</p>
            </div>

            </div>
            
        </div>
    )
}

export default AboutMe
