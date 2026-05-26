import shortenNumber from "../utils/shortenNumber";

function Booster(props) {

    const value = shortenNumber(props.value);

    return (
        <div className="booster">
            {value} bottles / click
        </div>
    )
}
export default Booster