import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
import DogPics from "./session2-takehome/DogPics";
import UserDashboard from "./session1-takehome/UserDashboard";
import BookAppointment from "./session3-takehome/BookAppointment";
import InterviewChallenge from "./InterviewChallenge/InterviewChallenge";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// root.render(<App />);
// root.render(<UserDashboard />);
// root.render(<DogPics />);
// root.render(<BookAppointment />);
root.render(<InterviewChallenge />);

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   // <StrictMode>
//   <App />
//   // </StrictMode>
// );
