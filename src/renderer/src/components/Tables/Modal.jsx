import { IoCloseOutline } from 'react-icons/io5'
import { useSelector, useDispatch } from 'react-redux'

// eslint-disable-next-line react/prop-types, no-unused-vars
const ModalContent = ({ isOpen, setOpen, children, header }) => {
  const dispatch = useDispatch()
  const closeModal = () => {
    setOpen(false)
    // dispatch(setOpen(false))
  }
  return (
    <div
      style={{
        // backgroundColor: '#fff',
        padding: ' 0 20px',
        border: '1px solid #ccc',
        position: 'fixed',
        top: '0',
        left: isOpen ? '0' : '100%',
        zIndex: '111111111111',
        width: '100%',
        height: '100vh',
        // overflow: 'scroll',
        transition: '.3s',
        display: isOpen ? 'flex' : 'none'
      }}
    >
      <div
        className="backgroud"
        onClick={closeModal}
        style={{
          minHeight: '100%',
          width: '100%',
          background: 'rgba(0, 0, 0, 0.44)',
          position: 'absolute',
          left: '0',
          top: '0',
          zIndex: '0'
        }}
      ></div>
      <div
        style={{ width: 'max-content', height: '100vh', overflowY: 'scroll', position: 'relative' }}
      >
        <div
          style={{
            //   justifyContent: 'flex-end',
            position: 'absolute',
            top: '10px',
            right: '10px',
            display: isOpen ? 'flex' : 'none',
            zIndex: '111111111111111111',
            background: 'red',
            width: '50px',
            //   display:"flex",
            alignItems: 'center',
            justifyContent: 'center',
            height: '50px',
            fontSize: '30px',
            color: 'white'
          }}
        >
          <IoCloseOutline onClick={closeModal} style={{ cursor: 'pointer' }} />
        </div>
        {header && <h2>{header}</h2>}
        {children}
      </div>
    </div>
  )
}

export default ModalContent
