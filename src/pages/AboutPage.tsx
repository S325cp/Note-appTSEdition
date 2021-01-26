import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return(
        <>
            <h1>Inforamation page</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis tempore, dolores itaque neque quia repellendus repellat. Hic quas beatae voluptatibus? Iusto corporis adipisci iure laudantium error sapiente corrupti assumenda in!
            </p>
            <button className="btn" onClick={() => history.push('/')}> 
                Return to TodoPage
            </button>
        </>
    )
}