import './style.css';

export default function Screensaver(props) {
    return (
        <div className={"screensaver screen-icon-" + props.character} onClick={()=>{props.setScreensaver(false)}}>
            <img src={`/images/charIcons/${props.character}.png`} alt={`${props.character} icon`} />
        </div>
    )
}