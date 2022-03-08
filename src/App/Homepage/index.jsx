import logo from "./logo.svg";
import "./index.css";
// import image from "./images/zen-logo.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// function MyVerticallyCenteredModal(props) {
//   const {
//     buttonLabel,
//     className
//   } = props;
//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);

//   return (
//     <div>
//       <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
//       <Modal isOpen={modal} toggle={toggle} className={className}>
//         <ModalHeader toggle={toggle}>Modal title</ModalHeader>
//         <ModalBody>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
//           <Button color="secondary" onClick={toggle}>Cancel</Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// }

const Homepage = () => {
  return (
    <>
      <div className="row m-0 banner-bg text-purple">
        <div className="col-sm-12 col-lg-6 banner-content pl-md-5 text-left">
          <div className="col-sm-12 col-md-11 mx-auto">
            <div className="pl-md-4">
              <img
                className="bannerIITMLogo pb-3 mt-5 mb-4"
                src="./images/iit.svg"
                alt="IITM Chennai"
              />
            </div>
            <div className="pl-md-5">
              {/* <h2 className="display-4 font-weight-bold text-purple banner-title"> */}
              <span className="full-stack">
                Full Stack Developer
                <br />
                Bootcamp
              </span>
              {/* </h2> */}
              <div className="col-10 p-0">
                <ul className="text-left">
                  <li className="p-text text-purple">
                    100% Job Assurance or Refund
                  </li>
                  <li className="p-text text-purple">
                    Mentors from top Global Product companies
                  </li>
                  <li className="p-text text-purple">
                    A portfolio of real-world projects
                  </li>
                  <li className="p-text text-purple">Certification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 p-0 d-flex align-items-center justify-content-center bannerBgImage">
          <div className="banner-label d-inline-flex align-items-center"></div>
          <img
            className="img-fluid bannerImage float-right"
            src="./images/main.svg"
            alt="Zen Banner"
          />
        </div>
        <div className="col-sm-11 col-md-10 mx-auto my-5">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <h3 className="display-5 font-weight-bold">
                    Program Overview
                  </h3>
                </div>
                <div className="d-flex justify-content-between mr-3"></div>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div>
                <img src="./images/clock.svg" className="mx-auto " alt="" />
              </div>
              <p className=" my-1 text-purple">Duration</p>
              <p className=" my-1  banner-highlights text-dark">
                3 Months (Weekdays)/
                <br /> 5 Months (Weekends)
              </p>
            </div>
            <div className="col-sm-6 col-md-3">
              <div>
                <img src="./images/person.svg" className="mx-auto" alt="" />
                <p className=" my-1 text-purple">Format</p>
              </div>
              <p className=" my-1  banner-highlights text-dark">
                Offline/Online
              </p>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="mx-auto justify-content-center">
                <img src="./images/work.svg" alt="" />
              </div>
              <p className=" my-1 text-purple">Hiring Partners</p>
              <p className=" my-1  banner-highlights text-dark">
                100+ companies
              </p>
            </div>
            <div className="col-sm-6 col-md-3">
              <div>
                <img src="./images/rupee.svg" className="mx-auto" alt="" />
              </div>
              <p className=" my-1 text-purple">Max CTC upto</p>
              <p className=" my-1  banner-highlights text-dark">
                21Lakhs/annum
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Intro END*/}

      {/* About ZEN */}
      <div className="row About-BG  py-5 mx-0">
        <div className="container">
          <div className="row mx-0">
            <div className="col-md-5">
              <div className="text zenimg">
                <div>
                  <img src="./images/zenclass.jpg" alt="ZEN" />
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <h2 className="about mb-4">About ZEN Class</h2>
              <p>
                Zen Class is one of the industry’s leading Project Based Full
                Stack Development Program that promises 100% Job Placement
                Support on completing the course. Conducted by an IIT Madras
                incubated company & designed by our Founders(Ex-Paypal
                Employees) also offers mentoring through experts from companies
                like Google, Microsoft, Flipkart, Zoho & Freshworks for placing
                you in top companies with high salaries. This Full stack
                Developer Program is designed to cover every technology in depth
                to help you become a successful full stack Developer.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* About ZEN END */}
      <div className="row mx-0">
        <div className="col-sm-11 mx-auto col-md-10 py-5">
          <div className="d-flex justify-content-between mb-4">
            <div>
              <h2 className="Details-header">The Program Details</h2>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-md-12 col-sm-12">
              {/* Accordion-1 Front-End */}
              <div className="col card Details-card">
                <div className="card-header bg-white">
                  <div
                    className="row mb-1 mt-2"
                    data-toggle="collapse"
                    data-target="#accordion1"
                  >
                    <h3 className="col accordion-header">
                      Front-End Development
                    </h3>
                    {/* <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button> */}
                    <div className="justify-content-end col d-flex">
                      <button
                        className="btn collapsed accordion-arrow"
                        data-toggle="collapse"
                        data-target="#accordion1"
                        aria-expanded="false"
                        aria-controls="accordion1"
                      ></button>
                    </div>
                  </div>
                  <p>
                    Get a deeper understanding of Client Side Programming or in
                    other words the front end development by developing highly
                    responsive web pages across languages.
                  </p>
                </div>
                {/* div with acc1 id with data for Accordion-1 Front-end */}
              </div>
              {/* Accordion-2 Back-End */}
              <div className="col card Details-card mt-3">
                <div className="card-header bg-white">
                  <div
                    className="row mb-1 mt-2"
                    data-toggle="collapse"
                    data-target="#accordion2"
                  >
                    <h3 className="col accordion-header">
                      Back-End Development
                    </h3>
                    <div className="justify-content-end col d-flex">
                      <button
                        className="btn collapsed accordion-arrow"
                        data-toggle="collapse"
                        data-target="#accordion2"
                        aria-expanded="false"
                        aria-controls="accordion2"
                      ></button>
                    </div>
                  </div>
                  <p>
                    Learn the industry leading ways to design back end
                    development with least response time which in turn fast
                    helps loading web applications & how to connect with
                    Databases.
                  </p>
                </div>
                {/* div with acc2 id with data for Accordion-2 Back-end */}
              </div>
              {/* Accordion-3 DataStructures & Scalability */}
              <div className="col card Details-card mt-3">
                <div className="card-header bg-white">
                  <div
                    className="row mb-1 mt-2"
                    data-toggle="collapse"
                    data-target="#accordion3"
                  >
                    <h3 className="col accordion-header">
                      DataStructures & Scalability
                    </h3>
                    <div className="justify-content-end col d-flex">
                      <button
                        className="btn collapsed accordion-arrow"
                        data-toggle="collapse"
                        data-target="#accordion3"
                        aria-expanded="false"
                        aria-controls="accordion3"
                      ></button>
                    </div>
                  </div>
                  <p>
                    Learn Data Structures and Algorithms write Efficient,
                    Robust, Optimized code. Learn how to build robust & scalable
                    web servers with a thorough understanding of AWS.
                  </p>
                </div>
                {/* div with acc3 id with data for Accordion-3 DataStructures & Scalability */}
              </div>
              {/* Accordion-4 Build your Portfolio */}
              <div className="col card Details-card mt-3">
                <div className="card-header bg-white">
                  <div
                    className="row mb-1 mt-2"
                    data-toggle="collapse"
                    data-target="#accordion4"
                  >
                    <h3 className="col accordion-header">
                      Build your Portfolio
                    </h3>
                    <div className="justify-content-end col d-flex">
                      <button
                        className="btn collapsed accordion-arrow"
                        data-toggle="collapse"
                        data-target="#accordion4"
                        aria-expanded="false"
                        aria-controls="accordion4"
                      ></button>
                    </div>
                  </div>
                  <p>
                    Build your Full stack developer Portfolio and demonstrate
                    your knowledge by developing End to End Full Stack
                    Application
                  </p>
                </div>
                {/* div with acc4 id with data for Accordion-4 Build your Portfolio */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Program Details END*/}

      {/* Technologies Covered carousel*/}
      <div className="row TechCarousel-bg m-0">
        <div className="col-sm-11 mx-auto col-md-10 py-5">
          <div className="d-flex justify-content-between mb-4">
            <div>
              <h2 className="Details-header">Technologies covered</h2>
            </div>
          </div>
          <div
            id="TechnologiesCarousel"
            className="carousel slide"
            data-ride="carousel"
            data-interval="10000"
          >
            <div>
              <ol className="carousel-indicators">
                <li
                  data-target="#TechnologiesCarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#TechnologiesCarousel" data-slide-to="1"></li>
                <li data-target="#TechnologiesCarousel" data-slide-to="2"></li>
              </ol>
            </div>
            <div className="carousel-inner d-flex pb-5" role="listbox">
              {/* Carousel 1 */}
              <div className="carousel-item active">
                <div className="d-flex justify-content-between align-items-stretch col-sm-11  mx-auto m-0">
                  <div className="d-flex carousel-image-card  justify-content-center align-items-center bg-white p-4 mx-5 my-5 mt-2">
                    <img alt="Node" src="./images/nodejs.svg" />
                  </div>
                  <div className="d-flex carousel-image-card justify-content-center align-items-center bg-white p-4 mx-5 my-5 mt-2">
                    <img alt="Mongo" src="./images/mongodb.svg" />
                  </div>
                  <div className="d-flex carousel-image-card justify-content-center align-items-center bg-white p-4 mx-5 my-5 mt-2">
                    <img alt="AWS" src="./images/aws.svg" />
                  </div>
                  <div className="d-flex carousel-image-card justify-content-center align-items-center bg-white p-4 mx-5 my-5 mt-2">
                    <img alt="NPM" src="./images/npm.svg" />
                  </div>
                  <div className="d-flex carousel-image-card justify-content-center align-items-center bg-white p-4 mx-5 my-5 mt-2">
                    <img alt="NPM" src="./images/jest-0.svg" />
                  </div>
                </div>
              </div>
              {/* Carousel item 2 */}
              <div className="carousel-item">
                <div className="d-flex justify-content-between align-items-stretch col-sm-11 mx-auto m-0">
                  <div className="d-flex carousel-image-card justify-content-center align-items-center bg-white p-4 mx-5 my-5 mt-2">
                    <img alt="Mongo" src="./images/mongodb.svg" />
                  </div>
                  <div className="d-flex carousel-image-card justify-content-center align-items-center bg-white p-4 mx-5 my-5 mt-2">
                    <img alt="Node" src="./images/nodejs.svg" />
                  </div>
                  <div className="d-flex carousel-image-card justify-content-center align-items-center bg-white p-4 mx-5 my-5 mt-2">
                    <img alt="AWS" src="./images/aws.svg" />
                  </div>
                  <div className="d-flex carousel-image-card justify-content-center align-items-center bg-white p-4 mx-5 my-5 mt-2">
                    <img alt="NPM" src="./images/npm.svg" />
                  </div>
                  <div className="d-flex carousel-image-card justify-content-center align-items-center bg-white p-4 mx-5 my-5 mt-2">
                    <img alt="NPM" src="./images/jest-0.svg" />
                  </div>
                </div>
              </div>
              {/* Carousel item 3 */}
              <div className="carousel-item">
                <div className="d-flex justify-content-between align-items-stretch col-sm-11 mx-auto m-0">
                  <div className="d-flex carousel-image-card justify-content-center align-items-center bg-white p-4 mx-5 my-5 mt-2">
                    <img alt="AWS" src="./images/aws.svg" />
                  </div>
                  <div className="d-flex carousel-image-card justify-content-center align-items-center bg-white p-4 mx-5 my-5 mt-2">
                    <img alt="Node" src="./images/nodejs.svg" />
                  </div>
                  <div className="d-flex carousel-image-card justify-content-center align-items-center bg-white p-4 mx-5 my-5 mt-2">
                    <img alt="Mongo" src="./images/mongodb.svg" />
                  </div>
                  <div className="d-flex carousel-image-card justify-content-center align-items-center bg-white p-4 mx-5 my-5 mt-2">
                    <img alt="NPM" src="./images/npm.svg" />
                  </div>
                  <div className="d-flex carousel-image-card justify-content-center align-items-center bg-white p-4 mx-5 my-5 mt-2">
                    <img alt="NPM" src="./images/jest-0.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Technologies END*/}

      {/* Key HighLights */}
      <div className="row m-0">
        <div className="col-sm-11 col-md-10 mx-auto py-5">
          <div className="my-3">
            <h2 className="KeyHighlights-Header-bg">Key Highlights</h2>
          </div>
          <div className="row m-0">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-left">
              <ul className="list-unstyled">
                <li className="my-4">
                  {" "}
                  <img
                    className="mx-auto"
                    src="./images/studentsDesigned.svg"
                    alt="icon"
                  />
                  Designed for Students/ Working Professionals
                </li>
                <li className="my-4">
                  {" "}
                  <img
                    className="mx-auto"
                    src="./images/projects.svg"
                    alt="icon"
                  />{" "}
                  20+ Projects
                </li>
                <li className="my-4">
                  {" "}
                  <img
                    className="mx-auto"
                    src="./images/agile.svg"
                    alt="icon"
                  />
                  Practical Hands-on Workshops
                </li>
                <li className="my-4">
                  {" "}
                  <img
                    className="mx-auto"
                    src="./images/one-on-one.svg"
                    alt="icon"
                  />
                  One-on-One with Industry Mentors
                </li>
                <li className="my-4">
                  {" "}
                  <img
                    className="mx-auto"
                    src="./images/personalized.svg"
                    alt="icon"
                  />
                  Personalized Feedback on Assignments.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Key HighLights END */}

      {/* Projects */}
      <div className="row m-0 Projects-bg">
        <div className="col-sm-12 col-md-10 mx-auto py-5">
          <div className="d-flex justify-content-between mb-4">
            <div>
              <h2 className="Details-header">Projects</h2>
            </div>
          </div>
          <div className="row m-0">
            <div className="card-deck">
              <div className="card ">
                <div className="mx-auto mt-5">
                  <img src="./images/insta.svg" alt="Card image" />
                </div>
                <div className="card-body">
                  <h4 className="card-title text-center">Instagram in React</h4>
                  <div className="mt-4">
                    <p>
                      Clone of your Insta account with react components. create
                      Business Profile, Celebrity Profile, General Profile, Add
                      & Follow Friends & Celebrities, Browse posts of different
                      categories, Upload Post, Upload Stories, Go live, Keep up
                      with social trends.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="mx-auto mt-5">
                  <img src="./images/youtube.svg" alt="Card image" />
                </div>
                <div className="card-body ">
                  <h4 className="card-title text-center">Youtube radio</h4>
                  <div className="mt-4">
                    <p>
                      <div className="mt-4">
                        <p>
                          Everyone wants a personalized presentation. Customized
                          player for your preferences and you can store the data
                          in a MongoDB via a backend like NodeJS.
                        </p>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="mx-auto mt-5">
                  <img src="./images/docs.svg" alt="Card image" />
                </div>
                <div className="card-body">
                  <h4 className="card-title text-center">Google Docs Clone</h4>
                  <div className="mt-4">
                    <p>
                      Build Realtime Document editor for users for editing,
                      creating and sharing with all the features like Google
                      Docs using Socket.io.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Projects END */}

      {/* How it works */}
      <div className="row mx-0">
        <div className="col-sm-11 col-md-10 mx-auto py-5">
          <div className="d-flex justify-content-between mb-4">
            <div>
              <h2 className="Details-header">How It Works ?</h2>
            </div>
          </div>
          <div className="row m-0">
            <div className="card-deck">
              <div className="card HowItWorks-card">
                <div className="card-body">
                  <h4 className="card-title">Pre-BootCamp Phase</h4>
                  <h6 className="HowItWorks-card-h6">3 sessions | 15 days</h6>
                  <div className="mt-4">
                    <p>
                      Every student comes with unique learning styles and
                      knowledge needed to get started. Gear up and get a warm on
                      all concepts needed to make the most of our bootcamp.
                    </p>
                  </div>
                  <div className="d-flex justify-content-center p-3">
                    <a className="HowItWorks-accordion pointer">
                      <span className="HowItWorks-accordion">View More</span>
                      <i
                        className="fa fa-angle-down mx-2"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card HowItWorks-card">
                <div className="card-body">
                  <h4 className="card-title">Zen BootCamp Phase</h4>
                  <h6 className="HowItWorks-card-h6">
                    60 Sessions | 3 months (Weekdays) |5 Months (Weekends)
                  </h6>
                  <div className="mt-4">
                    <p>
                      Every student comes with unique learning styles and
                      knowledge needed to get started. Gear up and get a warm on
                      all concepts needed to make the most of our bootcamp.
                    </p>
                  </div>
                  <div className="d-flex justify-content-center p-3">
                    <a className="HowItWorks-accordion pointer">
                      <span className="HowItWorks-accordion">View More</span>
                      <i
                        className="fa fa-angle-down mx-2"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card HowItWorks-card">
                <div className="card-body">
                  <h4 className="card-title">Placement phase</h4>
                  <h6 className="HowItWorks-card-h6">3 sessions | 15 days</h6>
                  <div className="mt-4">
                    <p>
                      With more than 100+ hiring partners across all domains of
                      full stack development stop worrying about jobs
                      completely. Focus on building skills and in turn the CTCs
                      that you are going to get hired at.
                    </p>
                  </div>
                  <div className="d-flex justify-content-center p-3">
                    <a className="HowItWorks-accordion pointer">
                      <span className="HowItWorks-accordion">View More</span>
                      <i
                        className="fa fa-angle-down mx-2"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How it works END */}
      {/* Learners */}
      <div className="row mx-0 Learners-bg">
        <div className="col-sm-11 col-md-10 mx-auto py-5">
          <div className="d-flex justify-content-between mb-4">
            <div>
              <h2 className="Details-header">Our learners working in</h2>
            </div>
          </div>
          <div className="col-sm-11 col-md-12 mx-auto d-flex  justify-content-center">
            <img
              src="./images/Image 3.svg"
              className="img-fluid"
              alt="Learners"
            />
          </div>
          <div className="col-sm-11 col-md-10 mx-auto d-flex  justify-content-center">
            <h5 className="text-purple">+100 companies</h5>
          </div>
        </div>
      </div>
      {/* Learners END */}

      {/* Testimonial */}
      <div className="row mx-0">
        <div className="col-sm-11 col-md-10 mx-auto py-5">
          <div className="d-flex justify-content-between mb-4">
            <div>
              <h2 className="Details-header">What our learners says?</h2>
            </div>
          </div>
          <div className="card-deck">
            <div className="card TestimonialCards">
              <div className="my-auto  pb-2 text-center">
                <img
                  src="./images/Parthasarathy.webp"
                  className="rounded-circle"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="card-body d-flex flex-column justify-content-center">
                <div className="col-md-11 col-sm-10 mx-auto">
                  <p>
                    It was a great learning at guvi's modern gurukulam where I
                    got to learn about full stack development in a practical
                    way.
                  </p>
                  <p>
                    {" "}
                    Even a good seed needs a right ambiance to grow & I think
                    guvi did that part to the best.
                  </p>
                  <div className="text-center w-100">
                    <p className="learn-c card-text font-weight-bold">
                      Suhadev
                    </p>
                    <p className="learn-c card-text text-secondary">
                      Full-stack developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card TestimonialCards">
              <div className="my-auto  pb-2 text-center">
                <img
                  src="./images/Suhadev.webp"
                  className="rounded-circle"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="card-body d-flex flex-column justify-content-center">
                <div className="col-md-11 col-sm-10 mx-auto">
                  <p>
                    I would recommend Zen class for anyone who is looking to
                    break into a tech career. You get to learn from top software
                    engineers out there and the best part is they are easily
                    accessible and open to feedback.
                  </p>
                  <div className="text-center w-100">
                    <p className="learn-c card-text font-weight-bold">
                      Swamim Saikia
                    </p>
                    <p className="learn-c card-text text-secondary">
                      Full-stack developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card TestimonialCards">
              <div className="my-auto  pb-2 text-center">
                <img
                  src="./images/Akshay.webp"
                  className="rounded-circle"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="card-body d-flex flex-column justify-content-center">
                <div className="col-md-11 col-sm-10 mx-auto">
                  <p>
                    I would recommend Zen class for anyone who is looking to
                    break into a tech career. You get to learn from top software
                    engineers out there and the best part is they are easily
                    accessible and open to feedback.
                  </p>
                  <div className="text-center w-100">
                    <p className="learn-c card-text font-weight-bold">Akshay</p>
                    <p className="learn-c card-text text-secondary">
                      Full-stack developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial END */}
    </>
  );
};

export default Homepage;
