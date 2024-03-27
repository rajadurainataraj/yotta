import { useState } from "react";
import CustomModal from "./CustomModal";

const GetQuoteService = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container-fluid">
      <button onClick={openModal}>Open Modal</button>
      <CustomModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default GetQuoteService;
