import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'
import PieChart from '../PieChart'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamMatch: [],
    className: '',
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const request = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const response = await request.json()
    const formattedData = {
      teamBannerUrl: response.team_banner_url,
      latestMatchDetails: this.getFormattedData(response.latest_match_details),
      recentMatches: response.recent_matches.map(matchCard =>
        this.getFormattedData(matchCard),
      ),
    }

    this.setState({className: id, isLoading: false, teamMatch: formattedData})
  }

  getNoOfMatches = value => {
    const {teamMatch} = this.state
    const {latestMatchDetails, recentMatches} = teamMatch
    const currentMatch = value === latestMatchDetails.matchStatus ? 1 : 0
    const result =
      recentMatches.filter(match => match.matchStatus === value).length +
      currentMatch
    return result
  }

  generatePieChartData = () => [
    {id: 0, name: 'Won', value: this.getNoOfMatches('Won')},
    {id: 1, name: 'Lost', value: this.getNoOfMatches('Lost')},
    {id: 2, name: 'Drawn', value: this.getNoOfMatches('Drawn')},
  ]

  render() {
    const {isLoading, teamMatch, className} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatch

    return (
      <div className={`bg ${className}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div>
            <img
              src={teamBannerUrl}
              className="banner-image"
              alt="team banner"
            />
            <LatestMatch matchDetails={latestMatchDetails} />
            <h1 className="latest-heading m-4">Team Statistics</h1>
            <PieChart data={this.generatePieChartData()} />
            <ul className="match-cards-list">
              {recentMatches.map(match => (
                <MatchCard matchCard={match} key={match.id} />
              ))}
            </ul>
            <div className="back-btn-container">
              <Link to="/">
                <button type="button" className="back-button">
                  Back
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
