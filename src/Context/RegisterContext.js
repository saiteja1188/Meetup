import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: 'Arts and Culture',
  isRegister: false,
  showError: false,
  changeName: () => {},
  changeTopic: () => {},
  registerName: () => {},
  updateError: () => {},
})

export default RegisterContext
