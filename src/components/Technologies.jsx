import aws from "../assets/images/AWS.jpg";
import Angular from "../assets/images/Angular.jpg";
import Bootstrap5 from "../assets/images/Bootstrap5.jpg";
import Expo from "../assets/images/Expo.jpg";
import ExpressJS from "../assets/images/ExpressJS.jpg";
import Flutter from "../assets/images/Flutter.jpg";
import Hostinger from "../assets/images/Hostinger.jpg";
import Java from "../assets/images/Java.jpg";
import Magento from "../assets/images/Magento.jpg";
import MongoDB from "../assets/images/MongoDB.jpg";
import NodeJS from "../assets/images/NodeJS.jpg";
import OracleDB from "../assets/images/OracleDB.jpg";
import PostgreSQL from "../assets/images/PostgreSQL.jpg";
import Python from "../assets/images/Python.jpg";
import React from "../assets/images/React.jpg";
import SpringBoot from "../assets/images/SpringBoot.jpg";
import ReactNative from "../assets/images/ReactNative.jpg";
import WordPress from "../assets/images/WordPress .jpg";
const Technologies = () => {
  return (
    <section className="py-5 custom-technologies">
      <div className="content-header text-center py-4">
        Available on these technologies
      </div>
      <section className="container-fluid d-flex flex-wrap custom-tech g-5 justify-content-center align-items-center ">
        <img src={aws} alt="" />
        <img src={Angular} alt="" />
        <img src={Bootstrap5} alt="" />
        <img src={Expo} alt="" />
        <img src={ExpressJS} alt="" />
        <img src={Java} alt="" />
        <img src={Hostinger} alt="" />
        <img src={Flutter} alt="" />
        <img src={Magento} alt="" />
        <img src={MongoDB} alt="" />
        <img src={NodeJS} alt="" />
        <img src={OracleDB} alt="" />
        <img src={PostgreSQL} alt="" />
        <img src={Python} alt="" />
        <img src={SpringBoot} alt="" />
        <img src={React} alt="" />
        <img src={ReactNative} alt="" />
        <img src={WordPress} alt="" />
      </section>
    </section>
  );
};

export default Technologies;
