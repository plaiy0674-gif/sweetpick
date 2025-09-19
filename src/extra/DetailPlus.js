import React, { useState } from 'react'

const DetailPlus = ({ onAddCart, openImage }) => {
    const [tab, setTab] = useState('detail'); //detail | review | Q&A
    const handleAddCart = onAddCart || (() => { })
    const handleOpenImage = openImage || (() => { })
    return (
        <div className='modal-cont'>
            <figure>
                <img src="https://i1.sndcdn.com/artworks-52C8c7jtpya0-0-t500x500.jpg" alt="Sugar On My Tongue"
                    className='modal-image'
                    onClick={handleOpenImage}
                    title='이미지를 클릭하면 확대해서 볼 수 있습니다.' />
            </figure>

            <div>
                <div className="modal-info">
                    <h2>Sugar On My Tongue</h2>
                    <p className="modal-artist">Tyler, The Creator</p>
                    <div className="action">
                        <button
                            type='button'
                            className='btn btnPrimary'
                            onClick={handleAddCart}
                        >좋아요</button>
                        <button type='button' className='btn' onClick={handleOpenImage}>이미지 확대</button>
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
                        상세
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={tab === 'review'}
                        className={`tab ${tab === 'review' ? 'active' : ''}`}
                        onClick={() => setTab('review')}
                    >
                        리뷰
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={tab === 'qna'}
                        className={`tab ${tab === 'qna' ? 'active' : ''}`}
                        onClick={() => setTab('qna')}
                    >
                        문의
                    </button>
                </div>
                {/* 탭 콘텐츠 */}
                <div className="tab-panel">
                    {tab === 'detail' && (
                        <ul className="bullets">
                            <li>가벼운 쿠셔닝으로 장시간 러닝에 적합</li>
                            <li>통기성 좋은 매쉬 소재</li>
                            <li>초보 러너에게 추천</li>
                        </ul>
                    )}
                    {tab === 'review' && (
                        <div>
                            <p>⭐️⭐️⭐️⭐️☆ 4.3/5 (128개)</p>
                            <p>“발볼 넓은데 편해요!”</p>
                        </div>
                    )}
                    {tab === 'qna' && (
                        <div>
                            <p>Q. 방수되나요?</p>
                            <p>A. 생활방수 정도는 가능합니다.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DetailPlus