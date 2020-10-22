import React, { useEffect, useState } from "react"
import Experience from "./Experience"

const ExperiencesList = () => {
    const [exp, setExp] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:3000/exp")
            const data = await res.json()
            setExp(data)
        }
        fetchData()
    }, [])
    return (
        <div>
            <ul>
                {exp.map((e) => {
                    return <Experience key={e.id} {...e} />
                })}
            </ul>


        </div>
    )
}

export default ExperiencesList
