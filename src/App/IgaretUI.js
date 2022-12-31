import React from 'react';
import { IgaretContex } from '../IgaretContext';
import './igaret.css'

function IgaretUI (props) {
    const {
            count, 
            addCigarette,
        } = React.useContext(IgaretContex)

    return (
        <div className='container'>
            
            <div className='card'>

                <div className='counter'>
                    <h2 className='today'>HOY</h2>
                    { 
                        
                        count
                        && count[0] 
                        && (<span className='text'>{ count[count.length-1].length } - 10 current - target</span>)
                    }
                </div>

                <span className='total'> Total: {count.flat().length}</span>

                <div className='redcircle' onClick={addCigarette}>

                </div>

            </div>

        </div>
    )
}

export { IgaretUI}