import React , { useState } from 'react';
import './style.css';
import './char-container.css';
import './char.css';
import './char2.css';
import './char3.css';
import Screensaver from './Screensaver';
import CharIcon from './CharIcon';
import CharStatus from './CharStatus';
import CharInformation from './CharInformation';
import CharDelete from './CharDelete';

export default function CharCard(props) {
    const [showDelete, setShowDelete] = useState('none');
    const [showHistory, setShowHistory] = useState('none');
    const [showInformation, setShowInformation] = useState('none');
    const [showStatus, setShowStatus] = useState('none');
    const [colorBottomBar, setColorBottomBar] = useState('rgba(0,0, 0, 0.5)');
    const [subColorBottomBar, setSubColorBottomBar] = useState('rgba(0,0, 0, 0.25)');

    const clickFunction = () => {
        if(props.click === 1) {
            props.setEnableButton('all')
            localStorage.setItem('char', props.character)
            localStorage.setItem('race', props.race)
            localStorage.setItem('health', props.health)
            localStorage.setItem('magic', props.magic)
            localStorage.setItem('attack', props.attack)
            localStorage.setItem('defense', props.defense)
            localStorage.setItem('speed', props.speed)
            localStorage.setItem('skillName', props.skillName.props.children)
            localStorage.setItem('skill', props.skill.props.children)
        }
    }

    return (
        props.load === true ? (
            <div className="char-card-background">
            {
                props.screensaver === false ? (
                    <button className={"char-card " + props.character} onClick={()=>{clickFunction()}}>
                        <div className="char-name">
                            <div className="background">
                                <img src={`/images/background/${props.character}.gif`} alt={props.char + " background"} />
                            </div>  
                            <div className="char">
                                <img src={`/images/characters/medieval/${props.character}.gif`} alt={props.char} />
                            </div>
                            {
                                props.shortVersion === false ? (
                                    <CharDelete 
                                        showDelete={showDelete}
                                        setShowDelete={setShowDelete}
                                        setColorBottomBar={setColorBottomBar}
                                        setSubColorBottomBar={setSubColorBottomBar}
                                        setLoadChar={props.setLoadChar}
                                        setFirstLoad={props.setFirstLoad}
                                        id={props.id}
                                    />
                                ) : (
                                    <div style={{display: 'none'}}></div>
                                )
                            }
                            <div style={{display: showHistory}}>

                            </div>
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
                            {
                                props.shortVersion === false ? (
                                    <CharStatus 
                                        showStatus={showStatus}
                                        health={props.health} magic={props.magic}
                                        attack={props.attack} defense={props.defense}
                                        speed={props.speed} character={props.character}
                                        skillName={props.skillName}
                                        skill={props.skill}
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
                                    delete={props.delete}
                                    showDelete={showDelete}
                                    setShowDelete={setShowDelete}
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
                ) : (
                    <Screensaver 
                        setScreensaver={props.setScreensaver}
                        character={props.character}
                    />
                )
            }
            </div>
        ) : (
            <div></div>
        )
    )
}