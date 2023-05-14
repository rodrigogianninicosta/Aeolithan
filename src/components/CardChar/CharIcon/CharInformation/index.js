import './style.css';

export default function CharInformation(props) {
    const information = ['id', 'posição', 'nome', 'classe',  'raça', 'level', 'exp'];
    const informationAnswer = [props.id, props.position, props.name, props.character,  
        props.race, props.level, props.exp + '/10'];
    return (
        <div className="char-information" style={{display: props.showInformation}}>
            {
                information.map((information, index) => {
                    return (
                        <div key={index}>
                            <label>{information}</label>
                            <label>{informationAnswer[index]}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}