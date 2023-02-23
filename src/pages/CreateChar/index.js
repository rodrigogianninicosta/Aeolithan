import React , { useState } from 'react';
import './style.css';

import SelectChar from './SelectChar';
import WriteName from './WriteName';
import ConfirmChar from './ConfirmChar';
import Button from '../../components/Button';
import Subtitle from '../../components/Subtitle';

export default function CreateChar(props) {
    
    const [subWindow, setSubWindow] = useState('SelectChar');

    return(
        <div className="createchar">
            <Subtitle message={props.message} />
                {
                    subWindow === 'SelectChar' ? (
                        <SelectChar setMessage={props.setMessage} />
                    ) : (
                        subWindow === 'WriteName' ? (
                            <WriteName setMessage={props.setMessage} />
                        ) : (
                            <ConfirmChar setMessage={props.setMessage} />
                        )
                    )
                }
            <Button setWindow={props.setWindow} setSubWindow={setSubWindow} />
        </div>
    )
}