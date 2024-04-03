import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = matchDetails

  return (
    <div className="match-div-card">
      <p className="latest-heading">Latest Matches</p>
      <div className="latest-match-container">
        <div className="match-div">
          <div>
            <p className="match-heading">{competingTeam}</p>
            <p className="match-heading">{date}</p>
            <p className="text">{venue}</p>
            <p className="text">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="team-logo"
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="horizantal-line" />
        <img
          src={competingTeamLogo}
          className="medium-team-logo"
          alt={`latest match ${competingTeam}`}
        />
        <div className="match-div-con">
          <p className="text">First Innings</p>
          <p className="text">{firstInnings}</p>
          <p className="text">Second Innings</p>
          <p className="text">{secondInnings}</p>
          <p className="text">Man Of The Match</p>
          <p className="text">{manOfTheMatch}</p>
          <p className="text">Umpires</p>
          <p className="text">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
