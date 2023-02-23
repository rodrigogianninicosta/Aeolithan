import axios from 'axios';

export default function Delete (setLoadChar, setFirstLoad, id)  {
    setFirstLoad(false)
    axios({ 
        method: 'delete',
        url: `/api/v1/customers/${id}`,
    })
    .then(() => {
        setLoadChar(Math.random())
        setFirstLoad(true)
    })   
}