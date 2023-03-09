import './style.css';
import './selectedChar.css';
import CharCard from '../../components/CharCard';
import CardChar from '../../components/CardChar';

export default function StartMenu(props) {
    return(
        <div className="start-menu">
            <div className="start">
                <div className="div" onClick={() => {props.setWindow("Aventura")}}>
                    <label>Iniciar Aventura</label>
                </div>
                <div className="div" onClick={() => {props.setWindow("Criar")}}>
                    <label>Criar Personagem</label>
                </div>
                <div className="div" onClick={() => {props.setWindow("Personagens")}}>
                    <label>Meus Personagens</label>
                </div>
                <div className="div" onClick={() => {props.setWindow("Mundo")}}>
                    <label>Alterar Mundo</label>
                </div>
            </div>
            {
                localStorage.getItem('selectedChar') !== null ? (
                    <div className="selected-char">
                        <div className="selected-char-name">
                            <label>Personagem selecionado</label>
                        </div> 
                        <div className="char-container">
                            <CardChar 
                                character={localStorage.getItem('selectedChar')} 
                                charTag={localStorage.getItem('selectedCharName')}
                                load={true} shortVersion={true} screensaver={false}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="selected-char"> </div>
                )
            }
        </div>
    )
}


/*
      <div className="char-container creation">
                <CardChar 
                    character={localStorage.getItem('char')} 
                    charTag={localStorage.getItem('name')}
                    load={true} shortVersion={true} screensaver={false}
                />
            </div>
            
            
            
            
            
            <CharCard character={localStorage.getItem('selectedChar')} 
                            charTag={localStorage.getItem('selectedCharName')} 
                            click={0} load={true} description={false} />
                            
                            
                            */