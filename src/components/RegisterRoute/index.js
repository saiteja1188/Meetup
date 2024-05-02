import Header from '../Header'
import RegisterContext from '../../Context/RegisterContext'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const RegisterRoute = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        registerName,
        updateError,
        showError,
      } = value
      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      const onSubmit = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      return (
        <div>
          <Header />
          <div className="register-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <form className="form-container" onSubmit={onSubmit}>
              <h1 className="reg-heading">Let us join</h1>
              <div className="input-container">
                <label htmlFor="name" className="input-label">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  placeholder="Your name"
                  className="input"
                  onChange={onChangeName}
                />
              </div>
              <div className="input-container">
                <label htmlFor="name" className="input-label">
                  TOPICS
                </label>
                <select
                  id="topic"
                  value={topic}
                  className="input"
                  onChange={onChangeTopic}
                >
                  {topicsList.map(each => (
                    <option value={each.id} key={each.id}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="button">
                Register Now
              </button>
              {showError && <p className="error">Please enter your name</p>}
            </form>
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default RegisterRoute
