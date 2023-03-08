import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 20px;
`

export const PageContent = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`

export const GameButtonContainer = styled.ul`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0px;
`
export const PlayerLabel = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
`

export const ResultText = styled.p`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  border-radius: 6px;
  border-style: none;
  font-family: 'Bree Serif';
  font-size: 20px;
  font-weight: 500;
  color: #223a5f;
  width: 150px;
  padding: 10px;
  align-self: center;
  cursor: pointer;
  margin-bottom: 30px;
`

export const RulesButtonContainer = styled.div`
  text-align: right;
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  border-radius: 6px;
  border-style: none;
  font-family: 'Bree Serif';
  font-size: 20px;
  font-weight: 500;
  color: #223a5f;
  padding: 10px 20px;
  align-self: flex-end;
  cursor: pointer;
`

export const ModalBg = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const ModalCloseButton = styled.button`
  border-style: none;
  align-self: flex-end;
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const ModalImage = styled.img`
  width: 100%;
`
