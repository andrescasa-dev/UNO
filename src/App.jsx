import { useState } from 'react'
import Pile from './components/Pile'
import Player from './components/Player'
import useSetUp from './hooks/useSetUp'
// import cardsData from './data/cardsData'

function App () {
  // const PLAYERS_QUANTITY = 2
  const initial = useSetUp()
  const [cards, setCards] = useState(initial.cards)
  const [playerCards, setPlayerCards] = useState(initial.playerCards)
  const [discard, setDiscard] = useState(initial.discard)
  const [selectedIndex, setSelectedIndex] = useState(null)
  // const [isGameOver, setIsGameOver] = initial.gameOver

  const draw = () => {
    const cardToDraw = cards.at(-1)
    setCards(prev => prev.slice(0, -1))
    setPlayerCards(prev => [...prev, cardToDraw])
    return cardToDraw
  }

  const handleSelectCard = (event) => {
    event.target.classList.add('card--selected')
    setSelectedIndex(event.target.dataset.index)
  }

  const play = () => {
    const cardSelected = playerCards[selectedIndex]
    const isMatch = cardSelected.symbol === discard.symbol || cardSelected.color === discard.color || cardSelected.color === discard.substitute
    const isBlackCard = cardSelected.color === 'black'
    if (isMatch || isBlackCard) {
      setCards(prevCards => [discard, ...prevCards])
      if (isBlackCard) playerCards[selectedIndex].substitute = prompt('choose a color')
      setDiscard(playerCards[selectedIndex])
      setPlayerCards(prevCards => prevCards.filter((card, i) => i !== Number(selectedIndex)))
      setSelectedIndex(null)
    } else {
      alert("can't play")
    }
    return false
  }

  return (
    <div className='grid grid-cols-3 grid-rows-3 h-screen'>
      <Pile card={cards.at(-1)} quantity={cards.length}/>
      <Pile card={discard} quantity={1} showQuantity={false} />
      <Player cards={playerCards} handleClick={handleSelectCard} />
      <button onClick={(event) => draw()} className='col-start-1 row-start-3 bg-gray-400'>draw</button>
      <button onClick={(event) => play()} className='col-start-3 row-start-3 bg-gray-400'>{selectedIndex}</button>
    </div>
  )
}

export default App
