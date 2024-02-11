import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { Footer, Navbar, Sidebar, ThemeSettings } from "./components";
import {
  Area,
  Bar,
  Calendar,
  ColorMapping,
  ColorPicker,
  Employees,
  Financial,
  Line,
  Pie,
  Pyramid,
  Sprint,
  Stacked,
} from "./pages";
import { useStateContext } from "./contexts/ContextProvider";
// import Springform from "./components/Sprint Form/Springform";
import Customer from "./components/Customer/Customer";
// import Springform from "./components/Sprint_Form/Sprint_form";
import Dashboard from "./pages/Dashboard/Dashboard";
import Springform from "./components/Sprint_Form/Sprint_form";
import LoginPage from "./pages/LoginPage";
import FeedbackCard from "./components/FeedbackCard";
import Analytics from "./pages/Analytics/Analytics";
import EmailSend from "./components/EmailSend";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* SprintForm  */}
                <Route path="/sprintform" element={<Springform />} />
                <Route path="/login" element={<LoginPage />} />
                {/* dashboard  */}
                {/* Projects  */}
                <Route path="/roadmap" element={<Calendar />} />
                {/* dashboard  */}
                <Route path="/" element={<Dashboard />} />
                {/* pages  */}
                <Route path="/employees" element={<Employees />} />

                {/* apps  */}
                <Route path="/sprints" element={<Sprint />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/feedback" element={<Customer />} />
                <Route path="/customerfeedback" element={<FeedbackCard />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/sendMail" element={<EmailSend />} />

                {/* <Route path="/area" element={<Area />} />

                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
                <Route path="/sprintform" element={<Springform />} /> */}
              </Routes>
            </div>
            {/* <Footer /> */}
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
