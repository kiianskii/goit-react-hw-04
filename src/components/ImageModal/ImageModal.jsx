import Modal from 'react-modal';
import s from './ImageModal.module.css'




const customStyles = {
   overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#1f1e1ea6'
    }, 
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    },
    
};

function ImageModal({ closeModal, modalIsOpen, imgURL }) {

  return (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
          contentLabel="Example Modal"
      >
         
          <div className={s.modal}>
              <img className={s.modal_img} src={imgURL} alt="" />
            <button onClick={closeModal}>Close</button>
          </div>
      </Modal>
  )
}

export default ImageModal