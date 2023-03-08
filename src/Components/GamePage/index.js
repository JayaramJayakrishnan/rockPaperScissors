import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'

import Header from '../Header'
import Button from '../Button'
import PlayerChoice from '../PLayerChoice'

import {
  BgContainer,
  PageContent,
  GameButtonContainer,
  PlayerLabel,
  ResultText,
  PlayAgainButton,
  RulesButton,
  ModalBg,
  ModalCloseButton,
  ModalImage,
} from './StyledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const gameStatusList = {
  initial: 'STATED',
  won: 'YOU WON',
  draw: 'IT IS DRAW',
  lost: 'YOU LOSE',
}

class GamePage extends Component {
  state = {
    score: 0,
    playersChoice: '',
    opponentsChoice: '',
    gameStatus: gameStatusList.initial,
  }

  componentDidMount() {
    this.generateOpponentsChoice()
  }

  generateOpponentsChoice = () => {
    const opponentsChoice = choicesList[Math.floor(Math.random() * 3)].id
    this.setState({opponentsChoice})
    console.log(opponentsChoice)
  }

  onClickPlayAgain = () => {
    this.setState(
      {
        gameStatus: gameStatusList.initial,
      },
      this.generateOpponentsChoice(),
    )
  }

  selectPlayersChoice = id => {
    const {opponentsChoice, score} = this.state

    switch (id) {
      case 'ROCK':
        if (opponentsChoice === 'PAPER') {
          this.setState({
            score: score - 1,
            gameStatus: gameStatusList.lost,
            playersChoice: id,
          })
        } else if (opponentsChoice === 'SCISSORS') {
          this.setState({
            score: score + 1,
            gameStatus: gameStatusList.won,
            playersChoice: id,
          })
        } else {
          this.setState({gameStatus: gameStatusList.draw, playersChoice: id})
        }
        break
      case 'PAPER':
        if (opponentsChoice === 'SCISSORS') {
          this.setState({
            score: score - 1,
            gameStatus: gameStatusList.lost,
            playersChoice: id,
          })
        } else if (opponentsChoice === 'ROCK') {
          this.setState({
            score: score + 1,
            gameStatus: gameStatusList.won,
            playersChoice: id,
          })
        } else {
          this.setState({gameStatus: gameStatusList.draw, playersChoice: id})
        }
        break
      case 'SCISSORS':
        if (opponentsChoice === 'ROCK') {
          this.setState({
            score: score - 1,
            gameStatus: gameStatusList.lost,
            playersChoice: id,
          })
        } else if (opponentsChoice === 'PAPER') {
          this.setState({
            score: score + 1,
            gameStatus: gameStatusList.won,
            playersChoice: id,
          })
        } else {
          this.setState({gameStatus: gameStatusList.draw, playersChoice: id})
        }
        break
      default:
        console.log('default case')
    }
  }

  renderPlayingView = () => (
    <GameButtonContainer>
      {choicesList.map(item => (
        <Button
          buttonDetails={item}
          key={item.id}
          selectPlayersChoice={this.selectPlayersChoice}
        />
      ))}
    </GameButtonContainer>
  )

  GameResultView = () => {
    const {playersChoice, opponentsChoice, gameStatus} = this.state
    const opponent = choicesList.find(item => item.id === opponentsChoice)
    const player = choicesList.find(item => item.id === playersChoice)

    return (
      <>
        <GameButtonContainer>
          <li>
            <PlayerLabel>YOU</PlayerLabel>
            <PlayerChoice buttonDetails={player} altText="your choice" />
          </li>
          <li>
            <PlayerLabel>OPPONENT</PlayerLabel>
            <PlayerChoice buttonDetails={opponent} altText="opponent choice" />
          </li>
        </GameButtonContainer>
        <ResultText>{gameStatus}</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </>
    )
  }

  switchViews = () => {
    const {gameStatus} = this.state

    if (gameStatus === gameStatusList.initial) {
      return this.renderPlayingView()
    }
    return this.GameResultView()
  }

  render() {
    const {score} = this.state

    return (
      <BgContainer>
        <PageContent>
          <Header score={score} />
          {this.switchViews()}
          <Popup
            trigger={<RulesButton type="button">Rules</RulesButton>}
            modal
            position="bottom right"
            closeOnDocumentClick
          >
            {close => (
              <ModalBg>
                <ModalCloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </ModalCloseButton>
                <ModalImage
                  alt="rules"
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                />
              </ModalBg>
            )}
          </Popup>
        </PageContent>
      </BgContainer>
    )
  }
}

export default GamePage
