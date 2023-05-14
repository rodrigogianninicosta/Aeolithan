import './style.css';
import CompleteCard from '../CompleteCard';

export default function PutArrows(props) {
    const arrowLeft = () => {
        props.setLoad(false)
        if(props.setScreensaver) {
            props.setScreensaver(true)
        }
        if (props.rangeMin <= 0) {
            props.setRangeMax(4);
            props.setRangeMin(0);
        } else {
        props.setRangeMax(props.rangeMax - 4);
        props.setRangeMin(props.rangeMin - 4);
        }
        setTimeout(() => {
            props.setLoad(true)
        }, 1);
    }

    const arrowRight = () => {
        props.setLoad(false)
        if(props.setScreensaver) {
            props.setScreensaver(true)
        }
        if (props.rangeMax >= props.entities.length) {
            props.setRangeMax(4);
            props.setRangeMin(0);
        } else {
            props.setRangeMax(props.rangeMax + 4);
            props.setRangeMin(props.rangeMin + 4);
        }
        setTimeout(() => {
            props.setLoad(true)
        }, 1);
    }

    return(
            props.firstLoad === true ? (
                <div className="createchar-container">
                    <div className="arrow">
                        <img className="icon" src={`/images/icons/arrow_left.svg`} alt={"before"}
                        onClick={() => {arrowLeft()}} />
                    </div>
                    {
                        props.Core()
                    }
                    <div className="arrow">
                        <img className="icon" src={`/images/icons/arrow_right.svg`} alt={"after"}
                        onClick={() => {arrowRight()}} />
                    </div>
                </div>
            ) : (
                <div className="createchar-container"> 
                {
                    <CompleteCard
                        rangeMin={0}
                        rangeMax={0}
                        entities={props.entities}
                    />                 
                } 
                </div>
            )
    )
}