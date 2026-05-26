import shortenNumber from "../utils/shortenNumber";

function Booster(props) {

    const value = shortenNumber(props.value);

    return (
        <div className="booster">
            {value} lemon / click
        </div>
    )
}
export default Booster