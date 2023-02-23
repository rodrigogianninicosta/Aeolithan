

export default function CharCard(props) {

    const clickFunction = () => {
        if(props.click === 1) {
            localStorage.setItem('char', props.character)
        }
    }

    return(
        props.load === true ? (
            <button className={"char-card " + props.character}  onClick={()=>{clickFunction()}}>
                <div className="char-name">
                    <img src={`/images/characters/medieval/${props.character}.gif`} alt={props.char} />
                </div>    
                {
                    props.charTag !== null ? (
                        <div className="char-tag">
                            <label>
                                {props.charTag}
                            </label>
                        </div>
                    ) : (
                        <div className="char-description">
                            <div className="first-description" >
                                <div className="character-description">
                                    <label>{props.name}</label>
                                </div>
                                <div className="character-description">
                                    <label>Personagem: {props.character}</label>
                                </div>
                                <div className="character-description">
                                    <label>posição: {props.position }º</label>
                                </div>  
                                <div className="character-description">
                                    <label>id: {props.id}</label>
                                </div> 
                            </div>
                            <div className="second-description" >
                                {
                                    props.deleteIcon !== null ? (
                                        props.deleteIcon
                                    ) : (
                                        <div></div>
                                    )
                                }
                                <div className="second-description-container">
                                    <div className="character-description">
                                        <label>lv:</label>
                                        <label>{props.level}</label>
                                    </div> 
                                    <div className="character-description">
                                        <label>exp:</label>
                                        <label>0/10</label>
                                    </div> 
                                    <div className="character-description">
                                        <img src={"/images/life.svg"} alt={"health"} />
                                        <label>{props.health}</label>
                                    </div> 
                                    <div className="character-description new">
                                        <img src={"/images/sword.svg"} alt={"attack"} />
                                        <label>{props.attack}</label>
                                    </div> 
                                    <div className="character-description">
                                        <img src={"/images/magic.svg"} alt={"magic"} />
                                        <label>{props.magic}</label>
                                    </div> 
                                    <div className="character-description">
                                        <img src={"/images/shield.svg"} alt={"defense"} />
                                        <label>{props.defense}</label>
                                    </div> 
                                    <div className="character-description new">
                                        <img src={"/images/boot.svg"} alt={"speed"} />
                                        <label>{props.speed}</label>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    )
                }
        </button>
        ) : (
            <div className="char-card"></div>
        )
    )
}