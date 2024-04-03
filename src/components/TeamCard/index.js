import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDtails} = props
  const {name, id, teamImageUrl} = teamDtails

  return (
    <Link to={`/team-matches/${id}`} className="team-link-el">
      <li className="team-div">
        <img src={teamImageUrl} className="team-image" alt={name} />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
