import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = funcCloseClick => {
  useEffect(() => {
    const hendlePressEsc = event => {
      if (event.code === 'Escape') {
        console.log('EscON');
        window.addEventListener('keydown', hendlePressEsc);
      }
    };

    return () => {
      window.removeEventListener('keydown', hendlePressEsc);
      console.log('EscOFF');
    };
  }, []);

  const hendleClickBackdrop = event => {
    if (event.currentTarget === event.target) {
      funcCloseClick();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={hendleClickBackdrop}>
      <div className="Modal">
        <img src={this.props.url} alt={this.props.text} />
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

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.hendlePressEsc);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.hendlePressEsc);
//   }

//   hendlePressEsc = event => {
//     if (event.code === 'Escape') {
//       this.props.funcCloseClick();
//     }
//   };

//   hendleClickBackdrop = event => {
//     if (event.currentTarget === event.target) {
//       this.props.funcCloseClick();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className="Overlay" onClick={this.hendleClickBackdrop}>
//         <div className="Modal">
//           <img src={this.props.url} alt={this.props.text} />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }