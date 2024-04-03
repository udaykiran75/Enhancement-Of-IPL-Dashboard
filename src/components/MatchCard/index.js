import './index.css'

const MatchCard = props => {
  const {matchCard} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchCard

  return (
    <li className="card-container">
      <img
        src={competingTeamLogo}
        className="card-image-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatus}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
