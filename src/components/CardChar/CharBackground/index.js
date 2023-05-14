import './style.css';
import './char.css';
import './char2.css';
import './char3.css';
import './effect-on.css';

export default function CharBackground(props) {
    return ([
        <div key={`${props.character}-background`} className="background">
            <img src={`/images/background/${props.character}.gif`} alt={props.character + " background"} />
        </div>,  
        <div key={`${props.character}-char`} className="char">
            <img src={`/images/characters/medieval/${props.character}.gif`} alt={props.character} />
        </div>
    ])
}