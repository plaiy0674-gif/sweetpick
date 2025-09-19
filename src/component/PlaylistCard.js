import React from 'react'
import { useNavigate } from 'react-router-dom'

const PlaylistCard = ({ item }) => {

    const navigate = useNavigate();
    return (
        <div className='playlist-card'
            onClick={() => { navigate(`/playlist/${item.id}`) }}>
                <figure>
                    <img src={item.image} alt={item.title} />
                </figure>
                <div className="playlist-text">
                    <h3>{item.title}</h3>
                    <p className="info">
                        <span className="tags">{item.tags.join("·")}</span>
                    </p>
                    <p className="recom">{item.recommended && <span className='badge'>🔥</span>}</p>
                </div>
            </div>
    )
}

export default PlaylistCard