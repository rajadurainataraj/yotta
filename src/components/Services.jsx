/* eslint-disable no-irregular-whitespace */
import { serviceData } from './datas'
import { useParams } from 'react-router-dom'

const Services = () => {
  const { id } = useParams()
  console.log(id)

  const data = serviceData.find((item) => item.id === id)
  console.log(data)

  return (
    <div>
      {/* {serviceData.map((item) => ( */}
      <div
        key={data.heading}
        className="container-fluid pe-5 custom-services p-5"
      >
        <div className="service-headers text-black p-4">{data.heading}</div>

        <section className="d-flex">
          <img src={data.imgUrl} alt="" width="500px" className="p-5" />

          {/* <span>{item.content}</span> */}
          <div className="ps-3">
            <span
              className="service-paras p"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
            <p
              className="service-paras"
              dangerouslySetInnerHTML={{ __html: data?.secondContent }}
            />
            <ul className="list-group">
              <span className="service-paras py-2">{data?.secondHeading}</span>
              {data?.lists?.map((listItem, index) => (
                //   <li className="list-group-item" key={index}>
                <li className="service-paras ms-5" key={index}>
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      {/* ))} */}
    </div>
  )
}

export default Services
