
import './App.css';
import './static/CSS/style.css'
import weblogo from './static/media/weblogo.png'
import admin from './static/media/admin.png'
import comma from './static/media/comma.png'
import doctor from './static/media/doctor.jpeg'
import dotimg from './static/media/dotimg.png'
import face from './static/media/face.png'
import Home from './static/media/Home.png'
import Hospital from './static/media/Hospital.png'
import Hospital1 from './static/media/Hospital1.jpeg'
import Hospital2 from './static/media/Hospital2.jpeg'
import Hospital3 from './static/media/Hospital3.jpeg'
import insta from './static/media/insta.png'
import overview from './static/media/overview.jpg'
import patient from './static/media/patient.jpg'
import tweeter from './static/media/tweeter.png'
import weblogo1 from './static/media/weblogo1.png'
import weblogo2 from './static/media/weblogo2.png'
import youtube from './static/media/youtube.png'

import { useState } from 'react';

 

function App() {
  const [activeIndex, setActiveIndex] = useState(2); // Set the default active index to 2 (index of the initially expanded item)

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const faqData = [
    {
      question: "How do I know the clinic I'm searching is Verified?",
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
    },
    {
      question: 'I can travel alone so can some family member or friend of mine accompany me?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
    },
    {
      question: 'Can I see my doctor before I decide and what about my post recovery?',
      answer: 'Yes, pre and post treatment consultation can be done. You can speak to the doctor at the most appropriate time (before you decide to travel) to boost your confidence. The team at Mediretreats will also help you with arranging the OPDS after the surgeries.'
    },
    {
      question:'How do I share my reports and medical cases with the clinic of my choice?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
    },
    ];
  
  return (
    <>
  <header>
    <div className="head">
      <div className="weblogo">
        <img src={weblogo} alt="" srcSet="" />
      </div>
      <div className="tophead">
        <img
          className="topheadlogo"
          src={weblogo2}
          alt=""
          srcSet=""
        />
        <ul className="nav-items">
          <li className="opinion">
            <i className="fa fa-desktop" />
            <div className="content">
              <p className="cont-head">Second Medical Opinion</p>
              <p className="cont-desc">Book Consultation</p>
            </div>
          </li>
          <li className="opinion">
            <i className="fa fa-phone-volume" />
            <div className="content">
              <p className="cont-head">Call us On</p>
              <p className="cont-desc">985 896 2222</p>
            </div>
          </li>
          <li className="opinion">
            <i className="fa fa-envelope" />
            <div className="content">
              <p className="cont-head">Email us on</p>
              <p className="cont-desc">info@mediretreats.com</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <nav className="nav">
    <div className="nav-menu flex-row">
      <div className="nav-brand">
        <a href=".">
          <img src="" />
        </a>
      </div>
      <div className="toggle-collapse">
        <div className="toggle-icons">
          <i className="fas fa-bars" />
        </div>
      </div>
      <div>
        <ul className="nav-items">
          <li className="nav-link">
            <a href="/">Home</a>
          </li>
          <li className="nav-link">
            <a href="#">About Us</a>
          </li>
          <li className="nav-link">
            <a href="#">Treatment &nbsp; +</a>
          </li>
          <li className="nav-link">
            <a href="#">Destinations &nbsp; +</a>
          </li>
          <li className="nav-link">
            <a href="#">Hospitals</a>
          </li>
          <li className="nav-link">
            <a href="#">FaQs</a>
          </li>
          <li className="nav-link">
            <a href="#">Blog</a>
          </li>
          <li className="nav-link">
            <a href="#">Request and Quote</a>
          </li>
        </ul>
      </div>
      <form action="# " method="GET">
        <div className="search-container">
          <i className="fa fa-search"></i>
          <input
            type="text"
            style={{ color: "white" }}
            name="search"
            placeholder="Search..."
          />
        </div>
      </form>
    </div>
  </nav>
  <main>
    <section className="site-title">
      <div className="site-background">
        <div className="site-nav">
          <div className="ricon">
            Home{" "}
            <i style={{ color: "#D5052F" }} className="fa fa-chevron-right" />
          </div>
          <div className="ricon">
            Treatment{" "}
            <i style={{ color: "#D5052F" }} className="fa fa-chevron-right" />
          </div>
          <div className="ricon">
            Orthopaedics{" "}
            <i style={{ color: "#D5052F" }} className="fa fa-chevron-right" />
          </div>
          <div className="ricon">Knee Replacement</div>
        </div>
        <h1>Total Knee Replacement</h1>
        <p>
          Total knee replacement is surgery to remove and replace the whole{" "}
          <br /> damaged knee joint with an artificial joint.
        </p>
        <a href="#" className="explore">
          <button className="btn">Enquire Now</button>
        </a>
      </div>
    </section>
    <section>
      <div className="mainsection">
        <div className="sectiontitle">Overview</div>
        <div className="sectiontitle">Eligibilty</div>
        <div className="sectiontitle">Preparation</div>
        <div className="sectiontitle">About Treatment</div>
        <div className="sectiontitle">Post-Treatment Care</div>
        <div className="sectiontitle">Recovery Tips</div>
        <div className="sectiontitle">FaQs</div>
        <div className="sectiontitle">Patient Stories</div>
      </div>
    </section>
    <section>
      <div className="maincontent">
        <div className="overview">
          <div className="maintitle">Treatment Overview</div>
          <div className="OverviewDesc">
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio commodi impedit ipsum illum corrupti? Omnis tempora
              repellat consectetur libero nostrum tenetur culpa cupiditate.
            </div>
            <br />
            <div className="">
              Repellendus at fugiat porro quos molestias error cum, perspiciatis
              similique quibusdam ea qui, id vel officia quo tenetur
              voluptatibus possimus esse placeat. Adipisci nostrum placeat magni
              saepe dolores aut et harum sequi in excepturi libero ut molestias,
              nulla reprehenderit tenetur id? Nisi commodi odio nemo
              reprehenderit repudiandae dignissimos earum aperiam voluptatem
              magnam sunt dolorum rerum explicabo, voluptates nam impedit
              repellat modi!
            </div>
            <br /> Voluptatum numquam labore, aperiam aspernatur repellat facere
            accusamus, veritatis, eaque iure ad odit placeat dignissimos amet?
          </div>
        </div>
        <div className="overviewimg">
          <img src={overview} alt="" srcSet="" />
        </div>
      </div>
      <hr className="dashed" />
    </section>
    <section className="container">
      <div className="site-content">
        <div className="sitecontentmain">
          <div className="post-content">
            <div className="post-title">
              <a href=""> Eligibilty For Treatment</a>
            </div>
            <div className="contentDesc">
              Any individual who has tried diet and exercise but failed to lose
              weight is considered as a good candidate for gastric bypass.
              Although gastric bypass aids in weight loss, it is not an
              appropriate option for everyone. Based on the overall health and
              certain medical guidelines, the doctor will decide whether you are
              eligible for gastric bypass or not.
            </div>
            <div className="contentDesc1">
              In general, gastric bypass could be a good option if:
            </div>
            <ul
              style={{ listStyleType: "circle" }}
              className="symbol-bullets"
            >
              <div>
                {" "}
                <i className="fa-regular fa-circle" />
                The BMI (body mass index) is 40 or more
              </div>
              <div>
                {" "}
                <i className="fa-regular fa-circle" />
                Your BMI is 30 or more with severe weight-related health
                conditions like type-2 diabetes and high blood pressure
              </div>
              <div>
                {" "}
                <i className="fa-regular fa-circle" />
                You are willing to make permanent changes in the lifestyle
              </div>
            </ul>
            <hr className="dashed1" style={{ marginTop: "2rem" }} />
          </div>
          <div className="post-content">
            <div className="post-title">
              <a href=""> Preparation Before Treatment</a>
            </div>
            <div className="contentDesc">
              Any individual who has tried diet and exercise but failed to lose
              weight is considered as a good candidate for gastric bypass.
              Although gastric bypass aids in weight loss, it is not an
              appropriate option for everyone. Based on the overall health and
              certain medical guidelines, the doctor will decide whether you are
              eligible for gastric bypass or not.
            </div>
            <div className="contentDesc1">
              In general, gastric bypass could be a good option if:
            </div>
            <ul
              style={{ listStyleType: "circle"}}
              className="symbol-bullets"
            >
              <div>
                {" "}
                <i className="fa-regular fa-circle" />
                The BMI (body mass index) is 40 or more
              </div>
              <div>
                {" "}
                <i className="fa-regular fa-circle" />
                Your BMI is 30 or more with severe weight-related health
                conditions like type-2 diabetes and high blood pressure
              </div>
              <div>
                {" "}
                <i className="fa-regular fa-circle" />
                You are willing to make permanent changes in the lifestyle
              </div>
            </ul>
            <hr className="dashed1" style={{ marginTop: "2rem" }} />
          </div>
          <div className="post-content">
            <div className="post-title">
              <a href=""> About Treatment</a>
            </div>
            <div className="contentDesc">
              Any individual who has tried diet and exercise but failed to lose
              weight is considered as a good candidate for gastric bypass.
              Although gastric bypass aids in weight loss, it is not an
              appropriate option for everyone. Based on the overall health and
              certain medical guidelines, the doctor will decide whether you are
              eligible for gastric bypass or not.
            </div>
            <div className="contentDesc1">
              In general, gastric bypass could be a good option if:
            </div>
            <ul
              style={{ listStyleType: "circle" }}
              className="symbol-bullets"
            >
              <div>
                {" "}
                <i className="fa-regular fa-circle" />
                The BMI (body mass index) is 40 or more
              </div>
              <div>
                {" "}
                <i className="fa-regular fa-circle" />
                Your BMI is 30 or more with severe weight-related health
                conditions like type-2 diabetes and high blood pressure
              </div>
              <div>
                {" "}
                <i className="fa-regular fa-circle" />
                You are willing to make permanent changes in the lifestyle
              </div>
            </ul>
            <hr className="dashed1" style={{ marginTop: "2rem" }} />
          </div>
          <div className="post-content">
            <div className="post-title">
              <a href=""> Post Treatment and Care Treatment</a>
            </div>
            <div className="contentDesc">
              Any individual who has tried diet and exercise but failed to lose
              weight is considered as a good candidate for gastric bypass.
              Although gastric bypass aids in weight loss, it is not an
              appropriate option for everyone. Based on the overall health and
              certain medical guidelines, the doctor will decide whether you are
              eligible for gastric bypass or not.
            </div>
            <div className="contentDesc1">
              In general, gastric bypass could be a good option if:
            </div>
            <ul
              style={{ listStyleType: "circle" }}
              className="symbol-bullets"
            >
              <div>
                {" "}
                <i className="fa-regular fa-circle" />
                The BMI (body mass index) is 40 or more
              </div>
              <div>
                {" "}
                <i className="fa-regular fa-circle" />
                Your BMI is 30 or more with severe weight-related health
                conditions like type-2 diabetes and high blood pressure
              </div>
              <div>
                {" "}
                <i className="fa-regular fa-circle" />
                You are willing to make permanent changes in the lifestyle
              </div>
            </ul>
            <hr className="dashed1" style={{ marginTop: "2rem" }} />
          </div>
          <div className="post-content">
            <div className="post-title">
              <a href=""> Treatment Recovery Tips</a>
            </div>
            <div className="contentDesc">
              Any individual who has tried diet and exercise but failed to lose
              weight is considered as a good candidate for gastric bypass.
              Although gastric bypass aids in weight loss, it is not an
              appropriate option for everyone. Based on the overall health and
              certain medical guidelines, the doctor will decide whether you are
              eligible for gastric bypass or not.
            </div>
            <div className="contentDesc1">
              In general, gastric bypass could be a good option if:
            </div>
            <ul
              style={{ listStyleType: "circle" }}
              className="symbol-bullets"
            >
              <div>
                {" "}
                <i className="fa-regular fa-circle" />
                The BMI (body mass index) is 40 or more
              </div>
              <div>
                {" "}
                <i className="fa-regular fa-circle" />
                Your BMI is 30 or more with severe weight-related health
                conditions like type-2 diabetes and high blood pressure
              </div>
              <div>
                {" "}
                <i className="fa-regular fa-circle" />
                You are willing to make permanent changes in the lifestyle
              </div>
            </ul>
            <hr className="dashed1" style={{ marginTop: "2rem" }} />
          </div>

          <div className="container1">
            <h2>Treatment FAQs</h2>
            <div className="accordion">
            {faqData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <button
              id={`accordion-button-${index}`}
              aria-expanded={activeIndex === index ? 'true' : 'false'}
              onClick={() => toggleAccordion(index)}
            >
              <span className="accordion-title">{item.question}</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
            </div>
            <hr className="dashed1" style={{ marginTop: "2rem" }} />
          </div>
          <div className="Patientstory">
            <div className="storytitle"> Patient Stories and Videos</div>
            <div className="blog">
              <div className="container2">
                <div className="owl-carousel owl-theme blog-post">
                  <div className="blog-content">
                    <a className="Boga" href="">
                      <h3>Underwent procedure for retinal detachment</h3>
                      <img src={comma} alt="" />
                    </a>
                    <a href="">
                      <img
                        style={{ height: 250 }}
                        src={patient}
                        alt="post1"
                      />
                    </a>
                    <div className="blog-title">
                      <img src={patient} alt="" srcSet="" />
                      <div className="namecount">
                        <div className="name">Luke Olfer</div>
                        <div className="country">New York, USA</div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-content">
                    <a className="Boga" href="">
                      <h3>Underwent Colonoscopy and Medical Management</h3>
                      <img src={comma} alt="" />
                    </a>
                    <a className="adesc" href="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </a>
                    <div className="blog-title">
                      <img src={patient} alt="" srcSet="" />
                      <div className="namecount">
                        <div className="name">Luke Olfer</div>
                        <div className="country">New York, USA</div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="patientdot">
                  <li className="act">
                    <i className="fa-regular fa-circle" />
                  </li>
                  <li>
                    <i className="fa-regular fa-circle" />
                  </li>
                  <li>
                    <i className="fa-regular fa-circle" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <aside className="sidebar">
          <div className="cont">
            <h1
              style={{
                color: "#3EB6FB",
                marginBottom: "0rem",
                paddingBottom: "0rem"
              }}
            >
              Need Help ?
            </h1>
            <p style={{ color: "black", marginTop: 10, paddingTop: 10 }}>
              Just let us know. We will be happy to assist you.
            </p>
            <form>
              <div className="form-group">
                <input
                  className="input"
                  type="text"
                  placeholder="Full Name"
                  id="fullname"
                  name="fullname"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  className="input"
                  placeholder="Email Id"
                  type="email"
                  id="email"
                  name="email"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  className="input"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                  name="phone"
                  required=""
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Description Your Treatment Requirement"
                  id="description"
                  name="description"
                  required=""
                  defaultValue={""}
                />
              </div>
              <button type="submit">Send Enquiry</button>
            </form>
          </div>
        </aside>
      </div>
    </section>
    <section>
      <div className="Doctor">
        <h3 className="dh3">Doctors</h3>
        <div className="dhead">
          <h2 className="dh2">Top Orthopaedics</h2>{" "}
          <div
            style={{
              paddingLeft: "1rem",
              fontSize: "2.5rem",
              color: "#107DF7"
            }}
          >
            Doctors
          </div>
        </div>
        <div className="docr">
          <div style={{ height: 450 }} className="blog-content">
            <a href="">
              <img
                style={{ height: 220 }}
                src={doctor}
                alt="post1"
              />
            </a>
            <div className="blog-title">
              <div
                style={{
                  color: "rgb(255, 127, 255) !important",
                  fontSize: "1.5rem",
                  paddingBottom: 10,
                  fontStyle: "italic",
                  fontWeight: 400
                }}
                className="dname"
              >
                Dr. Faique Falke
              </div>
              <div
                style={{ fontWeight: "bold", paddingBottom: 7 }}
                className="aboudoct"
              >
                Musaffah Industrial - Abu Dhabi
              </div>
              <div style={{ color: "#3f4954" }} className="specia">
                Doctor Desgree &amp; Specialist
              </div>
            </div>
          </div>
          <div className="blog-content">
            <a href="">
              <img
                style={{ height: 220 }}
                src={doctor}
                alt="post1"
              />
            </a>
            <div className="blog-title">
              <div
                style={{
                  color: "rgb(255, 127, 255) !important",
                  fontSize: "1.5rem",
                  paddingBottom: 10,
                  fontStyle: "italic",
                  fontWeight: 400
                }}
                className="dname"
              >
                Dr. Faique Falke
              </div>
              <div
                style={{ fontWeight: "bold", paddingBottom: 7 }}
                className="aboudoct"
              >
                Musaffah Industrial - Abu Dhabi
              </div>
              <div style={{ color: "#3f4954" }} className="specia">
                Doctor Desgree &amp; Specialist
              </div>
            </div>
          </div>
          <div className="blog-content">
            <a href="">
              <img
                style={{ height: 220 }}
                src={doctor}
                alt="post1"
              />
            </a>
            <div className="blog-title">
              <div
                style={{
                  color: "rgb(255, 127, 255) !important",
                  fontSize: "1.5rem",
                  paddingBottom: 10,
                  fontStyle: "italic",
                  fontWeight: 400
                }}
                className="dname"
              >
                Dr. Faique Falke
              </div>
              <div
                style={{ fontWeight: "bold", paddingBottom: 7 }}
                className="aboudoct"
              >
                Musaffah Industrial - Abu Dhabi
              </div>
              <div style={{ color: "#3f4954" }} className="specia">
                Doctor Desgree &amp; Specialist
              </div>
            </div>
          </div>
        </div>
        <ul className="patientdot">
          <li className="act">
            <i className="fa-regular fa-circle" />
          </li>
          <li>
            <i className="fa-regular fa-circle" />
          </li>
          <li>
            <i className="fa-regular fa-circle" />
          </li>
        </ul>
      </div>
    </section>
    <section>
      <div className="Doctor">
        <h3 className="dh3">Hospitals</h3>
        <div className="dhead">
          <h2 className="dh2">Recommended</h2>{" "}
          <div
            style={{
              paddingLeft: "1rem",
              fontSize: "2.5rem",
              color: "#107DF7"
            }}
          >
            Hospitals
          </div>
        </div>
        <div className="docr">
          <div
            style={{
              height: 450,
              borderStyle: "dashed",
              borderColor: "#D5052F",
              borderRadius: 10
            }}
            className="blog-content"
          >
            <a href="">
              <img
                style={{ height: 320 }}
                src={Hospital1}
                alt="post1"
              />
            </a>
            <div className="blog-title">
              <div
                style={{ fontWeight: "bold", paddingBottom: 7 }}
                className="aboudoct"
              >
                Apollo Hospital
              </div>
              <div
                style={{
                  color: "rgb(255, 127, 255) !important",
                  fontSize: "1.5rem",
                  paddingBottom: 10,
                  fontStyle: "italic",
                  fontWeight: 400
                }}
                className="dname"
              >
                Banglore
              </div>
            </div>
          </div>
          <div
            style={{
              borderStyle: "dashed",
              borderColor: "#D5052F",
              borderRadius: 10
            }}
            className="blog-content"
          >
            <a href="">
              <img
                style={{ height: 320 }}
                src={Hospital2}
                alt="post1"
              />
            </a>
            <div className="blog-title">
              <div
                style={{ fontWeight: "bold", paddingBottom: 7 }}
                className="aboudoct"
              >
                Medanta Hospital
              </div>
              <div
                style={{
                  color: "rgb(255, 127, 255) !important",
                  fontSize: "1.5rem",
                  paddingBottom: 10,
                  fontStyle: "italic",
                  fontWeight: 400
                }}
                className="dname"
              >
                Gurgoan
              </div>
            </div>
          </div>
          <div
            style={{
              borderStyle: "dashed",
              borderColor: "#D5052F",
              borderRadius: 10
            }}
            className="blog-content"
          >
            <a href="">
              <img
                style={{ height: 320 }}
                src={Hospital3}
                alt="post1"
              />
            </a>
            <div className="blog-title">
              <div
                style={{ fontWeight: "bold", paddingBottom: 7 }}
                className="aboudoct"
              >
                Jaslok Hospital
              </div>
              <div
                style={{
                  color: "rgb(255, 127, 255) !important",
                  fontSize: "1.5rem",
                  paddingBottom: 10,
                  fontStyle: "italic",
                  fontWeight: 400
                }}
                className="dname"
              >
                Mumbai
              </div>
            </div>
          </div>
        </div>
        <ul className="patientdot">
          <li className="act">
            <i className="fa-regular fa-circle" />
          </li>
          <li>
            <i className="fa-regular fa-circle" />
          </li>
          <li>
            <i className="fa-regular fa-circle" />
          </li>
        </ul>
        <div className="exp">
          <div>Don't hesistate, contact us for better help and services.</div>{" "}
          <div className="inexp">Explore all Hospitals</div>
        </div>
      </div>
    </section>
    <section>
      <div className="bottom">
        <div className="botcontent">
          <div className="botcontentdiv">
            Stay healthy and strong to enjoy life
          </div>
          <br />
          <h2 className="botcontenth2">We have team of healthcare experts</h2>
        </div>
        <div className="buttonnumber">
          <button style={{ color: "white" }} className="btn" type="submit">
            Get In Touch
          </button>
          <div
            style={{
              fontWeight: 100,
              color: "white",
              padding: "0 1.5rem",
              fontSize: "4rem"
            }}
          >
            |
          </div>
          <div
            style={{ color: "white", fontSize: "2rem", fontWeight: "bold" }}
            className="numb"
          >
            +91 898 777 9999
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer className="footer">
    <div className="container">
      <div className="Implink">
        <h2 style={{ fontSize: "1.3rem" }} className="fh2">
          Important Links
        </h2>
        <div>- Home</div>
        <div>- About us</div>
        <div>- FaQs</div>
        <div>- Blog</div>
        <div>- Contact us</div>
      </div>
      <div className="tHosp">
        <h2 style={{ fontSize: "1.3rem" }} className="fh2">
          Top Hospitals
        </h2>
        <div>- Apollo Hospital Delhi</div>
        <div>- Medanta Hospital Gurgaon</div>
        <div>- Max Hospital Delhi </div>
        <div>- Jaslok hospital Mumbai</div>
        <div>- Artemis hospital Gurgaon</div>
        <div>- Fortis Hospital Gurgaon</div>
        <div>- View all</div>
      </div>
      <div className="SpecialTreat">
        <h2 style={{ fontSize: "1.3rem" }} className="fh2">
          Speciality Treatments
        </h2>
        <div>- Knee Replacement Surgeon</div>
        <div>- Urologist</div>
        <div>- Spine Surgeon </div>
        <div>- ENT Surgeons</div>
        <div>- Orthopedic</div>
        <div>- Cardiologist</div>
        <div>- View all</div>
      </div>
      <div className="DoctHosp">
        <div className="DoctHospal">
          <img src={admin} alt="" />
          <div className="join">
            <div className=""> Are you doctor / hospital?</div>
            <div className=""> Join Mediretreats</div>
          </div>
        </div>
        <div style={{ marginLeft: "1rem", color: "black" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
          deleniti accusantium laboriosam.
        </div>
      </div>
      <div className="tour">
        <h2 style={{ fontSize: "1.3rem" }} className="fh2">
          Medical Tourism Destinations{" "}
        </h2>
        <div>- SMedical Tourism in India</div>
        <div>- SMedical Tourism in Sri lanka</div>
        <div>- SMedical Tourism in UAE</div>
        <div>- View all</div>
      </div>
    </div>
    <hr style={{ width: "85rem", alignItems: "center", color: "#3f4954" }} />
    <div className="nextsection">
      <div style={{ marginRight: "2rem" }} className="footlogo">
        <img src={weblogo1} alt="" srcSet="" />
      </div>
      <div style={{ marginRight: "2rem" }} className="aboutfoot">
        <h2>About Aafiya Mediretreats</h2>
        Aafiya Mediretreats is a free, confidential, independent resource for
        patients and industry providers. Our mission is to provide a central
        portal where pa- tients, Medical Tourism providers, hospitals, clinics,
        employers, and insurance companies can all find the information they
        need. Our site focuses on patients looking for specific knowledge in the
        fields of medical tourism, dental tourism, and health tourism.
      </div>
      <div
        style={{ marginTop: "0rem", marginRight: "2rem" }}
        className="follow"
      >
        <div className="followicon">
          <h2>Follow us on</h2>
          <img src={face} alt="" srcSet="" />
          <img src={tweeter} alt="" srcSet="" />
          <img src={insta} alt="" srcSet="" />
          <img src={youtube} alt="" srcSet="" />
        </div>
        <p style={{ paddingTop: "3rem", fontSize: "1.1rem" }}>
          Customer Services
        </p>
        <p
          style={{
            margin: 0,
            padding: 0,
            fontSize: "1.3rem",
            color: "#107DF7",
            fontWeight: "bold"
          }}
        >
          +91 9856555666
        </p>
      </div>
    </div>
    <div className="lastrights">
      <div className="rights">
        <h4>
          Copyright © 2020 Aafiya Mediretreats. All Rights Reserved. Designed by
          Ideamagix
        </h4>
        <h4 style={{ marginLeft: "23rem" }}>Terms And Conditions</h4>
        <h4 style={{ marginLeft: "3rem" }}>Privacy Policy</h4>
      </div>
    </div>
  </footer>
</>

  );
}

export default App;
