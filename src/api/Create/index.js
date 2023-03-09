import axios from 'axios';

export default function Create (setWindow)  {
    axios({ 
        method: 'post',
        url: "/api/v1/customers",
        data: { 
            "name": localStorage.getItem('name'),
            "character": localStorage.getItem('char'),
            "race": localStorage.getItem('race'),
            "health": localStorage.getItem('health'),
            "magic": localStorage.getItem('magic'),
            "attack": localStorage.getItem('attack'),
            "defense": localStorage.getItem('defense'),
            "speed": localStorage.getItem('speed'),
            "skillName": localStorage.getItem('skillName'),
            "skill": localStorage.getItem('skill')
        }
    })
    .then(() => {
        setWindow('Personagens')
    })   
}