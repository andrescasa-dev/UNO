import Card from './Card'

function Player ({ cards, handleClick }) {
  const playerCards = cards.map((card, i) => <Card key={card.id} {...card} handleClick={handleClick} index={i} />)
  return (
    <div className='flex p-4 gap-2 col-start-2 row-start-3'>
      {playerCards}
    </div>
  )
}

export default Player
