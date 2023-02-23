import React , { useState } from 'react';
import useSound from 'use-sound'
import song from '../../assets/musics/muc.wav'
import './style.css';
import './music.css';

import Title from './Title';
import StartMenu from '../StartMenu'
import CreateChar from '../CreateChar';
import MyChar from '../MyChar';

function Home() {
    const [firstTime, setFirstTime] = useState(true);
    const [window, setWindow] = useState('Start');
    const [message, setMessage] = useState('');

    const [disp, setDisp] = useState('none')
    const [disp2, setDisp2] = useState('flex')
    const [music, setMusic] = useState()
    const [play, { stop }] = useSound(
        song,
        { loop: true, volume: 0.5}
    )

    const playPause = () => {
        if(music === undefined || music === 'medieval') {
            play();
            setMusic('off');
            setDisp('flex')
            setDisp2('none')
        } else {
            setMusic('medieval');
            stop();
            setDisp2('flex')
            setDisp('none')
        }
    }

    const beforeMainscreeen = 
    <div className="mainscreen">
        <Title />
        <div className="mainscreen-start" onClick={() => {
            setFirstTime(false)
            playPause()}}>
            <div>
                <label>Clique para iniciar</label>
            </div>  
        </div>
    </div>

    const musicIcon = 
    <div className="music">
        <div className="div" onClick={playPause}>
            <img className="icon" src={"images/icons/music_note.svg"} 
            alt="music on" style={{display: disp}} />
            <img className="icon" src={"images/icons/music_off.svg"} 
            alt="music off" style={{display: disp2}} />    
        </div>
    </div>
    


    return(
        firstTime === true ? (
            beforeMainscreeen
        ) : (
            <div className="mainscreen">
                <Title />
                    {
                        window === 'Start' ? (
                            <StartMenu setWindow={setWindow} />
                        ) : (
                            window === 'Aventura' ? (
                                <div></div>
                            ) : (
                                window === 'Criar' ? (
                                    <CreateChar setWindow={setWindow} 
                                    message={message} setMessage={setMessage}
                                    />
                                ) : (
                                    window === 'Personagens' ? (
                                        <MyChar setWindow={setWindow} 
                                        message={message} setMessage={setMessage}
                                        />
                                    ) : (
                                        <div>{localStorage.clear()}
                                            {console.log(localStorage.getItem('selectedChar'))}</div>
                                    )
                                )
                            )
                        )
                    }
                {musicIcon}
            </div>
        )
    )
}

export default Home;