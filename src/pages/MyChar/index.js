import React , { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

import Button from '../../components/Button';
import Subtitle from '../../components/Subtitle';
import CardChar from '../../components/CardChar';

export default function MyChar(props) {

    const [entities, setEntities] = useState([]);
    const [rangeMin, setRangeMin] = useState(0);
    const [rangeMax, setRangeMax] = useState(4);
    const [firstLoad, setFirstLoad] = useState(false);
    const [load, setLoad] = useState(true);
    const [loadChar, setLoadChar] = useState(0);

    localStorage.setItem('text', 'Meus personagens')
    localStorage.setItem('buttonDirection', 4)

    useEffect(() => {
        props.setMessage('Meus personagens')
      }, [props]);

    useEffect(()=>{
        function load ()  {
            axios({ 
                method: 'get',
                url: "/api/v1/customers",
            })
            .then(({data}) => {
                setEntities(data)
                if(data.length > 0) {
                    setFirstLoad(true)
                }
            })
        }
        load()
      }, [loadChar])

    const arrowLeft = () => {
        setLoad(false)
        if (rangeMin <= 0) {
            setRangeMax(4);
            setRangeMin(0);
        } else {
        setRangeMax(rangeMax - 4);
        setRangeMin(rangeMin - 4);
        }
        setTimeout(() => {
            setLoad(true)
        }, 1);
    }

    const arrowRight = () => {
        setLoad(false)
        if (rangeMax >= entities.length) {
            setRangeMax(4);
            setRangeMin(0);
        } else {
        setRangeMax(rangeMax + 4);
        setRangeMin(rangeMin + 4);
        }
        setTimeout(() => {
            setLoad(true)
        }, 1);
    }

    const completeCard = () => {
        const divs = [];
        let i = entities.slice(rangeMin, rangeMax).length;
        while ( i < 4) {
            divs.push(
                <div className="char-container" key={i}>
                    <div className={"screensaver screen-icon-interrogation"} >
                        <img src={`/images/charIcons/interrogation.png`} alt={`icon`} />
                    </div>
                </div>)
            i++;
        }
        return (
            divs
        );
    }

    return (
        <div className="createchar">
            <Subtitle message={props.message} />
            {
                firstLoad === true ? (
                    <div className="createchar-container">
                        <div className="arrow">
                            <img className="icon" src={`/images/icons/arrow_left.svg`} alt={"before"}
                            onClick={() => {arrowLeft()}} />
                        </div>
                        {
                            entities.slice(rangeMin, rangeMax).map((expectation, index) => {
                                return (
                                    <div className="char-container" key={index} onClick={()=>{
                                        localStorage.setItem('selectedChar', expectation.character)
                                        localStorage.setItem('selectedCharName', expectation.name)
                                    }}>
                                        <CardChar 
                                            load={load} click={0}
                                            id={expectation.id} position={index + 1 + rangeMin}
                                            character={expectation.character} charTag={expectation.name} race={expectation.race}
                                            name={expectation.name} level={expectation.level} exp={expectation.exp}
                                            health={expectation.health} magic={expectation.magic}
                                            attack={expectation.attack} defense={expectation.defense}
                                            speed={expectation.speed}
                                            skillName={expectation.skillName}
                                            skill={expectation.skill}
                                            shortVersion={false} 
                                            screensaver={false}
                                            delete={true}
                                            setLoadChar={setLoadChar}
                                            setFirstLoad={setFirstLoad}
                                        />
                                    </div>
                                )
                            })
                        }
                        {
                            entities.slice(rangeMin, rangeMax).length < 4 ? (
                                completeCard()
                                
                            ) : (
                                <div></div>
                            )
                        }
                        <div className="arrow">
                            <img className="icon" src={`/images/icons/arrow_right.svg`} alt={"after"}
                            onClick={() => {arrowRight()}} />
                        </div>
                    </div>
                ) : (
                    <div className="createchar-container mychar"></div>
                )
            }
            {
                firstLoad === true || entities.length === 0 ? (
                    <Button setWindow={props.setWindow} />
                ) : (
                    <div></div>
                )
            }
            
        </div>
    )
}



/*      <CharCard charTag={null} click={0} load={load} 
                                            deleteIcon={deleteIcon(expectation.id)} position={index + rangeMin}
                                            character={expectation.character} name={expectation.name} 
                                            id={expectation.id} level={expectation.level} 
                                            health={expectation.health} attack={expectation.attack}
                                            magic={expectation.magic} defense={expectation.defense}
                                            speed={expectation.speed}
                                        />*/