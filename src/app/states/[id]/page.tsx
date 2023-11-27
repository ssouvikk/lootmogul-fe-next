import React from 'react'

const StateDetails = ({ params }: { params: { id: number } }) => {
    return (
        <div>StateDetails of {params.id} </div>
    )
}

export default StateDetails