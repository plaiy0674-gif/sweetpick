import React, { use, useEffect, useState } from 'react'
import DetailPlus from './DetailPlus';
import Modal from './component/Modal';
import Toast from './component/Toast';
import './modal.css';

const Detail = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [toast, setToast] = useState(null);

    const openImage = () => setIsModalOpen(true);
    const closeImage = () => setIsModalOpen(false);

    const addCart = () => {
        setCartCount((prev) => prev + 1);
        setToast({message: '좋아요'})
    }

    //토스트 자동닫힘
    //토스트가 뜨면 1.8초 뒤에 사라지고, 중간에 변경/ 종료되면 타이머를 정리
    useEffect(() => {
        if (!toast) return; //toast가 처리할 게 없으면 종료
        const t = setTimeout(() => setToast(null), 1800);
        return () => clearTimeout(t); //clean코드로 timeout함수를 종료
    }, [toast]); //toast값이 바뀔 때마다 실행

    //ESC 모달 닫기
    useEffect(() => {
        const onKey = (e) => {
            if (e.key==="Escape") setIsModalOpen(false)
        }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey)
    }, [])

  return (
    <div className='modal-contents'>
        <header>
            <h1>| Aminé - Caroline</h1>
            <div className="cart">
                🔥 {cartCount}
            </div>
        </header>

        <main>
            <DetailPlus onAddCart = {addCart} openImage={openImage} />
        </main>

        {/* 모달 열림 상태일 때만 렌더링 */}
        {
            isModalOpen && (
                <Modal onClose={closeImage}>
                    <img src="https://i1.sndcdn.com/artworks-i8LYoNCq9hB8-0-t500x500.jpg" alt="Caroline" />
                </Modal>
            )
        }
        {toast && <Toast> {toast.message} </Toast>}
    </div>
  )
}

export default Detail