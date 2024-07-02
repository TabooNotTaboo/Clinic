import React from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import SidebarWithSearch from "./components/SidebarWithSearch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <SidebarWithSearch />
        </div>
        <ToastContainer />
      </Router>
    </Provider>
  );
};

export default App;
