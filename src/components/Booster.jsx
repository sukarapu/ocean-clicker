import shortenNumber from "../utils/shortenNumber";

function Booster(props) {

    const value = shortenNumber(props.value);
    const label = props.value === 1 ? 'bottle' : 'bottles';

    return (
        <div className="booster">
            {value} {label} / click
        </div>
    )
}
export default Booster