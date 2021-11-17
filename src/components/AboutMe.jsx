import React from 'react'
// arrow function
const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src="https://source.unsplash.com/random" alt="" />
                    </div>
                </div>
            <div className="col-lg-6 col-xm-12">
                <h1 className="about-heading">About me</h1>
                <p className="p-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tempora? Eos aperiam, incidunt libero corrupti recusandae laudantium modi, nobis, ab in mollitia facilis quasi ad saepe. Dolorum, at quo. Maxime alias voluptates enim consequuntur placeat nam, ratione ducimus fugiat vero repellat deserunt, tenetur, ad praesentium nulla in sint perferendis corrupti.</p>
            </div>

            </div>
            
        </div>
    )
}

export default AboutMe
