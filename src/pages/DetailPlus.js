import React, { useState } from 'react'

const DetailPlus = ({ onAddCart, openImage }) => {
    const [tab, setTab] = useState('detail'); //detail | review | Q&A
    const handleAddCart = onAddCart || (() => { })
    const handleOpenImage = openImage || (() => { })
    return (
        <div className='modal-cont'>
            <figure>
                <img src="https://i1.sndcdn.com/artworks-i8LYoNCq9hB8-0-t500x500.jpg" alt="Caroline"
                    className='modal-image'
                    onClick={handleOpenImage}
                    title='이미지를 클릭하면 확대해서 볼 수 있습니다.' />
            </figure>

            <div>
                <div className="modal-info">
                    <h2>Caroline</h2>
                    <p className="modal-artist">Aminé</p>
                    <div className="action">
                        <button
                            type='button'
                            className='btn btnPrimary'
                            onClick={handleAddCart}
                        >좋아요</button>
                    </div>
                </div>
                {/* tab */}
                <div className="tabs" role="tablist" aria-label="상품 정보 탭">
                    <button
                        type="button"
                        role="tab"
                        aria-selected={tab === 'detail'}
                        className={`tab ${tab === 'detail' ? 'active' : ''}`}
                        onClick={() => setTab('detail')}
                    >
                        설명
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={tab === 'tag'}
                        className={`tab ${tab === 'tag' ? 'active' : ''}`}
                        onClick={() => setTab('tag')}
                    >
                        관련 태그
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={tab === 'lyrics'}
                        className={`tab ${tab === 'lyrics' ? 'active' : ''}`}
                        onClick={() => setTab('lyrics')}
                    >
                        가사
                    </button>
                </div>
                {/* 탭 콘텐츠 */}
                <div className="tab-panel">
                    {tab === 'detail' && (
                        <p className='detailText'>Aminé의 2016년 데뷔 싱글로, 유쾌한 비트와 중독적인 훅으로 큰 인기를 얻음. 수록 앨범: 'Good For You</p>
                    )}
                    {tab === 'tag' && (
                        <p className='tagText'>#힙합 #데뷔 싱글</p>
                    )}
                    {tab === 'lyrics' && (
                        <div className="scroll-box">
                            <p>Listen, man (what's up?) <br />
                                I heard you done got you a dime piece, man (hell nah, man) <br />
                                One of them Beyoncé, Meagan Good types, man (nah, nah, nah) <br />
                                Is that true, man? I just wanna know (what? Probably not) <br />
                                I mean, shit to be honest with you, man, she's a <br />
                                Bad thang, fine as hell, thick as fuck <br />
                                Oh my god, that's my baby <br />
                                Caroline, you divine <br />
                                Mighty fine <br />
                                Shawty really blow the pipe (that's true) <br />
                                Like a pro (uh-huh, fuck you thought?) <br />
                                Holy shit, I'm really lit (it's lit) <br />
                                It's looking like it's 'bout time to fuck it up (word) <br />
                                Caroline, listen up, don't wanna hear <br />
                                About ya horoscope or what the future holds <br />
                                Shut up and shut up and <br />
                                Let's get gory (whoa), like a Tarantino movie (whoa) <br />
                                Don't wanna talk it out, can we fuck it out? <br />
                                'Cause we gon' be up all night, fuck a decaf <br />
                                You say I'm a tall thug, guess I'm a G-raffe <br />
                                If ya want safe-sex, baby, use the knee pads (whoa) <br />
                                Freaky with the sticky-icky <br />
                                Baby, give me kitty kitty <br />
                                Killa, westside nigga (aye, aye, yeah) <br />
                                Boy you like 98 degrees <br />
                                And I'm 300, nigga keep ya feet runnin' (ice, ice) <br />
                                I chief keef-keef when I eat these beats <br />
                                Bet a boy get scurred (get scurred) <br />
                                Don't run up in my lane, I don't want you in my lane <br />
                                You a lame, get swerved (ooh, ooh) <br />
                                'Cause great scenes might be great <br />
                                But I love your bloopers <br />
                                And perfect's for the urgent <br />
                                Baby, I want forever <br />
                                Caroline, don't you see that <br />
                                I want you to be my <br />
                                Bad thang? (Oh-whoa) fine as hell, thick as fuck <br />
                                Oh my god (whoa, whoa), that's my baby <br />
                                Caroline, you divine (whoa-oh) <br />
                                Mighty fine (ah) <br />
                                Shawty really blow the pipe (that's true) <br />
                                Like a pro (ah) <br />
                                Uh-huh, what? <br />
                                Holy shit, I'm really lit (it's lit) <br />
                                It's looking like it's 'bout time (sheesh) to fuck it up <br />
                                Caroline, listen up, don't wanna hear <br />
                                About ya horoscope or what the future holds <br />
                                Shut up and shut up and <br />
                                Let's get gory, like a Tarantino movie (whoa) <br />
                                Don't wanna talk it out, can we fuck it out? <br />
                                'Cause we gon' be up all night, fuck a decaf <br />
                                You say I'm a tall thug, guess I'm a G-raffe <br />
                                If ya want safe-sex, baby, use the knee pads <br />
                                Freaky with the sticky icky (whoa) <br />
                                Baby, give me kitty kitty <br />
                                Killa, westside nigga (aye, aye, yeah) <br />
                                Boy, you like 98 degrees <br />
                                And I'm 300, nigga keep ya feet runnin' (ice, ice) <br />
                                I chief keef-keef when I eat these beats <br />
                                Bet a boy get scurred (get scurred) <br />
                                Don't run up in my lane, I don't want you in my lane <br />
                                You a lame, get swerved (ooh, ooh) <br />
                                'Cause great scenes might be great <br />
                                But I love your bloopers (whoa) <br />
                                And perfect's for the urgent <br />
                                Baby, I want forever <br />
                                Caroline (Caroline), don't you see that <br />
                                I want you to be my <br />
                                Bad thang? Bad, bad, bad, bad thang <br />
                                Thang, thang, thang, thang <br />
                                Bad thang, thang, bad, bad <br />
                                Bad, b-b-bad, thang, thang <br />
                                Bad thang, thang, thang, bad <br />
                                B-bad, bad thang, thang, thang <br />
                                Bad thang, thang, b-bad <br />
                                B-bad, b-bad, b-bad</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DetailPlus