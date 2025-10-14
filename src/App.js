// App.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import images from "./images/gen_image";
import noBG from "./images/ImprovedNoBg.png";


const sections = [
  { id: "about", label: "About the Company" },
  { id: "objectives", label: "The Objectives" },
  { id: "mission", label: "Missions and Vision" },
  { id: "membership", label: "Membership and Eligibility" },
  { id: "targets", label: "Targets" },
  { id: "liaisons", label: "Liaison Partners" },
  { id: "executives", label: "Executives" },
];




export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setSidebarOpen(!sidebarOpen);
    }
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const [hoverIndex, setHoverIndex] = useState(null);
  //const [sidebarWidth, setSidebarWidth] = useState(300);

  const sidebarWidth = () => {
    if (window.innerWidth > 1000) {
      return sidebarOpen ? "15vw": "6vw"
    }
    else{
      return sidebarOpen ? "25vw": "6vw"
    }
  }



  return (

    <div className="d-flex" style={{maxWidth: "100vw"}}>
      {/* Sidebar */}
      <div
        className="bg-success border"
        style={{
          width: sidebarWidth,
          transition: "width 1s",
          overflowX: "hidden",
          position: "fixed",
          height: sidebarOpen ? "100%": "6%" ,
          top: sidebarOpen ? "0" : "1%",
          left: 0,
          zIndex: 1000,
          borderBottomRightRadius: "30px",
          borderTopRightRadius: "30px",
        }}
      >
        <div className="d-flex flex-column align-items-center py-3">
          <button
            className="btn btn-outline-success mb-3"
            onClick={toggleSidebar}
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
            style={{
              alignSelf: "end",
              marginRight: "5px",
              color: "cyan", 
              fontSize: "larger",
              fontWeight: "bolder",
            }}
          >
            {sidebarOpen ? "X" : " ☰"}
          </button>

          <div class="p-1 text-center">
                <img src={noBG} alt="ESDAAN Logo" class="img-fluid" 
                style={{
                  maxWidth: "150px", 
                  display: sidebarOpen ? "flex" : "none"
                }}></img>
        
            </div>


          {sidebarOpen &&
            sections.map((section) => (
              
              <button
                key={section.id}
                className="btn btn-link text-start w-100"
                onClick={() => scrollToSection(section.id)}
                style={{
                  textDecoration: "none",
                  alignSelf: "center",
                  height: hoverIndex === section.id ? "40px" : "25",
                  fontSize: hoverIndex === section.id ? "larger" : "large",
                  fontWeight: hoverIndex === section.id ? "bolder": 600,
                  color: hoverIndex === section.id ? "rgba(var(--bs-success-rgb), var(--bs-bg-opacity))" : "antiquewhite",
                  backgroundColor: hoverIndex === section.id ? "white" : "rgba(var(--bs-success-rgb), var(--bs-bg-opacity))",
                  margin: "30px",
                }}
                onMouseEnter={() => setHoverIndex(section.id)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {section.label}
              </button>
            ))}

          {/* {!sidebarOpen &&
            sections.map((section) => (
              <button
                key={section.id}
                className="btn btn-link px-1 py-2"
                onClick={() => scrollToSection(section.id)}
                title={section.label}
                style={{
                  textDecoration: "none",
                  alignSelf: "center",
                  height: hoverIndex === section.id ? "40px" : "25",
                  fontSize: hoverIndex === section.id ? "larger" : "large",
                  fontWeight: hoverIndex === section.id ? "bolder": 600,
                  color: hoverIndex === section.id ? "blue" : "antiquewhite",
                  backgroundColor: hoverIndex === section.id ? "white" : "rgba(var(--bs-primary-rgb), var(--bs-bg-opacity))",
                  margin: "30px",
                }}
              >
                {section.label.charAt(0)}
              </button>
            ))} */}
        </div>
      </div>

      {/* Main Content */}

      <div className="mb-1 container-fluid"
        onClick={sidebarOpen ? toggleSidebar: console.log("trying")  }

        style={{
          marginLeft: sidebarWidth(),
          paddingLeft: "5%",
          boxSizing: "border-box",
          flexGrow: 1,
          flexWrap: "wrap",
          transition: "margin-left 0.8s",
          maxWidth: `calc(100vw - ${sidebarWidth()}px)`,
        }}
      >
        
        {/* Sections */}

        <section className="mb-5 mt-2 container-fluid bg-success" 
          style={{
            display: "flex", 
            textAlign: "center",
            // position: "ab",
            top: 0,
            color: "white",
            alignSelf: "center",
            zIndex: 1000,
            paddingLeft: "0px",
            borderRadius: "20px"
          }}
        >
          <div class="d-flex " style={{height: "20vh"}}>
            <div class="flex-shrink-0 ms-0 ps-0">
              <img src={noBG} alt="ESDAN" class="h-100 w-auto d-block" style={{borderRadius: "19px"}}/>
            </div>

            
            <div class="flex-grow-1 p-1 d-flex align-items-start">
              <h2 class="mb-0" style={{fontSize: "clamp(1.5rem, 5vw, 3rem)", textAlign: "center"}}>
                <b>ECONOMIC AND SOCIAL DEVELOPMENT AMBASSADORS OF NIGERIA</b>
              </h2>
            </div>
          </div>

        </section>

        

        <section id="about" className="mb-5 container-fluid py-4">
          <h2 class="text-start">About the Company</h2>
          <div className="mb-5 mt-5 container py-4" style={{ display: 'flex' }}>

            <img src= {images.group} alt="1" 
            className="card-img-top img-fluid rounded-3"
            style={{
              height: "auto",
              width: "25vw",
              flex: 1,
            }} 
          />
          </div>
          
          <p>
            In today’s rapidly evolving global economy, Africa — and particularly Nigeria — stands at a defining crossroads. The continent is rich in natural resources, human capital, and innovation potential, yet continues to grapple with challenges such as unemployment, under-industrialization, weak infrastructure, and socioeconomic inequality.

            Amidst these challenges emerges ESDAN CICS Multipurpose and Investment Limited — a forward-thinking Nigerian organization committed to designing and implementing sustainable, inclusive, and impact-driven solutions.

            ESDAN, an acronym for Economic and Social Development Ambassadors of Nigeria, brings together professionals from diverse disciplines with one shared purpose: to redefine development through innovation, enterprise, and collaboration.
          </p>

          <p>
            ESDAN CICS Multipurpose and Investment Limited is a registered entity with the Corporate Affairs Commission (CAC) in Nigeria.

            The organization is more than a company — it is a movement of development-minded professionals dedicated to advancing the economic and social transformation of Nigeria and Africa.

            The team behind ESDAN represents experts from fields such as agriculture, education, technology, finance, transportation, manufacturing, and security, united by the belief that sustainable development begins with practical, locally driven initiatives.

            ESDAN operates with a strong sense of purpose: to bridge the gap between policy and practice, and to build systems that empower people, strengthen institutions, and transform communities.
          </p>
        </section>

        <section id="objectives" className="mb-5 containerfluid py-4" style={{paddingLeft: "2%"}}>
          <h2 class="text-start">The Objectives</h2>
          <p>
            <h4>Our Core Philosophy</h4>

            At ESDAN, we believe that economic progress and social wellbeing are inseparable.
            Development is not just about GDP growth — it’s about empowering individuals, creating jobs, educating the youth, and ensuring peace and inclusiveness.

            We see Nigeria not as a country of problems, but as a nation of possibilities.
            Through strategic investments and partnerships, ESDAN seeks to unlock these possibilities, turning challenges into opportunities for innovation, entrepreneurship, and transformation.
          </p>

          <p>
            <h4>Our Objectives</h4>
            <ul>
              <li>To promote entrepreneurship and wealth creation through innovative investment in agriculture, industry, and trade.</li>
              <li>To reform educational systems by integrating technology and practical skills training into youth development.</li>
              <li>To foster industrial transformation that reduces dependency on imports and increases local production capacity.</li>
              <li>To strengthen transportation networks with modern, safe, and sustainable mobility systems.</li>
              <li>To build peace and social harmony, recognizing that sustainable development cannot exist without security and inclusiveness.</li>
              <li>To support rural and community development, ensuring that prosperity reaches even the most underserved areas.</li>
            </ul>
          </p>
        </section>

        <section id="mission" className="mb-5 container-fluid py-4">
          <h2>Missions and Vision</h2>
          <p>
            <div className="mb-5 container-fluid py-4">
              <div className="row">
                <div div className="mt-5 col-12 col-md-6 mb-3">
                  <h3> Our Mission</h3>
                  To contribute effectively to economic and social development programmes and projects across Nigeria — initiatives that enhance living standards, promote inclusive growth, and foster sustainable prosperity.
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <img
                    src={images.farmer}
                    alt="Economic and Social Image of Africa and Nigeria"
                    className="mb-3 img-fluid card-img-top rounded-3"
                  />
                </div>
              </div>
            </div>     


            
            <div className="mb-5 container-fluid py-4">
              <div className="row">
                <div className="mt-5 col-12 col-md-6 mb-3">
                  <h3> OUR VISION</h3>
                  To design and implement socioeconomic development plans that strengthen social cohesion and accelerate national development across multiple sectors, including:
                  <ul className="mt-5">
                    <li>Agriculture and Food Security</li>
                    <li>Education and Human Capital Development</li>
                    <li>Transportation and Logistics Innovation</li>
                    <li>Industrialization and Manufacturing</li>
                    <li>Security and Peacebuilding</li>
                  </ul>
                </div>
              
                <div className="mt-5 col-12 col-md-6 mb-3">
                  <img
                    src={images.image1}
                    alt="Economic and Social Image of Africa and Nigeria"
                    className="mb-3 img-fluid card-img-top rounded-3"
                  />
                </div>
              </div>
            </div>
            
          </p>
        </section>

        <section id="membership" className="mb-5 container-fluid py-4">
          <h2>Membership and Eligibility</h2>
          <p>
            ESDAN welcomes individuals and organizations who share our belief in progress, innovation, and inclusive development.

            Eligibility Requirements:

            <ul>
              <li>Must be a Nigerian or non-Nigerian committed to the vision of global development.</li>
              <li>Must be literate, with the ability to read and write.</li>
              <li>Must possess a genuine interest in economic empowerment and social transformation.</li>
              <li>Professionals, entrepreneurs, investors, researchers, and civil society actors are encouraged to join.</li>
              <li>Membership in ESDAN offers a unique opportunity to be part of a national network of changemakers, contributing ideas, resources, and skills toward a more prosperous Nigeria and Africa.</li>
            </ul>
          </p>
        </section>

        <section id="targets" className="mb-5 container-fluid py-4">
          <h2>Our Strategic Development Projects</h2>
          <p>
            ESDAN’s development agenda is structured around five major focus areas, designed to stimulate growth, generate employment, and foster long-term national resilience.
          </p>
          <div>
            <ol>

              <li className="mt-5 mb-5">
                <h3 className="mb-1">Agricultural Value Chain Development</h3>

                <div className="mb-5 container-fluid py-4">
                  <div className="row">
                    <div className="mt-5 mcol-12 col-md-6 mb-3">
                      <img
                        src={images.image1}
                        alt="Economic and Social Image of Africa and Nigeria"
                        className="mb-3 img-fluid card-img-top rounded-3"
                      />
                    </div>

                    <div className="mt-5 mcol-12 col-md-6 mb-3">
                      <p>
                        Agriculture is the lifeline of Nigeria’s economy, employing millions and providing the foundation for food security and industrial growth.

                        ESDAN’s agricultural initiatives aim to modernize the sector by promoting productivity, sustainability, and profitability across the entire value chain — from farm to factory to market.
                      </p>

                      <p>
                        <ul>
                          <p>Key Focus Areas:</p>
                          <li>Livestock Development: Animal breeding, meat and milk production, feed manufacturing (pasturing, pellet feeds), and leather processing.</li>
                          <li>Crop Production: Commercial farming, raw material supply for manufacturing, and food processing.</li>
                          <li>Agro-industrial Integration: Establishment of processing plants that reduce waste and increase value addition.</li>
                          <li>Food Hubs and Distribution Centers: Establishment of regional “one-stop” markets designed to serve as modern trading and logistics centers.</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  <ul>
                    <p>Target Locations:</p>
                    <li>South West Nigeria: Akinyele, Ibadan Toll Gate, Shagamu, Ojodu, Sango Ota, Panseke/MKO Stadium, Ikorodu, Ojota/Ketu, Epe, Ajah, Surulere</li>
                    <li>South-South: Port Harcourt</li>
                    <li>North Central: Abuja</li>
                    <li>Each hub will include:</li>
                    <li>Mechanic Village</li>
                    <li>Transport Terminals</li>
                    <li>Major Food Market</li>
                    <li>Household Goods Market</li>
                    <li>Recreational Center</li>
                    <li>Canteen & Guest House</li>
                  </ul>
                </p>
                
                <p>These hubs will create thousands of jobs, improve food accessibility, and stimulate regional economic growth.</p>
              </li>

              <li className="mt-5 mb-5">
                <h3 className="mb-1">Educational Reform and Human Capital Development</h3>
              

                <div className="mb-5 container-fluid py-4">
                  <div className="row">
                    <div className="mt-5 mcol-12 col-md-6 mb-3">
                      <p>
                        Education is the heartbeat of any progressive society.
                        ESDAN is determined to reshape Nigeria’s educational landscape by integrating technology, innovation, and entrepreneurship training into the learning process.
                      </p>

                      <p>
                        <ul className="mt-5">
                          <h4>Our educational programs aim to:</h4>
                          <li className="mt-5">Partner with institutions to transfer global knowledge and innovation to Nigerian youth.</li>
                          <li className="mt-5">Equip students with skills relevant to the digital economy.</li>
                          <li className="mt-5">Support vocational and technical training to reduce unemployment.</li>
                          <li className="mt-5"  >Build innovation hubs and research centers across Nigeria.</li>

                          <p className="mt-5">By investing in people, we are building the foundation for sustainable national development.</p>
                        </ul>
                      </p>
                    </div>

                    <div className="mt-5 mcol-12 col-md-6 mb-3">
                      <img
                        src={images.tech3}
                        alt="Economic and Social Image of Africa and Nigeria"
                        className="mb-3 img-fluid card-img-top rounded-3"
                      />
                    </div>
                  </div>
                </div>
              </li>

              <li className="mt-5 mb-5">
                <h3 className="mb-1">Industrial Development</h3>

                <div className="mb-5 container-fluid py-4">
                  <div className="row">
                    <div className="mt-5 mcol-12 col-md-6 mb-3">
                      <p>
                        Through its agricultural and transportation initiatives, ESDAN aims to fuel Nigeria’s industrial renaissance.
                        Our projects will promote local manufacturing, industrial clustering, and value chain integration.
                      </p>
                      
                      <p>
                        <ul>
                        Key focus areas include:
                        <li>Establishment of agro-industrial parks.</li>
                        <li>Development of auto assembly and component manufacturing plants.</li>
                        <li>Promotion of SMEs in food, textile, and machinery sectors.</li>
                        <li>Encouragement of sustainable energy use in industrial operations.</li>
                        </ul>
                      </p>

                    </div>
                
                    <div className="mt-5 mcol-12 col-md-6 mb-3">
                      <img
                        src={images.tech5}
                        alt="Economic and Social Image of Africa and Nigeria"
                        className="mb-3 img-fluid card-img-top rounded-3"
                      />
                    </div>
                  </div>
                </div>
                <p>
                  Industrialization remains the engine of economic transformation, and ESDAN is committed to driving it through partnerships, policy advocacy, and direct investment.
                </p>

              </li>

              <li>
                <h3 className="mb-1">Security and Peace Initiatives</h3>

                <div className="mb-5 container-fluid py-4">
                  <div className="row">
                    <div className="mt-5 mcol-12 col-md-6 mb-3">
                      <p>
                        No nation can develop amidst insecurity.
                        ESDAN integrates peacebuilding and community security programs into its development agenda, emphasizing collaboration with traditional institutions, security agencies, and youth organizations.

                        Our initiatives focus on:
                      </p>

                      <p>
                        <ul>
                          <li>Conflict prevention and dialogue facilitation.</li>
                          <li>Youth rehabilitation and engagement in peace projects.</li>
                          <li>Socioeconomic inclusion as a tool for security.</li>
                          <li>Promoting peace education and tolerance across communities.</li>
                        </ul>
                      </p>
                    </div>

                    <div className="mt-5 mcol-12 col-md-6 mb-3">
                      <img
                        src={images.tech4}
                        alt="Economic and Social Image of Africa and Nigeria"
                        className="mb-3 img-fluid card-img-top rounded-3"
                      />
                    </div>
                  </div>
                </div>
              </li>

            </ol>

            <p>
              Building the Africa We Want

              ESDAN CICS Multipurpose and Investment Limited is more than an organization — it is a movement for change, a platform for collaboration, and a catalyst for sustainable growth.

              Our mission is to create a Nigeria — and an Africa — that thrives on innovation, inclusivity, and prosperity for all.
              Through our projects, partnerships, and purpose-driven leadership, we are laying the foundation for a stronger, self-reliant continent that will no longer depend on aid, but on its own ingenuity and productivity.

              Together, we can transform today’s challenges into tomorrow’s opportunities — and make ESDAN a household name in the story of Africa’s rebirth.
            </p>
          </div>
        </section>

        <section id="liaisons" className="mb-5 container-fluid py-4">
          <h2>Liaison Partners</h2>
          <div className="mb-5 container-fluid py-4">
              <div className="row">
                <div div className="mt-5 col-12 col-md-6 mb-3">
                  <p>
                    Strategic Partnerships and Collaborations

                    ESDAN works closely with national and international partners to ensure project success.

                    Our current and prospective partners include:
                    <ul>
                      <li>Oyo State College of Agriculture and Technology</li>
                      <li>Federal Institute of Industrial Research (FIIRO), Oshodi</li>
                      <li>International Institute of Tropical Agriculture (IITA)</li>
                      <li>Miyetti Allah Kauta Hore Fulani Socio-Cultural Association</li>
                      <li>Isolfad International Company Limited</li>
                      <li>Demy Tee Ventures</li>
                      <li>Artee Group (SPAR)</li>
                      <li>Farming in Africa</li>
                      <li>Globacom Limited</li>
                    </ul>
                    </p>
                  </div>

                  <div div className="mt-5 col-12 col-md-6 mb-3">
                    <img
                      src={images.tech4}
                      alt="Economic and Social Image of Africa and Nigeria"
                      className="mb-3 img-fluid card-img-top rounded-3"
                    />
                  </div>
                </div>
              </div>

            <p>
            These collaborations bring together research, technology, finance, and community engagement — the essential ingredients for transformative development.
          </p>
        </section>

        <section id="executives" className="mb-5 container-fluid py-4">
          <h1 className="mb-5">Meet Our Executives</h1>

          {/* <div style={{flex: 1}}>
                <img
                  src={images.farmer}
                  alt="Economic and Social Image of Africa and Nigeria"
                  className="mb-3 img-fluid card-img-top rounded-3"
                   
                />
          </div> */}

          <div className="exe" style={{justifyItems: "center", textAlign: "center", marginTop: "50px"}}>
            {/* <div id="head">
                <h4>Who are extremely in love with eco freindly system.</h4>
            </div> */}

            <div className="bottom">
                <img 
                  src={images.tech1} 
                  alt="Economic and Social Image of Africa and Nigeria"
                  className="mb-3 img-fluid card-img-top rounded-3"
                   style={{
                    height: "20vh",
                    width: "auto",
                    alignSelf: "center",
                    alignItems: "center",
                    borderRadius: "20px",
                  }}
                />
                <h3>Dr. Prince Ademola Yisau Adegoke</h3>
                <h5>Chairman / CEO</h5>
            </div>

            <div className="bottom">
                <img 
                  src={images.tech2} 
                  alt="Economic and Social Image of Africa and Nigeria"
                  className="mb-3 img-fluid card-img-top rounded-3"
                   style={{
                    height: "20vh",
                    width: "auto",
                    alignSelf: "center",
                    alignItems: "center",
                    borderRadius: "20px",
                  }}
                />
                <h3>Dr. Temitope Ademola Afolabi</h3>
                <h5>Head, Agric Revolution</h5>
            </div>

            <div className="bottom">
                <img 
                  src={images.tech3} 
                  alt="Economic and Social Image of Africa and Nigeria"
                  className="mb-3 img-fluid card-img-top rounded-3"
                   style={{
                    height: "20vh",
                    width: "auto",
                    alignSelf: "center",
                    alignItems: "center",
                    borderRadius: "20px",
                  }}
                />
                <h3>Engr. SO Lawal</h3>
                <h5>Technical Advisorr</h5>
            </div>

            <div className="bottom">
                <img 
                  src={images.tech4} 
                  alt="Economic and Social Image of Africa and Nigeria"
                  className="mb-3 img-fluid card-img-top rounded-3"
                   style={{
                    height: "20vh",
                    width: "auto",
                    alignSelf: "center",
                    alignItems: "center",
                    borderRadius: "20px",
                  }}
                />
                <h3>Comr. Adegoke Adewale </h3>
                <h5>Lead Developer (IT) </h5>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-top mt-5 bg-success container-fluid py-2" 
        style={{maxWidth: `calc(100vw - ${sidebarWidth()}px)`,
                paddingLeft: "20px",
                maxHeight: "25vh",
                borderRadius: "3vh"
        }}>
          <h3>Contact Info: </h3>
          <p><img 
                  src={images.Gmail} 
                  alt="Economic and Social Image of Africa and Nigeria"
                  className="mb-3 img-fluid card-img-top rounded-3"
                   style={{
                    height: "3vh",
                    width: "auto",
                    alignSelf: "center",
                    alignItems: "center",
                    borderRadius: "20px",
                  }}
                />
                <a 
                  class="text-decoration-none text-reset"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=example@domain.com&su=New%20Contact&body=Name%3A%20%0AContact%20info%3A%20%0A%0AEnquiry:%2C%0A" target="_blank" rel="noreferrer">Email: info@company.com </a></p>
          <p><img 
                  src={images.WhatsApp} 
                  alt="Economic and Social Image of Africa and Nigeria"
                  className="mb-2 img-fluid card-img-top rounded-3"
                   style={{
                    height: "3vh",
                    width: "auto",
                    alignSelf: "center",
                    alignItems: "center",
                    borderRadius: "20px",
                  }}
                />Phone: +123 456 7890</p>
          <p>
                Address: 123 Company St, City, Country</p>
        </footer>
      </div>

      {/* Back to Top Button */}
      <button className="bg-success"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "50%",
          width: 50,
          height: 50,
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
          zIndex: 1050,
          // backgroundImage: `url(${Main_logo})`
        }}
        aria-label="Back to the top"
      >
        ↑
        <div style={{ fontSize: "20px", color: "#207a4dff", fontWeight: "medium", }}>top</div>
      </button>
    </div>
  );
}