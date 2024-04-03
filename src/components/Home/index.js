import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    isLoading: true,
    iplTeams: [],
  }

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const request = await fetch('https://apis.ccbp.in/ipl')
    const response = await request.json()

    const formatedData = response.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({iplTeams: formatedData, isLoading: false})
  }

  render() {
    const {isLoading, iplTeams} = this.state

    return (
      <div className="home-bg-iplTeams">
        <div>
          <div className="ipl-logo-heading">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              className="ipl-logo"
              alt="ipl logo"
            />
            <h1 className="heading">IPL Dashboard</h1>
          </div>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <ul className="teams-list-container">
            {iplTeams.map(eachTeam => (
              <TeamCard teamDtails={eachTeam} key={eachTeam.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
