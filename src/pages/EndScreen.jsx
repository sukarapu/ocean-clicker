import oceanBig from '../assets/bottle.svg'

function EndScreen(props) {
  return (
    <div className="endscreen">
      <img src={oceanBig} alt="ocean" className="endscreen_icon" />
      <h1>🌊 Ocean Cleaned! 🌊</h1>
      <p>You collected enough bottles to keep the entire water clean.</p>
      <p>🐋 Thank you for saving the sea! 🐋</p>
      <button className="endscreen_button" onClick={props.handleReset}>Play again</button>
    </div>
  )
}

export default EndScreen
