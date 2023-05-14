import './style.css';
import CharStatus from './CharStatus';
import CharInformation from './CharInformation';
import CharDelete from './CharDelete';

export default function CharIcon(props) {
    return ([
        <CharDelete 
            key={`delete-${props.id}`}
            showDelete={props.showDelete}
            setShowDelete={props.setShowDelete}
            setColorBottomBar={props.setColorBottomBar}
            setSubColorBottomBar={props.setSubColorBottomBar}
            setLoadChar={props.setLoadChar}
            setFirstLoad={props.setFirstLoad}
            id={props.id}
        />,
        <CharInformation 
            key={`information-${props.id}`}
            showInformation={props.showInformation}
            id={props.id} position={props.position}
            character={props.character} race={props.race}
            name={props.name} level={props.level} 
            exp={props.exp}
        />,
        <div 
            style={{display: props.showHistory}}
            key={`history-${props.id}`}
        >
        </div>,
        <CharStatus 
            key={`status-${props.id}`}
            showStatus={props.showStatus}
            health={props.health} magic={props.magic}
            attack={props.attack} defense={props.defense}
            speed={props.speed} character={props.character}
            skillName={props.skillName}
            skill={props.skill}
        />
    ])
}