import React from 'react'
import Card from './Card'

export default props => {
    const {min , max} = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <Card title="Sorteio dos Numeros" purple>
            <div>
                <span>Resultado: </span>
                <strong>{aleatorio}</strong>
            </div>
        </Card>
    )
}