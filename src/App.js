import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import HomeRoute from './components/HomeRoute'
import RegisterRoute from './components/RegisterRoute'
import NotFoundRoute from './components/NotFoundRoute'

import './App.css'
import RegisterContext from './Context/RegisterContext'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here

class App extends Component {
  state = {
    name: '',
    topic: 'Arts and Culture',
    isRegister: false,
    showError: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = topic => {
    this.setState({topic})
  }

  registerName = () => {
    this.setState({isRegister: true})
  }

  updateError = () => {
    this.setState({showError: true})
  }

  render() {
    const {name, topic, isRegister, showError} = this.state
    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          isRegister,
          showError,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          registerName: this.registerName,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/register" component={RegisterRoute} />
          <NotFoundRoute />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
