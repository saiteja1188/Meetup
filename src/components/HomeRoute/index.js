import {Link} from 'react-router-dom'

import RegisterContext from '../../Context/RegisterContext'

import Header from '../Header'

import {
  HomeContainer,
  Name,
  Topic,
  Image,
  HomeHeading,
  HomeDesc,
  HomeRegister,
} from './styled'

const HomeRoute = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {name, topic, isRegister} = value

        return (
          <div>
            <Header />
            {isRegister === true ? (
              <HomeContainer>
                <Name>Hello {name}</Name>
                <Topic>Welcome to {topic}</Topic>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            ) : (
              <HomeContainer>
                <HomeHeading>Welcome to Meetup</HomeHeading>
                <HomeDesc>Please register for the topic</HomeDesc>
                <Link to="/register">
                  <HomeRegister type="button" onClick={onRegister}>
                    Register
                  </HomeRegister>
                </Link>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            )}
          </div>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default HomeRoute
