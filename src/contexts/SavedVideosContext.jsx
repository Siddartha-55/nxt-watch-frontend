import React from "react"

const savedVideosList = React.createContext({
    savedVideosList: [],
    updateSavedVideosList: () => {},
})

export default savedVideosList