import './style.css';

export default function Subtitle(props) {
    return(
        <div className="subtitle">
            <label>{props.message}</label>
        </div>
    )
}