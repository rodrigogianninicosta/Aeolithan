import axios from 'axios';

export default function Create (setWindow)  {
    axios({ 
        method: 'post',
        url: "/api/v1/customers",
        data: { 
            "name": localStorage.getItem('name'),
            "character": localStorage.getItem('char'),
            "health": JSON.parse(localStorage.getItem('status'))[0],
            "attack": JSON.parse(localStorage.getItem('status'))[1],
            "magic": JSON.parse(localStorage.getItem('status'))[2],
            "defense": JSON.parse(localStorage.getItem('status'))[3],
            "speed": JSON.parse(localStorage.getItem('status'))[4]
        }
    })
    .then(() => {
        setWindow('Personagens')
    })   
}