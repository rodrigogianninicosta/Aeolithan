import React , { useState } from 'react';
import './style.css';
import './char-container.css';
import Screensaver from './Screensaver';
import CharBarIcon from './CharIcon/CharBarIcon';
import CharIcon from './CharIcon';
import CharBackground from './CharBackground'
import CharTag from './CharTag'

export default function CharCard(props) {
    const [showDelete, setShowDelete] = useState('none');
    const [showHistory, setShowHistory] = useState('none');
    const [showInformation, setShowInformation] = useState('none');
    const [showStatus, setShowStatus] = useState('none');
    const [colorBottomBar, setColorBottomBar] = useState('rgba(0,0, 0, 0.2)');
    const [subColorBottomBar, setSubColorBottomBar] = useState('rgba(0,0, 0, 0.2)');

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
        props.load && (
            <div className="char-card-background">
            {
                !props.screensaver ? (
                    <button className={"char-card " + props.character} onClick={()=>{clickFunction()}}>
                        <CharBackground 
                                character={props.character}
                            />
                        <div className="char-name">
                            
                            {
                                !props.shortVersion && (
                                    <CharIcon 
                                        showDelete={showDelete}
                                        setShowDelete={setShowDelete}
                                        setColorBottomBar={setColorBottomBar}
                                        setSubColorBottomBar={setSubColorBottomBar}
                                        setLoadChar={props.setLoadChar}
                                        setFirstLoad={props.setFirstLoad}
                                        id={props.id}

                                        showInformation={showInformation}
                                        position={props.position}
                                        character={props.character} race={props.race}
                                        name={props.name} level={props.level} 
                                        exp={props.exp}

                                        showStatus={showStatus}
                                        health={props.health} magic={props.magic}
                                        attack={props.attack} defense={props.defense}
                                        speed={props.speed} 
                                        skillName={props.skillName}
                                        skill={props.skill}
                                        showHistory={showHistory}
                                    />
                                )
                            }
                        </div> 
                        {
                            !props.shortVersion && (
                                <CharBarIcon 
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
                            )
                        } 
                        <CharTag 
                            colorBottomBar={colorBottomBar}
                            shortVersion={props.shortVersion}
                            charTag={props.charTag}
                        /> 
                    </button>
                ) : (
                    <Screensaver 
                        setScreensaver={props.setScreensaver}
                        character={props.character}
                    />
                )
            }
            </div>
        )
    )
}