/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { FaArrowRightLong } from 'react-icons/fa6'
import { allData } from './datas'
import { useNavigate } from 'react-router-dom'
const HoverContainer = ({ title }) => {
  const propsData = title.title
  let propsValue = title.title.trim().toLowerCase().replace(/ +/g, '')
  const navigate = useNavigate()
  console.log(propsValue)

  const data = allData.find((item) => item.id === propsValue)
  const moreContent = () => {
    propsValue === 'training&internships'
      ? (propsValue = 'trainingandinternships')
      : propsValue === 'ui/ux'
      ? (propsValue = 'uiuxdesign')
      : propsValue === 'websites'
      ? (propsValue = 'website')
      : ''

    navigate('/services/' + propsValue)
  }
  return (
    <section className="container-fluid pe-5 custom-service-home">
      <motion.div
        className="hover-info"
        // initial={{ y: '100%', opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ duration: 0.5 }}

        // style={{ width: "600px", height: "390px" }}
      >
        <div className="service-headers text-black p-4"> {propsData}</div>
        <section className="">
          <div className="">
            <p className="service-paras-home p px-4">{data?.content}</p>
          </div>
          <div
            className="text-white custom-learnmore-btn my-5 ms-4 cursor-pointer "
            onClick={() => moreContent()}
          >
            <span>Learn More</span> <FaArrowRightLong color="white" />
          </div>
        </section>
      </motion.div>
    </section>
  )
}

export default HoverContainer
