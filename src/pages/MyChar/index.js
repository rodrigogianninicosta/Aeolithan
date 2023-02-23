import React , { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

import Button from '../../components/Button';
import Subtitle from '../../components/Subtitle';
import CharCard from '../../components/CharCard';
import Delete from '../../api/Delete'

export default function MyChar(props) {

    const [entities, setEntities] = useState([]);
    const [rangeMin, setRangeMin] = useState(0);
    const [rangeMax, setRangeMax] = useState(1);
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
        if(rangeMin === 0 || entities.length === 1) {
            setRangeMax(entities.length)
            setRangeMin(entities.length - 1)
        }
        else {
            setRangeMax(rangeMax - 1)
            setRangeMin(rangeMin - 1)
        }
        setTimeout(() => {
            setLoad(true)
        }, 1);
    }

    const arrowRight = () => {
        setLoad(false)
        if(rangeMax === entities.length || entities.length === 1) {
            setRangeMax(1)
            setRangeMin(0)
        }
        else {
            setRangeMax(rangeMax + 1)
            setRangeMin(rangeMin + 1)
        }
        setTimeout(() => {
            setLoad(true)
        }, 1);
    }

    const deleteIcon = (id) => {
        return (
            <img src={`/images/delete.svg`} className="delete-icon" alt={"delete"} onClick={() => {Delete(setLoadChar, setFirstLoad, id)}} />
        )
    }

    return (
        <div className="createchar">
            <Subtitle message={props.message} />
            {
                firstLoad === true ? (
                    <div className="createchar-container mychar">
                        <div className="arrow">
                            <img className="icon" src={`/images/arrow_left.svg`} alt={"before"}
                            onClick={() => {arrowLeft()}} />
                        </div>
                        {
                            entities.slice(rangeMin, rangeMax).map((expectation, index) => {
                                return (
                                    <div className="char-container master-div" key={index} 
                                    onClick={()=>{
                                        localStorage.setItem('selectedChar', expectation.character)
                                        localStorage.setItem('selectedCharName', expectation.name)
                                    }}>
                                        <CharCard charTag={null} click={0} load={load} 
                                            deleteIcon={deleteIcon(expectation.id)} position={index + rangeMin}
                                            character={expectation.character} name={expectation.name} 
                                            id={expectation.id} level={expectation.level} 
                                            health={expectation.health} attack={expectation.attack}
                                            magic={expectation.magic} defense={expectation.defense}
                                            speed={expectation.speed}
                                        />
                                    </div>
                                )
                            })
                        }
                        <div className="arrow">
                            <img className="icon" src={`/images/arrow_right.svg`} alt={"after"}
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