import { useEffect, useState } from 'react'
import { INIT_CARDS_PER_USER } from '../constants'
import cardsData from '../data/cardsData'

const useSetUp = () => {
  const [isGameOver, setIsGameOver] = useState(false)
  let playerCards = []
  let discard = {}
  let cards = cardsData
  useEffect(() => {
    // set up game
    playerCards = cards.slice(0, INIT_CARDS_PER_USER)
    cards = cards.slice(INIT_CARDS_PER_USER)
    discard = cards.find(card => /^\d$/.test(card.symbol))
    cards = cards.filter(card => card.id !== discard.id)
  }, [isGameOver])
  return { gameOver: [isGameOver, setIsGameOver], setIsGameOver, playerCards, discard, cards }
}

export default useSetUp
