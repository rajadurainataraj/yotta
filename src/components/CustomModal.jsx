/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import './CustomModal.css' // Assuming you have a CSS file for styling the modal
import { MdClose } from 'react-icons/md'
import ChooseServices from './serviceModals/ChooseServices.jsx'
import { FaArrowLeftLong } from 'react-icons/fa6'
import ProjectType from './serviceModals/ProjectType.jsx'
import ProjectDescription from './serviceModals/ProjectDescription.jsx'
import EstimatedBudget from './serviceModals/EstimatedBudget.jsx'
import ReferenceWebsite from './serviceModals/ReferenceWebsite.jsx'
import CustomerDetails from './serviceModals/CustomerDetails.jsx'
import ThankYou from './serviceModals/ThankYou.jsx'
import {
  count,
  selectedService,
  serviceData,
  socialService,
} from '../components/utils/globalState.js'
import { useRecoilState } from 'recoil'

import SocialServices from './serviceModals/SocialServices.jsx'
import WebsiteType from './serviceModals/WebsiteType.jsx'

const CustomModal = ({ isOpen, onClose }) => {
  const [counts, setCounts] = useRecoilState(count)
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData)
  const [selectedServices, setSelectedServices] =
    useRecoilState(selectedService)
  const [selectedServiceSocial, setSelectedServiceSocial] =
    useRecoilState(socialService)
  console.log(counts)

  const goBack = () => {
    counts === 2 && selectedServiceSocial.length !== 0
      ? setCounts(7)
      : counts === 7
      ? setCounts(1)
      : counts === 8
      ? setCounts(1)
      : selectedServices.includes('Training & Internship')
      ? setCounts(1)
      : setCounts((counts) => counts - 1)
  }
  return (
    <>
      {isOpen && (
        <div
          className="custom-modal-overlay align-items-center "
          // onClick={onClose}
        >
          <div
            className="custom-modal d-flex flex-column align-items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex justify-content-between custom-modal-heading-sub w-100 px-3 ">
              {counts === 1 && <div></div>}
              {counts !== 1 && counts !== 6 && (
                <div>
                  <FaArrowLeftLong
                    className="fs-5 cursor-pointer"
                    onClick={() => goBack()}
                  />
                </div>
              )}
              <div>
                {counts !== 6 && (
                  <div className="h3 px-3 custom-modal-heading-quote">
                    Design A <span className="text-primary">Quote</span>
                  </div>
                )}
              </div>
              {counts !== 6 && (
                <MdClose
                  size={30}
                  className="modal-close ms-5 cursor-pointer"
                  onClick={onClose}
                />
              )}
            </div>
            {/* {serviceDatas.includes("Digital Marketing") && <SocialServices />} */}

            {counts === 1 && <ChooseServices />}
            {counts === 2 && <ProjectType />}
            {counts === 3 && <ProjectDescription />}
            {counts === 4 && <EstimatedBudget />}
            {counts === 5 && <CustomerDetails />}
            {counts === 6 && <ThankYou onClose={onClose} />}
            {counts === 7 && <SocialServices />}
            {counts === 8 && <WebsiteType />}
            {counts === 9 && <ReferenceWebsite />}
          </div>
        </div>
      )}
    </>
  )
}

export default CustomModal
