import Card from './Card'

function Pile ({ card, quantity, showQuantity = true }) {
  const currentCard = <Card {...card} />
  return (
    <div className="flex text-center flex-col justify-center items-center">
      {currentCard}
      {showQuantity && <p className="p-4">{quantity}</p>}
    </div>
  )
}

export default Pile
