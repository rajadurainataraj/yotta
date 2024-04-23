/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Buttons from '../Buttons.jsx'
import {
  count,
  projectDescriptions,
  serviceData,
} from '../utils/globalState.js'
import { useRecoilState } from 'recoil'
const ProjectDescription = () => {
  const [counts, setCounts] = useRecoilState(count)
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData)
  const [inputValue, setInputValue] = useRecoilState(projectDescriptions)

  // const nextPage = () => {
  //   setServiceDatas((prevServiceDatas) => {
  //     if (!prevServiceDatas.includes(inputValue)) {
  //       return [...prevServiceDatas, inputValue];
  //     } else {
  //       return prevServiceDatas.map((item) =>
  //         item === inputValue ? inputValue : item
  //       );
  //     }
  //   });

  //   setInputValue("");
  // };
  const nextPage = () => {
    const existingServicesIndex = serviceDatas.findIndex(
      (data) => 'projectDescription' in data
    )
    if (existingServicesIndex !== -1) {
      // Replace existing services
      const newServiceDatas = [...serviceDatas]
      newServiceDatas[existingServicesIndex] = {
        projectDescription: { inputValue },
      }
      setServiceDatas(newServiceDatas)
    } else {
      // Append new services
      setServiceDatas([...serviceDatas, { projectDescription: { inputValue } }])
    }
    setCounts(4)
  }
  console.log(serviceDatas)
  function handleChange(event) {
    setInputValue(event.target.value)
  }

  return (
    <section style={{ width: '50vw' }} className="project-description-section">
      <section className="lato fw-bold text-left fs-4 h5 service-question ">
        Project Description
      </section>
      <section>
        <input
          className="custom-reference-input"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </section>
      <section className="satisfaction d-flex justify-content-between align-items-center px-3 mb-5">
        <p className="p mt-3">100% Satisfaction</p>
        <p className="p mt-3">We’ll don’t sell your data</p>
        <p className="p mt-3">100% Custom made</p>
      </section>
      <section className="d-flex justify-content-center align-items-center ">
        <Buttons
          onClick={() => nextPage()}
          disabled={inputValue.length === 0}
        />
      </section>
    </section>
  )
}

export default ProjectDescription
