import { Route, Switch } from 'react-router-dom'
import { useState } from 'react';
import LoginRoute from './components/LoginRoute';
import HomeRoute from './components/HomeRoute';
import ProtectedRoute from './components/ProtectedRoute';
import TrendingRoute from './components/TrendingRoute';
import GamingRoute from './components/GamingRoute';
import VideoItemDetails from './components/VideoItemDetails';
import ModeContext from './contexts/ModeContext';
import OptionContext from './contexts/OptionContext';
import SavedVideosContext from './contexts/SavedVideosContext';
import SavedVideosRoute from './components/SavedVideosRoute';

const App = () => {
  const [activeMode, updateActiveMode] = useState('light')
  const [activeOption, updateActiveOption] = useState('')
  const [savedVideosList, updateSavedVideosList] = useState([])

  return (
    <ModeContext.Provider
      value={{ activeMode, updateActiveMode }}
    >
      <OptionContext.Provider
        value={{ activeOption, updateActiveOption }}
      >
        <SavedVideosContext.Provider
          value={{savedVideosList, updateSavedVideosList}}
        >
          <Switch>
            <Route exact path='/login' component={LoginRoute} />
            <ProtectedRoute exact path='/' component={HomeRoute} />
            <ProtectedRoute exact path='/trending' component={TrendingRoute} />
            <ProtectedRoute exact path='/gaming' component={GamingRoute} />
            <ProtectedRoute exact path='/savedvideos' component={SavedVideosRoute} />
            <ProtectedRoute exact path='/videos/:id' component={VideoItemDetails} />
          </Switch>
        </SavedVideosContext.Provider>
      </OptionContext.Provider>
    </ModeContext.Provider>
  )
}

export default App;
