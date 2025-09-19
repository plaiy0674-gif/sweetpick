import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";
import RecomCard from '../component/RecomCard';
import artist from '../assets/mov01.mp4'

//상단 스와이퍼
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Home = () => {
    const [recs, setRecs] = useState([]);

    useEffect(()=> {
        fetch(`${process.env.PUBLIC_URL}/db.json`)
        .then((r) => r.json()) //요청한 데이터를 json형태로 바꿔줘
        .then((data) => {
            //console.log("전체데이터:", data);
            const sweetpicks = data.sweetpicks || []; //data.sweet가 있으면 그 값 그대로 보여주고 없으면 빈 배열로 처리 -> sweet데이터가 항상 배열로 처리되도록 해주는 구문
            console.log("sweetpicks 배열", sweetpicks)

            //db.json에서 recommended라는 값이 true인 요소만 모아서 새 배열로 만든다음 onlyRecommended에 담아줘.
            const onlyRecommended = sweetpicks.filter((m) => m.recommended);
            //console.log("추천만:", onlyRecommended);

            const firstFour = onlyRecommended.slice(0, 4);
            //console.log("앞4개:", firstFour)

            setRecs(firstFour);
        })
        .catch((err) => {
            console.log("db.json 로드 실패:", err)
        })
    }, []); //[]은 처음 실행했을 때 한번만 실행

  return (
    <div className='contents'>
        
              <div className="artistVid">
                <video src={artist} autoPlay loop muted preload='auto' playsInline style={{width: "100%"}}></video>
              </div>
        <Carousel 
        responsive={responsive}
        swipeable={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        className="hero-slide"
        infinite
        >
            <div>
                <img src="https://i1.sndcdn.com/artworks-52C8c7jtpya0-0-t500x500.jpg" alt="Sugar On My Tongue" />
            </div>
            <div>
                <img src="https://image.bugsm.co.kr/album/images/500/378767/37876732.jpg" alt="Lose My Mind" />
            </div>
            <div>
                <img src="https://www.koreadaily.com/data/photo/2025/09/05/202509051627775531_68ba92ed83f9f.jpg" alt="N The Front" />
            </div>
            <div>
                <img src="https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/086/498/856/86498856_1752197213485_1_600x600.JPG" alt="Jump" />
            </div>
            <div>
                <img src="https://i1.sndcdn.com/artworks-000663428407-726wh1-t500x500.jpg" alt="Candy" />
            </div>
        </Carousel>

        <div className="intro-text">
            <h2>신규 앨범과 인기 앨범 리스트 <br /> <strong>취향에 맞는 플레이리스트까지</strong></h2>
            <p className="text">
                트렌디한 음악 대표곡들을 한곳에서 감상하세요. <br /> 플레이리스트를 탐험하며 아티스트별 명곡과 새로운 트렌드를 만나보세요.
            </p>
        </div>

    <div className="recommendedArea">
        <h2>Daily Tracks &gt; </h2>
        <div className="recomCard">
            {
                recs.map((item) => (
                    <RecomCard key={item.id} item={item} />
                ))
            }
        </div>
    </div>
    </div>
  )
}

export default Home