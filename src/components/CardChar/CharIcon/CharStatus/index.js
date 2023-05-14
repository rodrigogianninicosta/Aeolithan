import './style.css';
import './status-icon.css';

export default function CharStatus(props) {
    const status = ['health', 'magic', 'attack', 'defense', 'speed'];
    const statusAnswer = [props.health, props.magic, props.attack, props.defense, props.speed];
    return (
        <div className="char-status" style={{display: props.showStatus}}>
            <div className="char-status-information">
                {
                    status.map((status, index) => {
                        return (
                            <div key={index} style={{boxShadow: '0px 0px 2px 0.3px gold'}}>
                                <img src={`/images/icons/${status}.svg`} alt={`${status}`}
                                style={{filter: 'brightness(0) saturate(100%) invert(100%) sepia(38%) saturate(4816%) hue-rotate(356deg) brightness(102%) contrast(105%)'}} />
                                <label>{statusAnswer[index]}</label>
                            </div>
                        )
                    })
                }
                <div className="char-status-icon">
                    <div className="char-status-icon-box">
                        <div>
                            <img src={`/images/attacks/${props.character}.gif`} alt={`${status}`} />
                        </div>
                    </div>
                    <div className="char-status-icon-text">
                        {props.skillName}
                        <div>
                            {props.skill}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}