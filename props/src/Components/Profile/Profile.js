import React from 'react'

function Profile(props) {
    return (
        <div>
            <h1>{props.fullName}</h1>
            <h1>{props.bio}</h1>
            <h2>{props.profession}</h2>
            {props.children}


        </div>
    )
}

export default Profile
