import { useState } from 'react'
import CustomModal from './CustomModal'

const GetQuoteServiceModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    console.log('ji')
    // setIsModalOpen(false)
  }
  // console.log(isModalOpen);
  return (
    <div className="container-fluid">
      <button onClick={openModal}>Open Modal</button>
      <CustomModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default GetQuoteServiceModal
