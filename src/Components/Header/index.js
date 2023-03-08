import {
  NavContainer,
  NavText,
  ScoreContainer,
  ScoreLabel,
  Score,
} from './StyledComponents'

const Header = props => {
  const {score} = props

  return (
    <NavContainer>
      <div>
        <NavText>
          Rock
          <br />
          Paper
          <br />
          Scissors
        </NavText>
      </div>
      <ScoreContainer>
        <ScoreLabel>Score</ScoreLabel>
        <Score>{score}</Score>
      </ScoreContainer>
    </NavContainer>
  )
}

export default Header
