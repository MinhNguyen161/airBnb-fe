import React from 'react'

const Experience = ({ title, pictureUrl, minimumRate, country, duration }) => {
    return (
        <div>
            <h1> {title}</h1>
            <span> url:{pictureUrl}</span>
            {minimumRate}
            <span> there's {country}</span>
            <div>
                {duration}
            </div>

        </div>
    )
}

export default Experience
