import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    padding: '0',
    border: 'none',
    maxWidth: '90vw',
    maxHeight: '90vh',
    overflow: 'auto',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
};

Modal.setAppElement('#root');

function ImageModal({ isOpen, onRequestClose, image }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      {image ? (
        <div style={{ textAlign: 'center' }}>
          <img src={image.urls.regular} alt={image.alt_description || "Image"} style={{ maxWidth: '100%', maxHeight: '80vh' }} />
        </div>
      ) : (
        <div>No image selected</div>
      )}
    </Modal>
  );
}

export default ImageModal;



