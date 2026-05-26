import bottle from '../assets/bottle.svg'

function Bottle(props) {
  return (
    <div className="lemon">
      <img src={bottle} alt="bottle" onClick={props.onClick} />
    </div>
  )
}

export default Bottle
