import React , { useEffect, useState } from 'react';
import './style.css';
import CardChar from '../../../components/CardChar';

export default function SelectChar(props) {
    const chars = [
        'guerreiro', 'piromante', 'cavaleiro',  'energizado', 
        'batedor', 'samurai', 'peregrino', 'mago-caos', 
        'contrabandista', 'necromante', 'encantada', 'espirito'
    ];
    const race = [
        'humano', 'humano', 'humano',  'humano', 
        'ogro', 'humano', 'besta', 'humano',
        'humano', 'humano', 'fada', '?'
    ];
    const status = [
        [30, 0, 30, 30, 10], [20, 40, 0, 20, 20], [30, 0, 10, 50, 10], [10, 50, 0, 10, 30],
        [50, 0, 20, 20, 10], [10, 0, 50, 10, 30], [20, 0, 30, 10, 40], [30, 50, 0, 10, 10],
        [30, 0, 30, 20, 20], [30, 30, 0, 20, 20], [20, 20, 0, 10, 50], [40, 30, 0, 10, 20]
    ]
    const skillsName = [
        <label>Habilidade: escudo dimencional</label>,
        <label>Habilidade: chama dracônica</label>,
        <label>Habilidade: impacto atordoante</label>,
        <label>Habilidade: tempestade de raios</label>,
        <label>Habilidade: devorar</label>,
        <label>Habilidade: lâmina sanguinária</label>,
        <label>Habilidade: chama do rei das bestas</label>,
        <label>Habilidade: transformação corrompida</label>,
        <label>Habilidade: barganha</label>,
        <label>Habilidade: invocação mórbida</label>,
        <label>Habilidade: elixir mágico</label>,
        <label>Habilidade: últimas palavras</label>
    ]
    const skills = [
        <label>
            Equipa um escudo dimencional que bloqueia os <strong>2</strong> próximos ataques recebidos.
            Tempo de recarga: <strong>4 turnos</strong>  
        </label>, 
        <label>
            Dispara uma poderosa chama ardente que causa <strong>2x</strong>  do seu dano mágico.
            Tempo de recarga: <strong>2 turnos</strong> 
        </label>,
        <label>
            Ataca com um grande machado causando o seu dano de ataque com uma chance de <strong>50%</strong> de chance de paralizar o inimigo.
            Tempo de recarga: <strong>1 turno</strong> 
        </label>,
        <label>
            Invoca uma tempestade de raios que causa <strong>3x</strong>  do seu dano mágico.
            Tempo de recarga: <strong>4 turnos</strong> 
        </label>,
        <label> 
            Devora o inimigo caso ele esteja com <strong>20%</strong> ou menos de pontos vida.
        </label>,
        <label> 
            Realiza um profundo corte que causa o seu dano de ataque com uma chance de <strong>20%</strong> de eliminar o alvo instantaneamente.
            Tempo de recarga: <strong>2 turnos</strong> 
        </label>,
        <label> 
            Absorva um pouco da chama sagrada que recupera <strong>20%</strong> dos seus pontos de vida.
            Tempo de recarga: <strong>2 turnos</strong> 
        </label>,
        <label> 
            Se transforma em uma besta corrompida que ganha <strong>10</strong> pontos em todos os status.
        </label>,
        <label> 
            Receba <strong>2x</strong> de experência ao eliminar um inimigo.
        </label>,
        <label> 
            Invoca um esqueleto aleatório como servo.
            Tempo de recarga: <strong>6 turnos</strong> 
        </label>,
        <label> 
            Consuma um elixir mágico que multiplica em <strong>2x</strong> seus pontos de magia.
            Tempo de recarga: <strong>2 turnos</strong> 
        </label>,
        <label> 
            Rouba <strong>10%</strong> dos pontos de vida do inimigo.
            Tempo de recarga: <strong>4 turnos</strong> 
        </label>
    ]

    const [rangeMin, setRangeMin] = useState(0);
    const [rangeMax, setRangeMax] = useState(4);
    const [load, setLoad] = useState(true);

    localStorage.setItem('buttonDirection', 0)
    localStorage.setItem('char', chars[rangeMin])
    localStorage.setItem('status', JSON.stringify(status[rangeMin]))

    useEffect(() => {
        props.setMessage('Selecione o seu personagem')
    }, [props]);

    const arrowLeft = () => {
        setLoad(false)
        if(rangeMin === 0) {
            setRangeMax(chars.length)
            setRangeMin(chars.length - 4)
        } else {
            setRangeMax(rangeMax - 4)
            setRangeMin(rangeMin - 4)
        }
        setTimeout(() => {
            setLoad(true)
        }, 1);
    }

    const arrowRight = () => {
        setLoad(false)
        if(rangeMax === chars.length) {
            setRangeMax(4)
            setRangeMin(0)
        } else {
            setRangeMax(rangeMax + 4)
            setRangeMin(rangeMin + 4)
        }
        setTimeout(() => {
            setLoad(true)
        }, 1);
    }

    return(
        <div className="createchar-container">
            <div className="arrow">
                <img className="icon" src={`/images/icons/arrow_left.svg`} alt={"before"}
                onClick={() => {arrowLeft()}}/>
            </div>
            {
                chars.slice(rangeMin, rangeMax).map((char, index) => {
                    return (
                        /*<div className="char-container master-div" key={index} >
                            <CharCard charTag={null} click={1} load={load} 
                                deleteIcon={null} position={rangeMin + 1}
                                character={char} name={"???"} 
                                id={"???"} level={"1"}
                                health={status[rangeMin][0]} attack={status[rangeMin][1]}
                                magic={status[rangeMin][2]} defense={status[rangeMin][3]}
                                speed={status[rangeMin][4]}
                            />
                        </div>*/
                        <div className="char-container" key={index}>
                            <CardChar 
                                load={load} click={1}
                                id={"?"} position={index + 1 + rangeMin}
                                character={char} charTag={char} race={race[index + rangeMin]}
                                name={"?"} level={"1"} exp={0}
                                health={status[index + rangeMin][0]} magic={status[index + rangeMin][1]}
                                attack={status[index + rangeMin][2]} defense={status[index + rangeMin][3]}
                                speed={status[index + rangeMin][4]}
                                skillsName={skillsName[index + rangeMin]}
                                skills={skills[index + rangeMin]}
                                shortVersion={false}
                            />
                        </div>
                    )
                })
            }
            <div className="arrow">
                <img className="icon" src={`/images/icons/arrow_right.svg`} alt={"after"} 
                onClick={() => {arrowRight()}}/>
            </div>
      
        </div>
    )
}