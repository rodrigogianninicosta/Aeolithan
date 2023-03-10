import React , { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

import Button from '../../components/Button';
import Subtitle from '../../components/Subtitle';
import CardChar from '../../components/CardChar';
import PutArrows from '../../components/PutArrows';
import CompleteCard from '../../components/CompleteCard';

export default function MyChar(props) {

    const [entities, setEntities] = useState([]);
    const [rangeMin, setRangeMin] = useState(0);
    const [rangeMax, setRangeMax] = useState(4);
    const [loadChar, setLoadChar] = useState(0);
    const [firstLoad, setFirstLoad] = useState(false);
    const [load, setLoad] = useState(true);

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
                setFirstLoad(true)
            })
        }
        load()
    }, [loadChar])

    const Core = () => (
        [entities.length !== 0 ? (
          entities.slice(rangeMin, rangeMax).map((expectation, index) => (
            <div className="char-container" key={index} onClick={()=>{
                localStorage.setItem('selectedChar', expectation.character)
                localStorage.setItem('selectedCharName', expectation.name)
            }}>
              <CardChar 
                load={load} click={0}
                id={expectation.id} position={index + 1 + rangeMin}
                character={expectation.character} charTag={expectation.name} 
                race={expectation.race}
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
          ))
        ) : null,
        entities.slice(rangeMin, rangeMax).length < 4 || entities.length === 0 ? (
            <CompleteCard
                rangeMin={rangeMin}
                rangeMax={rangeMax}
                entities={entities}
            /> 
        ) : null 
        ]
    );

    return (
        <div className="createchar">
            <Subtitle message={props.message} /> 
            <PutArrows 
                rangeMin={rangeMin}
                rangeMax={rangeMax}
                setRangeMin={setRangeMin}
                setRangeMax={setRangeMax}
                entities={entities}
                setLoad={setLoad}
                Core={Core}
                firstLoad={firstLoad}
            />
            <Button setWindow={props.setWindow} />
        </div>
    )
}