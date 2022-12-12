import { useState } from 'react'
import Pile from './components/Pile'
import Player from './components/Player'
import cardsData from './data/cardsData'

function App () {
  const INIT_CARDS_PER_USER = 2
  const [playerCards, setPlayerCards] = useState(cardsData.slice(0, INIT_CARDS_PER_USER))
  const [cards, setCards] = useState(cardsData.slice(INIT_CARDS_PER_USER, -1))
  const [discard, setDiscard] = useState(cardsData.at(-1))
  const [cardSelected, setCardSelected] = useState(null)
  console.log(cardSelected)
  const draw = () => {
    const cardToDraw = cards.at(-1)
    setCards(prev => prev.slice(0, -1))
    setPlayerCards(prev => [...prev, cardToDraw])
    return cardToDraw
  }

  // play
  // selectedPlayerCard => discard.

  const handleSelectCard = (event) => {
    setCardSelected(event.target.dataset.index)
  }

  const play = () => {
    setDiscard(playerCards[cardSelected])
    setPlayerCards(prevCards => {
      const left = prevCards.slice(0, cardSelected)
      const right = prevCards.slice(cardSelected + 1)
      return [...left, ...right]
    })
    return false
  }
  return (
    <div className='grid grid-cols-3 grid-rows-3 h-screen'>
      <Pile card={cards.at(-1)} quantity={cards.length}/>
      <Pile card={discard} quantity={1} showQuantity={false} />
      <Player cards={playerCards} handleClick={handleSelectCard} />
      <button onClick={(event) => draw()} className='col-start-1 row-start-3 bg-gray-400'>draw</button>
      <button onClick={(event) => play()} className='col-start-3 row-start-3 bg-gray-400'>play</button>
    </div>
  )
}

export default App
