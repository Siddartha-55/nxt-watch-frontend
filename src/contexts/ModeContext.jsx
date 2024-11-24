import React from 'react'

const ModeContext = React.createContext({
    activeMode: 'light',
    updateActiveMode: () => {},
})

export default ModeContext