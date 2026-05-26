import oceanBig from '../assets/bottle.svg'

function EndScreen(props) {
  return (
    <div className="endscreen">
      <img src={oceanBig} alt="ocean" className="endscreen_icon" />
      <h1>🌊 Ocean Cleaned! 🌊</h1>
      <p>You dove deep, sailed far and cleaned every last drop.</p>
      <p>🐠 The fish are proud of you! 🐋</p>
      <button className="endscreen_button" onClick={props.handleReset}>Play again</button>
    </div>
  )
}

export default EndScreen
