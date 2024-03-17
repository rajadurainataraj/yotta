/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { FaArrowRightLong } from 'react-icons/fa6'
import { allData } from './datas'
const HoverContainer = ({ title }) => {
  const propsData = title.title
  const propsValue = title.title.trim().toLowerCase().replace(/ +/g, '')
  console.log(propsData)

  const data = allData.find((item) => item.id === propsValue)

  return (
    <section className="container-fluid pe-5 custom-service-home">
      <motion.div
        className="hover-info"
        // initial={{ y: '100%', opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ duration: 0.5 }}
        style={{ width: '600px', height: '370px' }}
      >
        <div className="service-headers text-black p-4 "> {propsData}</div>
        <section className="">
          <div className="px-4">
            <p className="service-paras-home p ">{data?.content}</p>
          </div>
          <div className="text-white custom-learnmore-btn my-5 ms-4">
            <span>Learn More</span> <FaArrowRightLong color="white" />
          </div>
        </section>
      </motion.div>
    </section>
  )
}

export default HoverContainer
