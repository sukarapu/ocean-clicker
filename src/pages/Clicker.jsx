import Balance from '../components/Balance'
import Booster from '../components/Booster'
import Header from '../components/Header'
import Bottle from '../components/Bottle'

function Clicker(props) {
  return (
    <div className="container clicker">
      <Header>ocean clicker</Header>
      <Balance total={props.stats.balance} />
      <Bottle onClick={props.handleClick} />
      <Booster value={props.stats.increase} />
    </div>
  )
}

export default Clicker