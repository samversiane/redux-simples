import React from 'react'
import Card from './Card'

export default props => {
    const {min , max} = props
    return (
        <Card title="Soma dos Numeros" blue>
            <div>
                <span>Resultado: </span>
                <strong>{min + max}</strong>
            </div>
        </Card>
    )
}