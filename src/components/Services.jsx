/* eslint-disable no-unused-vars */
import { serviceData } from "./datas";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { count } from "./utils/globalState";
import { useRecoilState } from "recoil";

const Services = () => {
  const [counts, setCounts] = useRecoilState(count);
  const { id } = useParams();
  const navigate = useNavigate();
  const data = serviceData.find((item) => item.id === id);

  const { heading, imgUrl, content, secondContent, secondHeading } = data;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // counts > 0 && navigate("/");
  return (
    <div>
      {/* {serviceData.map((item) => ( */}
      <div
        key={heading}
        className="container-fluid pe-5 custom-services p-5 pt-2"
      >
        <div className="service-headers service-headers1 text-black p-4">
          {heading}
        </div>

        <section className="d-flex service-container">
          <img src={imgUrl} alt="" className="p-5 service-img" />

          {/* <span>{item.content}</span> */}
          <div className="ps-3">
            <span
              className="service-paras p"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <p
              className="service-paras"
              dangerouslySetInnerHTML={{ __html: secondContent }}
            />
            <ul className="list-group">
              <span className="service-paras py-2">{secondHeading}</span>
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
  );
};

export default Services;
