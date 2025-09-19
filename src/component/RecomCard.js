import React from 'react'

const RecomCard = ({ item }) => {
    return (
        <div className='card'>
            <img src={item.image} alt={item.title} />
            <div className="recom-text">
                <h3>
                    {item.title}</h3>
                <div className="info">
                    <span className="description">{item.description}</span>
                    <span className='tags'>{item.tags}</span>
                </div>
                <p className="text">{item.desc}</p>
            </div>
        </div>
    )
}

export default RecomCard