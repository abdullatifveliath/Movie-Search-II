import React, { createContext, useState } from 'react'

export const favMoviesContextApi = createContext()

function ContextShare({ children }) {
    const [favMoviesRes, setFavMoviesRes] = useState("")
    return (
        <div>
            <favMoviesContextApi.Provider value={{ favMoviesRes, setFavMoviesRes }}>
                {children}
            </favMoviesContextApi.Provider>
        </div>
    )
}

export default ContextShare