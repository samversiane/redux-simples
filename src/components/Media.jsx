import React from 'react'
import Card from './Card'

export default props => {
    const {min , max} = props
    return (
        <Card title="Media dos Numeros" green>
            <div>
                <span>Resultado: </span>
                <strong>{(max + min) / 2}</strong>
            </div>
        </Card>
    )
}