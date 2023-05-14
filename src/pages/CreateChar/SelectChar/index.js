import React , { useEffect, useState } from 'react';
import './style.css';
import CardChar from '../../../components/CardChar';
import PutArrows from '../../../components/PutArrows';

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
    const skillName = [
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
    const skill = [
        <label>
            Equipa um escudo dimencional que bloqueia os 2 próximos ataques recebidos.
            Tempo de recarga: 4 turnos  
        </label>, 
        <label>
            Dispara uma poderosa chama ardente que causa 2x  do seu dano mágico.
            Tempo de recarga: 2 turnos 
        </label>,
        <label>
            Ataca com um grande machado causando o seu dano de ataque com uma chance de 50% de chance de paralizar o inimigo.
            Tempo de recarga: 1 turno
        </label>,
        <label>
            Invoca uma tempestade de raios que causa 3x  do seu dano mágico.
            Tempo de recarga: 4 turnos
        </label>,
        <label> 
            Devora o inimigo caso ele esteja com 20% ou menos de pontos vida.
        </label>,
        <label> 
            Realiza um profundo corte que causa o seu dano de ataque com uma chance de 20% de eliminar o alvo instantaneamente.
            Tempo de recarga: 2 turnos 
        </label>,
        <label> 
            Absorva um pouco da chama sagrada que recupera 20% dos seus pontos de vida.
            Tempo de recarga: 2 turnos 
        </label>,
        <label> 
            Se transforma em uma besta corrompida que ganha 10 pontos em todos os status.
        </label>,
        <label> 
            Receba 2x de experência ao eliminar um inimigo.
        </label>,
        <label> 
            Invoca um esqueleto aleatório como servo.
            Tempo de recarga: 6 turnos
        </label>,
        <label> 
            Consuma um elixir mágico que multiplica em 2x seus pontos de magia.
            Tempo de recarga: 2 turnos
        </label>,
        <label> 
            Rouba 10% dos pontos de vida do inimigo.
            Tempo de recarga: 4 turnos
        </label>
    ]

    const [screensaver, setScreensaver] = useState(true);
    const [rangeMin, setRangeMin] = useState(0);
    const [rangeMax, setRangeMax] = useState(4);
    const [load, setLoad] = useState(true);

    localStorage.setItem('buttonDirection', 0)

    useEffect(() => {
        props.setMessage('Selecione o seu personagem')
    }, [props]);

    const Core = () => (
        chars.slice(rangeMin, rangeMax).map((char, index) => (
            <div className="char-container hover-effect active-effect" key={index}>
                <CardChar 
                    setEnableButton={props.setEnableButton} 
                    load={load} click={1}
                    id={"?"} position={index + 1 + rangeMin}
                    character={char} charTag={char} race={race[index + rangeMin]}
                    name={"?"} level={"1"} exp={0}
                    health={status[index + rangeMin][0]} magic={status[index + rangeMin][1]}
                    attack={status[index + rangeMin][2]} defense={status[index + rangeMin][3]}
                    speed={status[index + rangeMin][4]}
                    skillName={skillName[index + rangeMin]}
                    skill={skill[index + rangeMin]}
                    shortVersion={false} 
                    screensaver={screensaver} setScreensaver={setScreensaver}
                />
            </div>
        ))
    )

    return(
        <PutArrows 
            rangeMin={rangeMin}
            rangeMax={rangeMax}
            setRangeMin={setRangeMin}
            setRangeMax={setRangeMax}
            entities={chars}
            setLoad={setLoad}
            Core={Core}
            firstLoad={true}
            setScreensaver={setScreensaver}
        />
    )
}