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