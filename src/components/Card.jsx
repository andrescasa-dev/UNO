
function Card ({ symbol, color, handleClick = null, index = 0 }) {
  return (
    <div data-index={index} onClick={handleClick} className='flex text-4xl w-1/4 h-full items-center justify-center font-bold text-white' style={{ background: color }}>
        <div className="drop-shadow-[2px_2px_0px_#000]">
          {symbol}
        </div>
    </div>
  )
}

export default Card
