import React from 'react';
import { IgaretContex } from '../IgaretContext';
import './igaret.css'

function IgaretUI (props) {
    const {
            cigarettes, 
            addCigarette,
            restartAll
        } = React.useContext(IgaretContex)

    return (
        <div className='container'>
            
            <div className='card'>

                <div className='counter'>
                    <h2 className='today'>HOY</h2>
                    { 
                        
                        cigarettes
                        && cigarettes[0] 
                        && (<span className='text'>{ cigarettes[cigarettes.length-1].length } - 10 current - target</span>)
                    }
                </div>

                {
                    cigarettes && <span className='total'> 合計： {cigarettes.flat().length}</span>
                }

                <div className='redcircle' onClick={addCigarette}>

                </div>

                <div className='restart-movil' onClick={restartAll}>
                    RESTART
                </div>

            </div>


            <div className='restart' onClick={restartAll}>
                RESTART
            </div>
          

        </div>
    )
}

export { IgaretUI}