import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ url, text, funcCloseClick }) => {
  useEffect(() => {
    const hendlePressEsc = event => {
      if (event.code === 'Escape') {
        funcCloseClick();
      }
    };

    window.addEventListener('keydown', hendlePressEsc);
    return () => {
      window.removeEventListener('keydown', hendlePressEsc);
    };
    // Следующая строка нужна!!! что б вырубить ESLINT!!!!
    // eslint-disable-next-line
  }, []);

  const hendleClickBackdrop = event => {
    if (event.currentTarget === event.target) {
      funcCloseClick();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={hendleClickBackdrop}>
      <div className="Modal">
        <img src={url} alt={text} />
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  funcCloseClick: PropTypes.func.isRequired,
};
