import Menu from '../components/Menu'
import EndScreen from '../pages/EndScreen'
import { Outlet } from "react-router"

function Root(props) {
  if (props.isEnded) {
    return (
      <div className="root">
        <EndScreen handleReset={props.handleReset} />
      </div>
    )
  }

  return (
    <div className="root">
      <div className="root_content">
        <Outlet />
      </div>
      <Menu items={props.items}/>
    </div>
  )
}

export default Root