import Delete from '../../../api/Delete'
import './style.css';

export default function CharDelete(props) {
    return (
        <div className="char-information" style={{display: props.showDelete}}>
            <div className="char-delete">
                <div onClick={() => {
                    Delete(props.setLoadChar, props.setFirstLoad, props.id)
                }}>
                    <label>Confirmar</label>
                </div>
                <div onClick={() => {
                    props.setShowDelete('none')
                    props.setColorBottomBar('rgba(0,0, 0, 0.5)')
                    props.setSubColorBottomBar('rgba(0,0, 0, 0.25)')
                }}>
                    <label>Cancelar</label>
                </div>
            </div>
        
        </div>
    )
}