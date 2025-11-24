// App.js
import React, { useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import noBG from "./images/ImprovedNoBg.png";
import Chatbot from "./components/chatbot";
import HomePage from "./components/homepage";
import useGlobalState from "./components/globalState";


const sections = [
  { id: "about", label: "About the Company" },
  { id: "objectives", label: "The Objectives" },
  { id: "mission", label: "Missions and Vision" },
  { id: "membership", label: "Membership and Eligibility" },
  { id: "targets", label: "Targets" },
  { id: "liaisons", label: "Liaison Partners" },
  { id: "executives", label: "Executives" },
  { id: "HelpDesk", label: "HelpDesk" },
];


export default function App() {

  const {chatOpen, setChatOpen, sidebarOpen, setSidebarOpen, toggleSidebar, sidebarWidth} = useGlobalState();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setSidebarOpen(!sidebarOpen);
    }
    // else if (id === "HelpDesk"){
    //   setChatOpen(!chatOpen);
    // }
  };

  const [hoverIndex, setHoverIndex] = useState(null);

  return (

    <div className="d-flex" 
    style={{
      maxWidth: "100vw", 
      backgroundColor: "#F6F1D3",
    }}>
      {/* Sidebar */}
      <div
        className= {sidebarOpen ? "bg-success border": ""}
        style={{
          maxWidth: sidebarWidth,
          boxSizing: "border-box",
          transition: "width 1.5s",
          overflowX: "hidden",
          position: "fixed",
          height: sidebarOpen ? "100%": "6%" ,
          top: "0",
          left: 0,
          zIndex: 1000,
          borderBottomRightRadius: "30px",
          borderTopRightRadius: "30px",
          display: "flex",
          flexDirection: "column",
          contain: "contents"
        }}
      >
        <div className="d-flex flex-column align-items-center">
          <button
            className="btn btn-outline-success mb-3"
            onClick={toggleSidebar}
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
            style={{
              alignSelf: "end",
              padding: "5px",
              color: "#009B77", 
              fontSize: "30px",
              fontWeight: "bolder",
            }}
          >
            {sidebarOpen ? "X" : "☰"}
          </button>

          <div class="p-1 text-center">
              <img src={noBG} alt="ESDAAN Logo" class="img-fluid" 
              style={{
                maxWidth: "150px", 
                display: sidebarOpen ? "flex" : "none",
                flexShrink: 0,
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
                  height: hoverIndex === section.id ? "40px" : "25px",
                  fontSize: hoverIndex === section.id ? "larger" : "large",
                  fontWeight: hoverIndex === section.id ? "bolder": 600,
                  color: hoverIndex === section.id ? "rgba(var(--bs-success-rgb), var(--bs-bg-opacity))" : "antiquewhite",
                  backgroundColor: hoverIndex === section.id && "#FFD700",
                  padding: "25px",
                  display: chatOpen ? "none" : "block",
                }}
                onMouseEnter={() => setHoverIndex(section.id)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {section.label}
              </button>
            ))}

            {/* <Chatbot/> */}
        </div>
      </div>

      {/* Main Content */}
      <HomePage/> 

  
      {/* Back to Top Button */}
      <button className=""
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed",
          bottom: 30,
          right: 30,
          border: "none",
          borderRadius: "50%",
          width: 50,
          height: 50,
          color: "#FFD700",
          fontSize: "24px",
          cursor: "pointer",
          zIndex: 1050,
         backgroundColor: "	#009B77",
        }}
        aria-label="Back to the top"
      >
        <b style={{fontSize: "20px", fontWeight: "bolder"}}>TOP</b><br />
        
      </button>
    </div>

    
  );
}