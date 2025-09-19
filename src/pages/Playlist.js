import React, { useEffect, useState } from 'react'
import PlaylistCard from '../component/PlaylistCard';

const Playlist = () => {
  const [all, setAll] = useState([]); //전체 데이터상태
  const [showAll, setShowAll] = useState(false); //더보기 버튼 클릭 상태에 따라 true/false

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/db.json`)
      .then(r => r.json()) //json형식으로 데이터 변환
      .then(data => setAll(data.sweetpicks || [])) //json에서 sweetpicks라는 객체정보를 배열만 꺼내서 상태에 저장
      .catch(console.error)
  }, []); //페이지가 처음 로드될 때 한번만 실행

  const visible = showAll ? all : all.slice(0, 10);
  const restCount = Math.max(all.length - 10, 0); //전체 데이터개수 - 10을 뺀 나머지를 보여주고, 나머지가 음수일 경우 0으로 처리

  return (
    <div className="container">
      <h2 className='listTitle'><span>SolSweet</span>만의 Pick PlayList</h2>
      <small className='listSmall'>총 {all.length}개 항목 중 처음 10개를 보여줍니다.</small>
      <div className="playlist-list">
        {visible.map((item) => (
          <PlaylistCard key={item.id} item={item} />
        ))}
      </div>

      {
        !showAll && restCount > 0 && (
          <div className='btn-area'>
            <button onClick={() => setShowAll(true)}> 더보기 (+{restCount}) </button>
          </div>
        )
      }
    </div>
  )
}

export default Playlist