import React from "react"

const OptionContext = React.createContext({
    activeOption: '',
    updateActiveOption: () => {},
})

export default OptionContext