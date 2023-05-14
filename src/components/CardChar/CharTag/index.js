import './style.css';

export default function CharTag(props) {
    return (
        <div className="char-tag" 
            style={{
                background: props.colorBottomBar,
                height: !props.shortVersion ? "12%" : "19%"
            }}>
            <label>
                {props.charTag}
            </label>
        </div> 
    )
}