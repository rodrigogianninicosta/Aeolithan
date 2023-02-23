import './style.css';

import Create from '../../api/Create'

export default function Button(props) {
    const before = () => {
        if(localStorage.getItem('buttonDirection') === '0' || localStorage.getItem('buttonDirection') === '4') {
            props.setWindow('Start')
        } else if(localStorage.getItem('buttonDirection') === '1') {
            localStorage.setItem('buttonDirection', 0)
            props.setSubWindow('SelectChar')
        } else if(localStorage.getItem('buttonDirection') === '2') {
            localStorage.setItem('buttonDirection', 1)
            props.setSubWindow('WriteName')
        } 
    }

    const after = () => {
        if(localStorage.getItem('buttonDirection') === '0') {
            localStorage.setItem('buttonDirection', 1)
            props.setSubWindow('WriteName')
        } else if(localStorage.getItem('buttonDirection') === '1') {
            localStorage.setItem('buttonDirection', 2)
            localStorage.setItem('name', document.getElementById('name').value)
            props.setSubWindow('ConfirmChar')
        } else if(localStorage.getItem('buttonDirection') === '2') {
            Create(props.setWindow)
        } else{
            props.setWindow('Start')
        }
    }

    return(
        <div className="createchar-button">
            <div className="div" onClick={() => {before()}}>
                <label>Voltar</label>
            </div>
            <div className="div" onClick={() => {after()}}>
                <label>Selecionar</label>
            </div>
        </div>
    )
}