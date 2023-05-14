import { useEffect } from 'react';
import './style.css';
import CardChar from '../../../components/CardChar';

export default function ConfirmChar(props) {
    useEffect(() => {
        props.setMessage('Confirme a sua escolha')
    }, [props]);
    return(
        <div className="char-container hover-effect creation">
            <CardChar 
                character={localStorage.getItem('char')} 
                charTag={localStorage.getItem('name')}
                load={true} shortVersion={true} screensaver={false}
            />
        </div>
    )
}