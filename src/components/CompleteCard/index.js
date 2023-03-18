import './style.css';

export default function CompleteCard(props) {
    const divs = []
    let i = props.entities.slice(props.rangeMin, props.rangeMax).length
    while (i < 4) {
        divs.push(
            <div className="char-container" key={i}>
                <div className={"screensaver screen-icon-interrogation"}>
                    <img src={`/images/charIcons/interrogation.png`} alt={`icon`} />
                </div>
            </div>)
        ++i
    }
    return divs
}