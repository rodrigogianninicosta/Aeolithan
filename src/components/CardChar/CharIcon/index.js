import './style.css';

export default function CharIcon(props) {
    return (
        <div className="char-icon" style={{background: props.subColorBottomBar}}>
            <button>
                <img src={`/images/icons/magnifying-glass.svg`} alt={"history"} 
                onClick={() => {
                    props.setShowInformation('none')
                    props.setShowStatus('none')
                    if (props.showHistory === 'none') {
                        props.setShowHistory('flex')
                        props.setColorBottomBar('linear-gradient(-135deg, purple, darkgoldenrod)')
                        props.setSubColorBottomBar('linear-gradient(-135deg, purple, darkgoldenrod)')
                    } else {
                        props.setShowHistory('none')
                        props.setColorBottomBar('rgba(0,0, 0, 0.5)')
                        props.setSubColorBottomBar('rgba(0,0, 0, 0.25)')
                    }
                }}/>
            </button>
            <button>
                <img src={`/images/icons/scroll.svg`} alt={"information"} 
                onClick={() => {
                    props.setShowHistory('none')
                    props.setShowStatus('none')
                    if (props.showInformation === 'none') {
                        props.setShowInformation('flex') 
                        props.setColorBottomBar('linear-gradient(-135deg, purple, darkgoldenrod)')
                        props.setSubColorBottomBar('linear-gradient(-135deg, purple, darkgoldenrod)')
                    } else {
                        props.setShowInformation('none')
                        props.setColorBottomBar('rgba(0,0, 0, 0.5)')
                        props.setSubColorBottomBar('rgba(0,0, 0, 0.25)')
                    } 
                }}/>
            </button>
            <button>
                <img src={`/images/icons/mask.svg`} alt={"status"} 
                onClick={() => {
                    props.setShowHistory('none')
                    props.setShowInformation('none')
                    if (props.showStatus === 'none') {
                        props.setShowStatus('flex')
                        props.setColorBottomBar('linear-gradient(-135deg, purple, darkgoldenrod)')
                        props.setSubColorBottomBar('linear-gradient(-135deg, purple, darkgoldenrod)')
                    } else {
                        props.setShowStatus('none')
                        props.setColorBottomBar('rgba(0,0, 0, 0.5)')
                        props.setSubColorBottomBar('rgba(0,0, 0, 0.25)')
                    }
                }}/>
            </button>
        </div>
    )
}