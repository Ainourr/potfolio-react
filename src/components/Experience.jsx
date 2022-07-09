import React from 'react'

const Experience = () => {
    return (
        <div className='experience'>
            <div className='d-flex justify-content-center my-5'>
                <h1>Experience</h1>
            </div>
            <div className='container experience-wrapper'>

                <div className='timeline-block timeline-block-right'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>09.2020-12.2020</h3>
                         <p>Math Teacher at Qalaba course</p>                    </div>
                </div>

                {/* --experience */}

                  
                <div className='timeline-block timeline-block-left'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2012-2013</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae unde hic eaque tempora, non vel libero ea debitis. Magni repellat amet assumenda ipsum facere nobis culpa sed provident optio dolorem.</p>
                    </div>
                </div>


                  
                <div className='timeline-block timeline-block-right'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>10.2021-05.2022</h3>
                        <p>Volunteer-Math Teacher.The 238 school for elementary grade</p>                    </div>
                </div>

                  
                <div className='timeline-block timeline-block-left'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>02.2022-present</h3>
                        <p>ABB Innovation Center,ABB Tech Kids. Programming Teacher-Asistant</p>                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience
