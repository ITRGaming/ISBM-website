import "./App.css";
import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import computerImg from "../src/img/computer.png";
import isbmLogo from "../src/img/isbmuniversitylogocolor.png";
import banner from "../src/img/banner.mp4";
import fee from "../src/img/fee.png";
import team from "../src/img/team.png";
import document from "../src/img/document.png";
import brochurePdf from "../src/img/BROCHURE.pdf";
import rec1 from "../src/img/rec/1.png";
import rec2 from "../src/img/rec/2.png";
import rec3 from "../src/img/rec/3.png";
import rec4 from "../src/img/rec/4.png";
import rec5 from "../src/img/rec/5.png";
import course1 from "../src/img/course/1.jpg";
import course2 from "../src/img/course/2.jpg";
import course3 from "../src/img/course/3.jpg";
import course4 from "../src/img/course/4.jpg";
import course5 from "../src/img/course/5.jpg";
import course6 from "../src/img/course/6.jpg";
import course7 from "../src/img/course/7.jpg";
import course8 from "../src/img/course/8.jpg";
import course9 from "../src/img/course/9.jpg";
import course10 from "../src/img/course/10.jpg";
import course11 from "../src/img/course/11.jpg";
import course12 from "../src/img/course/12.jpg";
import course13 from "../src/img/course/13.jpg";
import course14 from "../src/img/course/14.jpg";
import course15 from "../src/img/course/15.jpg";
import course16 from "../src/img/course/16.jpg";
import course17 from "../src/img/course/17.jpg";
import course18 from "../src/img/course/18.jpg";
import course19 from "../src/img/course/19.jpg";
import course20 from "../src/img/course/20.jpg";
import course21 from "../src/img/course/21.jpg";
import course22 from "../src/img/course/22.jpg";
import course23 from "../src/img/course/23.jpg";
import course24 from "../src/img/course/24.jpg";
import course25 from "../src/img/course/25.jpg";
import course26 from "../src/img/course/26.jpg";
import course27 from "../src/img/course/27.jpg";
import course28 from "../src/img/course/28.jpg";
import course29 from "../src/img/course/29.jpg";
import course30 from "../src/img/course/30.jpg";
import course31 from "../src/img/course/31.jpg";
import course32 from "../src/img/course/32.jpg";
import course33 from "../src/img/course/33.jpg";
import course34 from "../src/img/course/34.jpg";
import course35 from "../src/img/course/35.jpg";
import course36 from "../src/img/course/36.jpg";
import course37 from "../src/img/course/37.jpg";
// import course38 from '../src/img/course/38.jpg';
import alumni1 from "../src/img/alumni/New1.png";
import alumni2 from "../src/img/alumni/New2.jpg";
import alumni3 from "../src/img/alumni/New3.jpg";
import alumni4 from "../src/img/alumni/New4.jpg";
import alumni5 from "../src/img/alumni/New5.jpg";
import alumni6 from "../src/img/alumni/New6.jpg";
import alumni7 from "../src/img/alumni/New7.jpg";
import alumni8 from "../src/img/alumni/New8.jpg";
import alumni9 from "../src/img/alumni/New9.jpg";
import alumni10 from "../src/img/alumni/New10.jpg";
import alumni11 from "../src/img/alumni/New11.jpg";
import alumni12 from "../src/img/alumni/New12.jpg";
import alumni13 from "../src/img/alumni/New13.jpg";
import alumni14 from "../src/img/alumni/New14.jpg";
import alumni15 from "../src/img/alumni/New15.jpg";
import alumni16 from "../src/img/alumni/New16.jpg";
import alumni17 from "../src/img/alumni/New17.jpg";

function App() {
  const [activeTab, setActiveTab] = useState("PHD");

  const handleClick = (tabId) => {
    setActiveTab(tabId);
    // displayProgramme(activeTab);
  };

  //   const displayProgramme = (activeTab) => {
  //     const element = document.getElementById(activeTab);
  //     if (element){
  //         element.style.display = 'block'
  //     }
  //   }

  return (
    <div>
      {/* <div id="spinner"
        className="show  position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status"> <span
                className="sr-only">Loading...</span>
        </div>
    </div> */}
      {/* Spinner End */}

      <nav id="navbar_top" className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <img
              src={isbmLogo}
              className="logo logo-white py-2"
              alt="Logo"
              style={{ height: "80px " }}
              id="mainlogo"
            />
          </a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link text-gradient" href="#sliderForm">
                Enquire Now
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-gradient" href="#rec">
                Recognition
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-gradient" href="#programmes">
                Programmes
              </a>
            </li>
          </ul>
        </div>{" "}
        {/* container-fluid.// */}
      </nav>

      <section id="home">
        <div className="bannerHome">
          <video autoPlay muted loop>
            <source src={banner} type="video/mp4" />
          </video>
        </div>
      </section>

      <section id="sliderForm">
        <div className="sliderForm">
          <div className="container py-5">
            <div className="row">
              <div className="bannerText col-xl-9 col-lg-8 col-md-6 col-sm-12">
                <h1>Boost your Career with UGC approved programmes</h1>
                <div className="slider-nav">
                  <OwlCarousel
                    loop
                    responsive={{
                      0: {
                        items: 1,
                        autoplay: true,
                        autoplayTimeout: 1000,
                      },
                      450: {
                        items: 2,
                        autoplay: true,
                        autoplayTimeout: 1000,
                      },
                      1000: {
                        items: 3,
                        autoplay: true,
                        autoplayTimeout: 1000,
                      },
                      1400: {
                        items: 4,
                        autoplay: true,
                        autoplayTimeout: 1000,
                      },
                    }}
                  >
                    <div className="slider-col mx-1">
                      <div className="headerGradientBtn">
                        <div className="headerGradient">
                          <h5 className="text-gradient">
                            School of Management
                          </h5>
                        </div>
                        <ul>
                          <li>Doctor of Philosophy (Ph.D.) in Management</li>
                          <li>Master of Business Administration (MBA)</li>
                          <li>
                            Executive Master of Business Administration (EMBA)
                          </li>
                          <li>Bachelor of Business Administration (BBA)</li>
                          <li>
                            Post Graduate Diploma in Business Administration
                            (PGDBA)
                          </li>
                          <li>Diploma in Business Administration (DBA)</li>
                        </ul>
                        <div className="headerGradientFooter w-100">
                          <button className="m-auto">View More</button>
                        </div>
                      </div>
                    </div>
                    <div className="slider-col mx-1">
                      <div className="headerGradientBtn">
                        <div className="headerGradient">
                          <h5 className="text-gradient">School of Science</h5>
                        </div>
                        <ul>
                          <li> Doctor of Philosophy (Ph.D.) in Science </li>
                          <li> Master of Science (M.Sc.) </li>
                          <li>
                            {" "}
                            M.Sc. in Stem Cells and Tissue Culture Engineering
                            (M.Sc. SCTCE){" "}
                          </li>
                          <li> M.Sc. in Fire & Safety (M.Sc. F&S) </li>
                          <li>
                            {" "}
                            M.Sc. in Forensic Science & Criminology (M.Sc. FSC){" "}
                          </li>
                          <li> Bachelor of Science (Hons) </li>
                          <li> Bachelor of Science (B.Sc.) </li>
                          <li>
                            {" "}
                            B.Sc. in Forensic Science & Criminology (B.Sc. FSC){" "}
                          </li>
                          <li> B.Sc. in Fire & Safety </li>
                          <li> Post Graduate Diploma in Science (PGDSC) </li>
                          <li> Diploma in Nutrition (DIN) </li>
                          <li> Diploma in Science </li>
                          <li> Diploma in Forensic Science & Criminology </li>
                        </ul>
                        <div className="headerGradientFooter w-100">
                          <button className="m-auto">View More</button>
                        </div>
                      </div>
                    </div>
                    <div className="slider-col mx-1">
                      <div className="headerGradientBtn">
                        <div className="headerGradient">
                          <h5 className="text-gradient">School of Commerce</h5>
                        </div>
                        <ul>
                          <li> Doctor of Philosophy (Ph.D.) in Commerce </li>
                          <li> Master of Commerce (M.Com) </li>
                          <li> B.Com in Computer Application </li>
                          <li> Bachelor of Commerce (Hons) </li>
                          <li> Bachelor of Commerce (B.Com) </li>
                          <li> Post Graduate Diploma in Commerce (PGDCOM) </li>
                          <li> Diploma in Commerce </li>
                        </ul>
                        <div className="headerGradientFooter w-100">
                          <button className="m-auto">View More</button>
                        </div>
                      </div>
                    </div>
                    <div className="slider-col mx-1">
                      <div className="headerGradientBtn">
                        <div className="headerGradient">
                          <h5 className="text-gradient">
                            School of Arts and Humanities
                          </h5>
                        </div>
                        <ul>
                          <li>
                            {" "}
                            Doctor of Philosophy (Ph.D.) in Arts and Humanities{" "}
                          </li>
                          <li> Master of Arts (M.A) </li>
                          <li> Master of Social Work (MSW) </li>
                          <li> Bachelor of Arts (Hons) </li>
                          <li> Bachelor of Arts (B.A) </li>
                          <li> Bachelor of Social Work (BSW) </li>
                          <li> Post Graduate Diploma in Rural Development </li>
                        </ul>
                        <div className="headerGradientFooter w-100">
                          <button className="m-auto">View More</button>
                        </div>
                      </div>
                    </div>
                    <div className="slider-col mx-1">
                      <div className="headerGradientBtn">
                        <div className="headerGradient">
                          <h5 className="text-gradient">
                            School of Engineering and Technology
                          </h5>
                        </div>
                        <ul>
                          <li>
                            {" "}
                            Doctor of Philosophy (Ph.D.) in Engineering and
                            Technology{" "}
                          </li>
                          <li> Master of Technology (M.Tech) </li>
                          <li> Bachelor of Technology (B.Tech) </li>
                          <li>
                            {" "}
                            Bachelor of Technology (B.Tech) (Lateral Entry){" "}
                          </li>
                          <li> Diploma in Engineering </li>
                          <li> Diploma in Engineering (Lateral Entry) </li>
                          <li> Post Graduate Diploma in Rural Development </li>
                        </ul>
                        <div className="headerGradientFooter w-100">
                          <button className="m-auto">View More</button>
                        </div>
                      </div>
                    </div>
                    <div className="slider-col mx-1">
                      <div className="headerGradientBtn">
                        <div className="headerGradient">
                          <h5 className="text-gradient">
                            School of Information and Technology
                          </h5>
                        </div>
                        <ul>
                          <li>
                            {" "}
                            Doctor of Philosophy (Ph.D.) in Information
                            Technology{" "}
                          </li>
                          <li> M.Sc. in Information Technology (M.Sc IT) </li>
                          <li> M.Sc. in Computer Science (M.Sc. CS) </li>
                          <li> Master of Computer Applications (MCA) </li>
                          <li> M.Sc. in Data Science </li>
                          <li> B.Sc. (Hons) in Information Technology </li>
                          <li> B.Sc. (Hons) in Computer Science </li>
                          <li> Bachelor of Computer Applications (BCA) </li>
                          <li> B.Sc. in Data Science </li>
                          <li>
                            {" "}
                            Post Graduate Diploma in Computer Application
                            (PGDCA){" "}
                          </li>
                          <li> Post Graduate Diploma in Data Science </li>
                          <li> Post Graduate Diploma in AI & ML </li>
                          <li> Diploma in Computer Application (DCA) </li>
                          <li> Diploma in AI & ML </li>
                        </ul>
                        <div className="headerGradientFooter w-100">
                          <button className="m-auto">View More</button>
                        </div>
                      </div>
                    </div>
                    <div className="slider-col mx-1">
                      <div className="headerGradientBtn">
                        <div className="headerGradient">
                          <h5 className="text-gradient">School of Design</h5>
                        </div>
                        <ul>
                          <li> B.Sc. (Hons) in Fashion Designing </li>
                          <li> B.Sc. (Hons) in Interior Design </li>
                          <li> Diploma in Fashion Designing (DFD) </li>
                          <li> Diploma in Interior Design (DID) </li>
                          <li> Diploma in Product Design </li>
                          <li> Diploma in Jewellery Design </li>
                          <li> Certificate in Fashion Designing (CFD) </li>
                          <li> Certificate in Interior Design (CID) </li>
                        </ul>
                        <div className="headerGradientFooter w-100">
                          <button className="m-auto">View More</button>
                        </div>
                      </div>
                    </div>
                    <div className="slider-col mx-1">
                      <div className="headerGradientBtn">
                        <div className="headerGradient">
                          <h5 className="text-gradient">School of Pharmacy</h5>
                        </div>
                        <ul>
                          <li> Doctor of Philosophy (Ph.D.) in Pharmacy </li>
                          <li> Master of Pharmacy (M Pharma) </li>
                          <li> Bachelor of Pharmacy (B Pharma) </li>
                          <li> Diploma in Pharmacy (D Pharma) </li>
                        </ul>
                        <div className="headerGradientFooter w-100">
                          <button className="m-auto">View More</button>
                        </div>
                      </div>
                    </div>
                    <div className="slider-col mx-1">
                      <div className="headerGradientBtn">
                        <div className="headerGradient">
                          <h5 className="text-gradient">
                            School of Life Science
                          </h5>
                        </div>
                        <ul>
                          <li>
                            {" "}
                            Doctor of Philosophy (Ph.D.) in Life Science{" "}
                          </li>
                          <li> M.Sc. in Bio Technology </li>
                          <li> M.Sc. in Microbiology </li>
                          <li> B.Sc. (Hons) in Bio Technology </li>
                          <li> B.Sc. (Hons) in Microbiology </li>
                        </ul>
                        <div className="headerGradientFooter w-100">
                          <button className="m-auto">View More</button>
                        </div>
                      </div>
                    </div>
                    <div className="slider-col mx-1">
                      <div className="headerGradientBtn">
                        <div className="headerGradient">
                          <h5 className="text-gradient">
                            School of Yoga and Naturopathy
                          </h5>
                        </div>
                        <ul>
                          <li>
                            {" "}
                            Doctor of Philosophy (Ph.D.) in Yoga Science and
                            Naturopathy{" "}
                          </li>
                          <li> M.Sc. in Yoga Science and Naturopathy </li>
                          <li> M.A. in Yoga </li>
                          <li>
                            {" "}
                            B.Sc. (Hons) in Yoga Science and Naturopathy{" "}
                          </li>
                          <li> B.A. (Hons) in Yoga </li>
                          <li>
                            {" "}
                            Post Graduate Diploma in Yoga and Naturopathy{" "}
                          </li>
                          <li> Diploma in Yoga (DIY) </li>
                          <li> Diploma in Naturopathy (DN) </li>
                        </ul>
                        <div className="headerGradientFooter w-100">
                          <button className="m-auto">View More</button>
                        </div>
                      </div>
                    </div>
                    <div className="slider-col mx-1">
                      <div className="headerGradientBtn">
                        <div className="headerGradient">
                          <h5 className="text-gradient">School of Law</h5>
                        </div>
                        <ul>
                          <li> Doctor of Philosophy (Ph.D.) in Law </li>
                          <li> Master of Law (LLM) </li>
                          <li> Bachelor of Law (LLB) </li>
                          <li>
                            {" "}
                            Bachelor of Business Administration and Bachelor of
                            Law (BBA LLB){" "}
                          </li>
                          <li>
                            {" "}
                            Bachelor of Arts and Bachelor of Law (BA LLB){" "}
                          </li>
                          <li> Post Graduate Diploma in Law </li>
                          <li> Diploma in Law </li>
                        </ul>
                        <div className="headerGradientFooter w-100">
                          <button className="m-auto">View More</button>
                        </div>
                      </div>
                    </div>
                    <div className="slider-col mx-1">
                      <div className="headerGradientBtn">
                        <div className="headerGradient">
                          <h5 className="text-gradient">
                            School of Library and Information Science
                          </h5>
                        </div>
                        <ul>
                          <li>
                            {" "}
                            Doctor of Philosophy (Ph.D.) in Library and
                            Information Science{" "}
                          </li>
                          <li>
                            {" "}
                            Master of Library and Information Science (M.Lib. &
                            I.Sc.){" "}
                          </li>
                          <li>
                            {" "}
                            Bachelor of Library and Information Science (B.Lib.
                            & I.Sc.){" "}
                          </li>
                        </ul>
                        <div className="headerGradientFooter w-100">
                          <button className="m-auto">View More</button>
                        </div>
                      </div>
                    </div>
                    <div className="slider-col mx-1">
                      <div className="headerGradientBtn">
                        <div className="headerGradient">
                          <h5 className="text-gradient">
                            School of Journalism and Mass Communication
                          </h5>
                        </div>
                        <ul>
                          <li>
                            {" "}
                            Doctor of Philosophy (Ph.D.) in Journalism and Mass
                            Communication{" "}
                          </li>
                          <li>
                            {" "}
                            Master of Arts in Journalism and Mass Communication
                            (MA JMC){" "}
                          </li>
                          <li>
                            {" "}
                            Bachelor of Arts (Hons) in Journalism and Mass
                            Communication (BA JMC){" "}
                          </li>
                          <li>
                            {" "}
                            Diploma in Journalism and Mass Communication (D JMC){" "}
                          </li>
                        </ul>
                        <div className="headerGradientFooter w-100">
                          <button className="m-auto">View More</button>
                        </div>
                      </div>
                    </div>
                    <div className="slider-col mx-1">
                      <div className="headerGradientBtn">
                        <div className="headerGradient">
                          <h5 className="text-gradient">School of Education</h5>
                        </div>
                        <ul>
                          <li> Doctor of Philosophy (Ph.D.) in Education </li>
                          <li> Master of Arts in Education </li>
                          <li> Bachelor of Arts (Hons) in Education </li>
                        </ul>
                        <div className="headerGradientFooter w-100">
                          <button className="m-auto">View More</button>
                        </div>
                      </div>
                    </div>
                    <div className="slider-col mx-1">
                      <div className="headerGradientBtn">
                        <div className="headerGradient">
                          <h5 className="text-gradient">
                            School of Hotel Management
                          </h5>
                        </div>
                        <ul>
                          <li>
                            {" "}
                            Doctor of Philosophy (Ph.D.) in Hotel Management and
                            Catering Technology
                          </li>
                          <li>
                            {" "}
                            Master of Hotel Management and Catering Technology
                            (Proposed){" "}
                          </li>
                          <li>
                            {" "}
                            Bachelor of Hotel Management and Catering Technology
                            (BHMCT){" "}
                          </li>
                          <li>
                            {" "}
                            Diploma in Hotel Management and Catering Technology
                            (DHMCT){" "}
                          </li>
                          <li> Diploma in Culinary Arts </li>
                          <li> Diploma in Travel & Tourism </li>
                        </ul>
                        <div className="headerGradientFooter w-100">
                          <button className="m-auto">View More</button>
                        </div>
                      </div>
                    </div>
                    <div className="slider-col mx-1">
                      <div className="headerGradientBtn">
                        <div className="headerGradient">
                          <h5 className="text-gradient">
                            School of Health and Allied Science
                          </h5>
                        </div>
                        <ul>
                          <li> M.Sc. in Medical Biotechnology (M.Sc. MBT) </li>
                          <li> Bachelor of Physiotherapy </li>
                          <li> B.Sc. (Hons) in Forensic Science </li>
                          <li> B.Sc. (Hons) in Nutrition & Dietetics </li>
                          <li> B.A. (Hons) in Public Health </li>
                          <li>
                            {" "}
                            Post Graduate Diploma in Nutrition and Dietetics{" "}
                          </li>
                          <li> Diploma in Dietetics </li>
                          <li> Diploma in Nutrition </li>
                        </ul>
                        <div className="headerGradientFooter w-100">
                          <button className="m-auto">View More</button>
                        </div>
                      </div>
                    </div>
                    <div className="slider-col mx-1">
                      <div className="headerGradientBtn">
                        <div className="headerGradient">
                          <h5 className="text-gradient">
                            School of Vocational Management
                          </h5>
                        </div>
                        <ul>
                          <li> Bachelor of Vocational Studies </li>
                          <li> Diploma in Vocational Studies </li>
                          <li> Certificate in Vocational Studies </li>
                        </ul>
                        <div className="headerGradientFooter w-100">
                          <button className="m-auto">View More</button>
                        </div>
                      </div>
                    </div>
                    <div className="slider-col mx-1">
                      <div className="headerGradientBtn">
                        <div className="headerGradient">
                          <h5 className="text-gradient">
                            School of Media and Entertainment
                          </h5>
                        </div>
                        <ul>
                          <li>
                            {" "}
                            Doctor of Philosophy (Ph.D.) in Media and
                            Entertainment{" "}
                          </li>
                          <li> M.A. in Film Making and Advertising </li>
                          <li>
                            {" "}
                            M.A. in Public Relation and Event Management{" "}
                          </li>
                          <li> B.A. (Hons) in Film Making and Advertising </li>
                          <li>
                            {" "}
                            B.A. (Hons) in Public Relation and Event Management{" "}
                          </li>
                          <li> Diploma in Photography </li>
                          <li> Diploma in Script Writing </li>
                          <li> Diploma in Advertising </li>
                          <li> Diploma in Branding </li>
                          <li> Diploma in VFX and Animation </li>
                        </ul>
                        <div className="headerGradientFooter w-100">
                          <button className="m-auto">View More</button>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>

                <div className="Bannercol">
                  <div className="bannerow mb-4">
                    <div className="featurerow">
                      {" "}
                      <img
                        src={fee}
                        className="logo logo-white"
                        alt="Logo"
                        style={{ height: "40px " }}
                        id="mainlogo"
                      />
                      <div className="feature">Affordable Fees</div>
                    </div>
                    <div className="featurerow">
                      {" "}
                      <img
                        src={team}
                        className="logo logo-white"
                        alt="Logo"
                        style={{ height: "40px " }}
                        id="mainlogo"
                      />
                      <div className="feature">Job Oriented Programs</div>
                    </div>
                  </div>
                  <div className="bannerow mb-4">
                    <div className="featurerow">
                      {" "}
                      <img
                        src={document}
                        className="logo logo-white"
                        alt="Logo"
                        style={{ height: "40px " }}
                        id="mainlogo"
                      />
                      <div className="feature">Best Placements</div>
                    </div>
                    <div className="featurerow">
                      {" "}
                      <img
                        src={computerImg}
                        className="logo logo-white"
                        alt="Logo"
                        style={{ height: "40px" }}
                        id="mainlogo"
                      />
                      <div className="feature">Digital Learning Resources</div>
                    </div>
                  </div>
                </div>
                <a
                  href={brochurePdf}
                  className="headerGradientBtn smallText whiteColor"
                  style={{ color: "#FFF" }}
                  download
                >
                  DOWNLOAD BROCHURE
                </a>
              </div>
              <div className="enquireForm gradient-border col-xl-3 col-lg-4 col-md-6 col-sm-12 p-0">
                <h5 className="">Enquire Now</h5>
                <form className="" action="submitLead.php" method="post">
                  <div className="form-group">
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter your Name"
                      required
                    />{" "}
                  </div>
                  <div className="form-group">
                    {" "}
                    <input
                      type="Email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your Email"
                      required
                    />{" "}
                  </div>
                  <div className="form-group" style={{ display: "flex" }}>
                    {" "}
                    <input
                      type="number"
                      maxlength="10"
                      style={{ width: "100%" }}
                      id="mobile_code"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone"
                      autocomplete="off"
                      required
                    />{" "}
                  </div>
                  <div
                    className="form-group mt-3"
                    id="otpdiv"
                    style={{ display: "none" }}
                  >
                    {" "}
                    <input
                      type="number"
                      maxlength="6"
                      className="form-control"
                      id="otp"
                      placeholder="Enter OTP"
                      name="otp"
                      autocomplete="off"
                      required
                    />
                  </div>
                  <div className="form-group">
                    {" "}
                    <select
                      className="form-control state"
                      id="state"
                      name="state"
                      required
                    >
                      <option value>Select State</option>
                    </select>{" "}
                  </div>
                  <div className="form-group">
                    {" "}
                    <select
                      className="form-control city"
                      id="city"
                      name="city"
                      required
                    >
                      <option value>Select City</option>
                    </select>{" "}
                  </div>
                  <div className="form-group">
                    {" "}
                    <select
                      className="form-control level"
                      id="level"
                      name="level"
                      required
                    >
                      <option value>Select level</option>
                    </select>{" "}
                  </div>
                  <div className="form-group">
                    {" "}
                    <select
                      className="form-control course"
                      id="city"
                      name="course"
                      required
                    >
                      <option value>Select course</option>
                    </select>{" "}
                  </div>
                  {/* <input type="text" className="form-control" id="current_url" name="current_url"
                                value="<?php echo (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"; ?>"
                                hidden/>
                            <?php $current_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
                            $query_params = [];
                            parse_str(parse_url($current_url, PHP_URL_QUERY), $query_params);
                            $utm_source = isset($query_params['utm_source']) ? htmlspecialchars($query_params['utm_source']) : '';
                            $utm_medium = isset($query_params['utm_medium']) ? htmlspecialchars($query_params['utm_medium']) : '';
                            $utm_campaign = isset($query_params['utm_campaign']) ? htmlspecialchars($query_params['utm_campaign']) : ''; ?> */}
                  <input
                    type="text"
                    name="utm_source"
                    value="<?php echo $utm_source ?>"
                    hidden
                  />{" "}
                  <input
                    type="text"
                    name="utm_medium"
                    value="<?php echo $utm_medium ?>"
                    hidden
                  />{" "}
                  <input
                    type="text"
                    name="utm_campaign"
                    value="<?php echo $utm_campaign ?>"
                    hidden
                  />
                  <div className="form-group d-flex justify-content-center">
                    {" "}
                    <input
                      type="submit"
                      name="submit"
                      value="submit"
                      className="btn btn-primary"
                    />{" "}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECOGNITIONS & APPROVALS Start */}
      <section id="rec">
        <div className="container py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Trust the experts
            </h6>
            <h1 className="mb-5">We're Recognised and Accredited</h1>
          </div>
          <div className="testimonial-carousel position-relative">
            <OwlCarousel
              loop
              dots={false}
              responsive={{
                0: {
                  items: 1,
                  autoplay: true,
                  autoplayTimeout: 1000,
                },
                770: {
                  items: 3,
                  autoplay: true,
                  autoplayTimeout: 1000,
                },
                1000: {
                  items: 5,
                },
              }}
            >
              <div className="testimonial-item text-center">
                <div className="position-relative overflow-hidden row">
                  <img className="img-fluid2" src={rec1} alt="" />
                  <h3 className="text-gradient">UGC</h3>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <div className="position-relative overflow-hidden row">
                  {" "}
                  <img className="img-fluid2" src={rec2} alt="" />
                  <h3 className="text-gradient">PCI</h3>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <div className="position-relative overflow-hidden row">
                  {" "}
                  <img className="img-fluid2" src={rec3} alt="" />
                  <h3 className="text-gradient">BCI</h3>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <div className="position-relative overflow-hidden row">
                  {" "}
                  <img className="img-fluid2" src={rec4} alt="" />
                  <h3 className="text-gradient">AICTE</h3>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <div className="position-relative overflow-hidden row">
                  {" "}
                  <img className="img-fluid2" src={rec5} alt="" />
                  <h3 className="text-gradient">AOU</h3>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      {/* RECOGNITIONS & APPROVALS End */}

      {/* Statistics Start */}
      <section id="statistics">
        <div className="container py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Data-driven insights for informed decision-making
            </h6>
            <h1 className="mb-5">Learn from the Leader</h1>
          </div>
          <div className="layout" id="counter">
            <div className="line-item">
              <div className="value">
                <h2 className="fs-38 primaryColor fontBold">
                  <span
                    className="counter-value fs-38 primaryColor fontBold"
                    data-count="18"
                  >
                    18
                  </span>
                  +
                </h2>
              </div>
              <div className="title">Schools</div>
            </div>
            <div className="line-item">
              <div className="value">
                <h2 className="fs-38 primaryColor fontBold">
                  <span
                    className="counter-value fs-38 primaryColor fontBold"
                    data-count="200"
                  >
                    200
                  </span>
                  +
                </h2>
              </div>
              <div className="title">Expert faculty</div>
            </div>
            <div className="line-item">
              <div className="value">
                <h2 className="fs-38 primaryColor fontBold">
                  <span
                    className="counter-value fs-38 primaryColor fontBold"
                    data-count="30"
                  >
                    30
                  </span>
                  +
                </h2>
              </div>
              <div className="title">Awards of Excellence</div>
            </div>
            <div className="line-item">
              <div className="value">
                <h2 className="fs-38 primaryColor fontBold">
                  <span
                    className="counter-value fs-38 primaryColor fontBold"
                    data-count="5000"
                  >
                    5000
                  </span>
                  +
                </h2>
              </div>
              <div className="title">Applicants</div>
            </div>
            <div className="line-item">
              <div className="value">
                <h2 className="fs-38 primaryColor fontBold">
                  <span
                    className="counter-value fs-38 primaryColor fontBold"
                    data-count="100"
                  >
                    100
                  </span>
                  +
                </h2>
              </div>
              <div className="title">Recruiters</div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics End */}

      {/* Programmes Start */}
      <section id="programmes">
        <div className="container py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Preparing you for the challenges of tomorrow
            </h6>
            <h1 className="mb-5">Our Future-ready Programmes</h1>
          </div>
          <div>
            <div className="tab">
              {" "}
              <button
                className={`tablinks ${activeTab === "PHD" ? "active" : ""}`}
                onClick={() => handleClick("PHD")}
                id="defaultOpen"
              >
                Ph.D.
              </button>{" "}
              <button
                className={`tablinks ${
                  activeTab === "Masters" ? "active" : ""
                }`}
                onClick={() => handleClick("Masters")}
              >
                Masters
              </button>{" "}
              <button
                className={`tablinks ${
                  activeTab === "Bachelors" ? "active" : ""
                }`}
                onClick={() => handleClick("Bachelors")}
              >
                Bachelors
              </button>{" "}
              <button
                className={`tablinks ${
                  activeTab === "Diploma" ? "active" : ""
                }`}
                onClick={() => handleClick("Diploma")}
              >
                Diploma
              </button>{" "}
            </div>

            <div
              id="PHD"
              className="tabcontent"
              style={{ display: activeTab === "PHD" ? "block" : "none" }}
            >
              <div className="phd-carousel position-relative">
                <OwlCarousel
                  loop
                  responsive={{
                    0: {
                      items: 1,
                      autoplay: true,
                      autoplayTimeout: 1000,
                    },
                    770: {
                      items: 3,
                      autoplay: true,
                      autoplayTimeout: 1000,
                    },
                  }}
                >
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course11}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Ph.D. Program (Management)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course4}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Ph.D. Program (Science)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course2}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Ph.D. Program (Commerce)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course3}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Ph.D. Program (Arts & Huminities)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course13}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Ph.D. Program (Engineering & Technology)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course10}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Ph.D. Program (Information & Technology)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course7}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Ph.D. Program (Pharmacy)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course33}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Ph.D. Program (Life Science)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course4}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Ph.D. Program (Yoga & Naturopathy)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course14}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Ph.D. Program (Law)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course24}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Ph.D. Program (Library & Information Science)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course34}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Ph.D. Program (Journalism & Mass Communication)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course5}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Ph.D. Program (Education)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course15}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Ph.D. Program (Hotel Management)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course25}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Ph.D. Program (Media & Entertainment)
                      </p>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              id="Masters"
              className="tabcontent"
              style={{ display: activeTab === "Masters" ? "block" : "none" }}
            >
              <div className="phd-carousel position-relative">
                <OwlCarousel
                  loop
                  responsive={{
                    0: {
                      items: 1,
                      autoplay: true,
                      autoplayTimeout: 1000,
                    },
                    770: {
                      items: 3,
                      autoplay: true,
                      autoplayTimeout: 1000,
                    },
                  }}
                >
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course1}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Law (LLM)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course2}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Arts In Journalism & Mass Communication
                        (MAJMC)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course3}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Arts In Comperitive Religion & Philosophy (MA)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course4}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Arts In Defence Studies (M.A)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course5}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Arts In Economics (M.A)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course6}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Arts In Education (M.A)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course7}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Arts In English (M.A)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course8}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Arts In Geography (M.A)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course9}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Arts In Hindi (M.A)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course10}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Arts In History (M.A)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course11}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Arts In Home Science [M.A]
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course12}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Arts In Marathi(M.A)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course13}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Arts In Political Science(M.A)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course14}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Arts In Psychology (M.A)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course15}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Arts In Public Administration (M.A)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course16}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Arts In Sanskrit (M.A)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course17}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Arts In Sociology (M.A)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course18}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Masters in Business Administration (MBA)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course19}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Computer Applications (MCA)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course20}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Commerce (M. Com)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course21}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Library & Information Science (M. Lib.)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course22}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Pharmacy (M-Pharm)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course23}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Science in Electrononics (MSc-Electrononics)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course24}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Science in Information Technology (MSc-IT)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course25}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Science (MSc)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course26}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Science In Bio Chemistry (MSc)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course27}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Science In Biology (MSc)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course28}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Science In Biotechnology (MSc)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course29}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Science In Botany (MSc)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course30}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Science in Micro Biology (MSc)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course31}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Science In Chemistry (MSc)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course32}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Science In Computer Science (MSc)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course33}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Science In Mathematics (MSc)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course34}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Science In Physics (MSc)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course35}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Science In Zoology (MSc)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course36}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Social Work (MSW)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course37}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Philosophy (M.Phil)</p>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              id="Bachelors"
              className="tabcontent"
              style={{ display: activeTab === "Bachelors" ? "block" : "none" }}
            >
              <div className="phd-carousel position-relative">
                <OwlCarousel
                  loop
                  responsive={{
                    0: {
                      items: 1,
                      autoplay: true,
                      autoplayTimeout: 1000,
                    },
                    770: {
                      items: 3,
                      autoplay: true,
                      autoplayTimeout: 1000,
                    },
                  }}
                >
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course10}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Bachelor of Arts (BA)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course20}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelors in Business Administration (BBA)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course30}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelor of Arts In Journalism & Mass Communication
                        (BA-JMC)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course29}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelors in Business Administration & Bachelors of Law
                        (BBA-LLB)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course19}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelor of Computer Applications (BCA)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course9}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Bachelor of Commerce (B.Com)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course28}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelor of Library & Information Science (B.Lib.)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course18}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Bachelor of Pharmacy (B-Pharma)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course8}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Bachelor of Science (B.Sc.)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course27}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelor of Science in Biotechnology
                        (B.Sc.-Biotechnology)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course17}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelor of Science in Microbiology (B.Sc.-Microbiology)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course7}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelor of Science in Computer Science (B.Sc.CS)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course26}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelor of Science in Fashion Designing (B.Sc.FD)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course16}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelor of Science in Interior Designing (B.Sc.ID)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course6}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelor of Science in Information technology (B.Sc.IT)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course25}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Bachelor of Social Work (BSW)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course15}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Bachelor of Technology (B-Tech)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course5}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelor of Arts Public Administration (BA)
                      </p>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              id="Diploma"
              className="tabcontent"
              style={{ display: activeTab === "Diploma" ? "block" : "none" }}
            >
              <div className="phd-carousel position-relative">
                <OwlCarousel
                  loop
                  responsive={{
                    0: {
                      items: 1,
                      autoplay: true,
                      autoplayTimeout: 1000,
                    },
                    770: {
                      items: 3,
                      autoplay: true,
                      autoplayTimeout: 1000,
                    },
                  }}
                >
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course2}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Diploma in Business Administration (DBA)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course12}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Diploma in Nutrition (DIN)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course22}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Diploma in Engineering (DE)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course32}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Diploma in Journalism and Mass Communication (D-JMC)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course3}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Diploma in Interior Design (DID)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course13}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Diploma in Computer Application (DCA)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course23}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Diploma in Pharmacy [D.Pharm]</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course33}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Diploma in Yoga (DIY)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course4}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Diploma in Naturopathy (DN)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course14}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Diploma in Education</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course24}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Diploma in Hotel Management amd Catering Technology
                        (DHMCT)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course34}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Post Graduate Diploma in Business Administration (PGDBA)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course5}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Post Graduate Diploma in Computer Applications (PGDCA)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course15}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Post Graduate Diploma in Naturopathy (PGD)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course25}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Post Graduate Diploma in Rural Development (PGD)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course35}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Doctor of Philosophy (PHD)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course6}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Post Graduate Diploma in Yoga Science and Naturopathy
                        (PGDYSN)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course16}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Post Graduate Diploma in Nutrition and Dietetics (PGDND)
                      </p>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Programmes End */}

      {/* EXCELLENCE Start */}
      <section id="excellence">
        <div className="container py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3 mb-5">
              Experience excellence in education
            </h6>
          </div>
          <div className="service-row">
            <div className="service-item text-center pt-3">
              <div className="p-4">
                {" "}
                <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                <h5 className="mb-3">Variety of courses</h5>
                <p>
                  Our university offers a variety of courses to meet the needs
                  of every student. From Business to Biology, and from
                  Psychology to Politics, our university provides the right
                  courses to help students reach their educational goals.{" "}
                </p>
              </div>
            </div>
            <div className="service-item text-center pt-3">
              <div className="p-4">
                {" "}
                <i className="fa fa-3x fa-home text-primary mb-4"></i>
                <h5 className="mb-3">Campus Facilities</h5>
                <p>
                  Our university provides a wide range of facilities to ensure
                  that all students have the best possible educational
                  experience. We offer state-of-the-art classNamerooms, computer
                  labs, and libraries; recreational and athletic facilities; and
                  a variety of student services.
                </p>
              </div>
            </div>
            <div className="service-item text-center pt-3">
              <div className="p-4">
                {" "}
                <i className="fa fa-3x fa-book text-primary mb-4"></i>
                <h5 className="mb-3">Library of Knowledge</h5>
                <p>
                  The Library of Knowledge is a comprehensive collection of
                  resources available to students and faculty at our university.
                  It includes books, journals, magazines, and other materials
                  that can be used to further research, expand knowledge, and
                  enhance understanding.
                </p>
              </div>
            </div>
            <div className="service-item text-center pt-3">
              <div className="p-4">
                {" "}
                <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                <h5 className="mb-3">Skilled Instructors</h5>
                <p>
                  {" "}
                  Get ready to learn from the best! Our university provides
                  skilled instructors for your educational needs. Our university
                  is dedicated to providing you with the best educational
                  experience.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* EXCELLENCE End */}

      {/* alumni Start */}
      <section id="alumni">
        <div className="container py-5">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Our Alumni
            </h6>
            <h1 className="mb-5">Working At</h1>
          </div>
          <div className="row g-4 alumni-carousel">
            <OwlCarousel
              loop
              responsive={{
                0: {
                  items: 4,
                  autoplay: true,
                  autoplayTimeout: 5000,
                },
                // 450: {
                //   items: 4,
                //   autoplay: true,
                //   autoplayTimeout: 5000,
                // },
                1000: {
                  items: 4,
                  autoplay: true,
                  autoplayTimeout: 5000,
                },
                1200: {
                  items: 8,
                  autoplay: true,
                  autoplayTimeout: 5000,
                },
              }}
            >
              <div
                className="testimonial-item text-center mx-3 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-item">
                  <div className="overflow-hidden">
                    {" "}
                    <img
                      className="img-fluid"
                      src={alumni1}
                      loading="lazy"
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>
              <div
                className="testimonial-item text-center mx-3 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="team-item">
                  <div className="overflow-hidden">
                    {" "}
                    <img
                      className="img-fluid"
                      src={alumni2}
                      loading="lazy"
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>
              <div
                className="testimonial-item text-center mx-3 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="team-item">
                  <div className="overflow-hidden">
                    {" "}
                    <img
                      className="img-fluid"
                      src={alumni3}
                      loading="lazy"
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>
              <div
                className="testimonial-item text-center mx-3 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="team-item">
                  <div className="overflow-hidden">
                    {" "}
                    <img
                      className="img-fluid"
                      src={alumni4}
                      loading="lazy"
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>
              <div
                className="testimonial-item text-center mx-3 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-item">
                  <div className="overflow-hidden">
                    {" "}
                    <img
                      className="img-fluid"
                      src={alumni5}
                      loading="lazy"
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>
              <div
                className="testimonial-item text-center mx-3 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="team-item">
                  <div className="overflow-hidden">
                    {" "}
                    <img
                      className="img-fluid"
                      src={alumni6}
                      loading="lazy"
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>
              <div
                className="testimonial-item text-center mx-3 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="team-item">
                  <div className="overflow-hidden">
                    {" "}
                    <img
                      className="img-fluid"
                      src={alumni7}
                      loading="lazy"
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>
              <div
                className="testimonial-item text-center mx-3 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="team-item">
                  <div className="overflow-hidden">
                    {" "}
                    <img
                      className="img-fluid"
                      src={alumni8}
                      loading="lazy"
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>
              <div
                className="testimonial-item text-center mx-3 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-item">
                  <div className="overflow-hidden">
                    {" "}
                    <img
                      className="img-fluid"
                      src={alumni9}
                      loading="lazy"
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>
              <div
                className="testimonial-item text-center mx-3 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="team-item">
                  <div className="overflow-hidden">
                    {" "}
                    <img
                      className="img-fluid"
                      src={alumni10}
                      loading="lazy"
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>
              <div
                className="testimonial-item text-center mx-3 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="team-item">
                  <div className="overflow-hidden">
                    {" "}
                    <img
                      className="img-fluid"
                      src={alumni11}
                      loading="lazy"
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>
              <div
                className="testimonial-item text-center mx-3 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="team-item">
                  <div className="overflow-hidden">
                    {" "}
                    <img
                      className="img-fluid"
                      src={alumni12}
                      loading="lazy"
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>
              <div
                className="testimonial-item text-center mx-3 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-item">
                  <div className="overflow-hidden">
                    {" "}
                    <img
                      className="img-fluid"
                      src={alumni13}
                      loading="lazy"
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>
              <div
                className="testimonial-item text-center mx-3 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="team-item">
                  <div className="overflow-hidden">
                    {" "}
                    <img
                      className="img-fluid"
                      src={alumni14}
                      loading="lazy"
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>
              <div
                className="testimonial-item text-center mx-3 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="team-item">
                  <div className="overflow-hidden">
                    {" "}
                    <img
                      className="img-fluid"
                      src={alumni15}
                      loading="lazy"
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>
              <div
                className="testimonial-item text-center mx-3 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="team-item">
                  <div className="overflow-hidden">
                    {" "}
                    <img
                      className="img-fluid"
                      src={alumni16}
                      loading="lazy"
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>
              <div
                className="testimonial-item text-center mx-3 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="team-item">
                  <div className="overflow-hidden">
                    {" "}
                    <img
                      className="img-fluid"
                      src={alumni17}
                      loading="lazy"
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      {/* alumni End */}

      {/* Footer Start */}
      <section
        className="container-fluid bg-dark text-light footer pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                {" "}
                &copy; 2023
                <a
                  className="border-bottom"
                  href="https://isbmuniversity.edu.in/"
                >
                  {" "}
                  ISBM University
                </a>
                , All Right Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer End */}

      {/* Back to Top */}
      <a
        href="#navbar_top"
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}

export default App;
