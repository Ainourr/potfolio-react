import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGoogle, faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faDesktop, faFileCode} from '@fortawesome/free-solid-svg-icons'
const  Services = () =>  {
    return (
        <div className="services">
            <h1 className="py-5">Our services</h1>
            <div className="container">
                <div className="row">

                    {/* google seo xidmetleri */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon icon={faGoogle}  className="icon" />
                            </div>
                            <h2>SEO</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sint.</p>
                        </div>
                    </div>

                    {/* veb development ile elaqeli sahe */}

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon icon={faFileCode}  className="icon"/>
                            </div>
                            <h2>Web</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sint.</p>
                        </div>
                    </div>

                    {/* Facebook Marketing SMM*/}

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon icon={faFacebookF}  className="icon" />
                            </div>
                            <h2>Facebook SMM</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sint.</p>
                        </div>
                    </div>

                    {/* IT  */}

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon icon={faDesktop}  className="icon" />
                            </div>
                            <h2>IT, helpdesk</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sint.</p>
                        </div>
                    </div>






                </div>
            </div>
        </div>
    )
}

export default Services
