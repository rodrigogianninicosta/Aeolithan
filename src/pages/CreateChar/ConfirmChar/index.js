import { useEffect } from 'react';
import './style.css';
import CardChar from '../../../components/CardChar';

export default function ConfirmChar(props) {
    useEffect(() => {
        props.setMessage('Confirme a sua escolha')
    }, [props]);
    return(
        <div className="createchar-container" style={{flexDirection: "column"}}>
            <div className="char-container creation">
                <CardChar 
                    character={localStorage.getItem('char')} 
                    charTag={localStorage.getItem('name')}
                    load={true} shortVersion={true} screensaver={false}
                />
            </div>
        </div>
    )
}

/*

            <div className="char-container creation">
                <CharCard character={localStorage.getItem('char')} 
                charTag={localStorage.getItem('name')} click={0} load={true} />
            </div>


                   <CardChar 
                    load={load} 
                    id={"?"} position={index + 1 + rangeMin}
                    character={char} race={race[index + rangeMin]}
                    name={"?"} level={"1"} exp={0}
                    health={status[index + rangeMin][0]} magic={status[index + rangeMin][1]}
                    attack={status[index + rangeMin][2]} defense={status[index + rangeMin][3]}
                    speed={status[index + rangeMin][4]}
                    skillsName={skillsName[index + rangeMin]}
                    skills={skills[index + rangeMin]}
                />

*/