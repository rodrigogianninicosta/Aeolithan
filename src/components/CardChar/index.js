import React , { useState } from 'react';
import './style.css';
import './char-container.css';
import './char.css';
import './char2.css';
import './char3.css';
import CharIcon from './CharIcon';
import CharStatus from './CharStatus';
import CharInformation from './CharInformation';

export default function CharCard(props) {
    const [showInformation, setShowInformation] = useState('none');
    const [showHistory, setShowHistory] = useState('none');
    const [showStatus, setShowStatus] = useState('none');
    const [colorBottomBar, setColorBottomBar] = useState('rgba(0,0, 0, 0.5)');
    const [subColorBottomBar, setSubColorBottomBar] = useState('rgba(0,0, 0, 0.25)');

    const clickFunction = () => {
        if(props.click === 1) {
            localStorage.setItem('char', props.character)
        }
    }

    return (
        props.load === true ? (
            <div className="char-card-background">
                <button className={"char-card " + props.character} onClick={()=>{clickFunction()}}>
                    <div className="char-name">
                        <div className="background">
                            <img src={`/images/background/${props.character}.gif`} alt={props.char + " background"} />
                        </div>  
                        <div className="char">
                            <img src={`/images/characters/medieval/${props.character}.gif`} alt={props.char} />
                        </div>
                        <div style={{display: showHistory}}>

                        </div>
                        {
                            props.shortVersion === false ? (
                                <CharStatus 
                                    showStatus={showStatus}
                                    health={props.health} magic={props.magic}
                                    attack={props.attack} defense={props.defense}
                                    speed={props.speed} character={props.character}
                                    skillsName={props.skillsName}
                                    skills={props.skills}
                                />
                            ) : (
                                <div style={{display: 'none'}}></div>
                            )
                        }
                        {
                            props.shortVersion === false ? (
                                <CharInformation 
                                    showInformation={showInformation}
                                    id={props.id} position={props.position}
                                    character={props.character} race={props.race}
                                    name={props.name} level={props.level} 
                                    exp={props.exp}
                                />
                            ) : (
                                <div style={{display: 'none'}}></div>
                            )
                        }
                    </div> 
                    {
                        props.shortVersion === false ? (
                            <CharIcon 
                                showInformation={showInformation}
                                setShowInformation={setShowInformation}
                                showHistory={showHistory}
                                setShowHistory={setShowHistory}
                                showStatus={showStatus}
                                setShowStatus={setShowStatus}
                                colorBottomBar={colorBottomBar}
                                setColorBottomBar={setColorBottomBar}
                                subColorBottomBar={subColorBottomBar}
                                setSubColorBottomBar={setSubColorBottomBar}
                            />
                        ) : (
                            <div style={{display: 'none'}}></div>
                        )
                    } 
                    <div className="char-tag" 
                        style={{
                            background: colorBottomBar,
                            height: props.shortVersion === false ? (
                                '12%'
                            ) : (
                                '19%'
                            )
                        }}>
                        <label>
                            {props.charTag}
                        </label>
                    </div> 
                </button>
            </div>
        ) : (
            <div></div>
        )
    )
}