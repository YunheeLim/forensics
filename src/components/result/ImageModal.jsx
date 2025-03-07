import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../assets/svgs/close.svg';
import { useEffect, useRef } from 'react';

const ImageModal = ({ picture, title, onClose }) => {
  const modalRef = useRef(null);

  const handleClickOutside = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Overlay>
      <IconWrap onClick={onClose}>
        <CloseIcon width={50} height={50} fill={'#ffffff'} />
      </IconWrap>
      <Wrapper ref={modalRef}>
        <Image src={picture} alt={title} />
      </Wrapper>
    </Overlay>
  );
};

export default ImageModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;

const Wrapper = styled.div`
  position: relative;
`;

const IconWrap = styled.div`
  position: absolute;
  top: 80px;
  right: 30px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
`;
