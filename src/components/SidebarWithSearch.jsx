import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import "./Sidebar.css";
import Navbar from "./Navbar";

function SidebarWithSearch() {
  const [open, setOpen] = useState(
    localStorage.getItem("sidebarOpen")
      ? JSON.parse(localStorage.getItem("sidebarOpen"))
      : 0
  );
  const [activeLink, setActiveLink] = useState(
    localStorage.getItem("activeLink") || ""
  );
  const location = useLocation();
  
  // Lấy vai trò của người dùng từ localStorage
  const role = localStorage.getItem("role");

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("/dashboard/profile/profile-user")) {
      setOpen(3);
      setActiveLink("profile");
    }
  }, [location]);

  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(open));
    localStorage.setItem("activeLink", activeLink);
  }, [open, activeLink]);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex relative bg-gray-100">
      <div className="fixed h-screen w-[14rem] bg-[#0d1730] flex-col justify-between z-10">
        <div className="ml-14rem relative z-0">
          <Navbar />
        </div>
        <Card className="w-full p-4 shadow-2xl shadow-[#0d1730] bg-[#0d1730] h-full relative z-10">
          <img
            src="/src/assets/Logo.png"
            alt="brand"
            className="img-logo ml-1"
          />
          <div className="pt-1 w-[5rem]">
            <Input label="Search" />
          </div>

          <List className="text-white font-body text-sm">
            {role === "CUSTOMER" && (
              <>
                <Typography className="text-white font-body mb-2">Dành cho Người Dùng</Typography>
                <Accordion
                  open={open === 1}
                  icon={
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4 transition-transform ${
                        open === 1 ? "rotate-180" : ""
                      }`}
                    />
                  }
                >
                  <ListItem
                    className="p-0 w-[10rem]"
                    selected={activeLink === "dashboard"}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(1)}
                      className="border-b-0 p-1"
                    >
                      <Typography
                        color="blue-gray-700"
                        className={`mr-auto text-blue-gray-500 font-body text-sm ${
                          activeLink === "dashboard" ? "text-white" : ""
                        }`}
                      >
                        Dịch vụ
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="py-1">
                    <List className="p-0 text-blue-gray-300 font-serif text-sm">
                      <ListItem
                        className={`p-0 w-[10rem] ${
                          activeLink === "analytics" ? "text-white" : ""
                        }`}
                      >
                        <ListItemPrefix>
                          <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                        </ListItemPrefix>
                        <Link
                          to="dashboard/analytics"
                          onClick={() => handleSetActiveLink("analytics")}
                          className={`text-font-serif p-0 w-full ${
                            activeLink === "analytics" ? "text-white" : ""
                          }`}
                        >
                          Danh Sách Dịch Vụ
                        </Link>
                      </ListItem>

                      <ListItem
                        className={`p-0 w-[10rem] ${
                          activeLink === "reporting" ? "text-white" : ""
                        }`}
                      >
                        <ListItemPrefix>
                          <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                        </ListItemPrefix>
                        <Link
                          to="dashboard/reporting"
                          onClick={() => handleSetActiveLink("reporting")}
                          className={`text-font-serif p-0 w-full ${
                            activeLink === "reporting" ? "text-white" : ""
                          }`}
                        >
                          Đặt Lịch
                        </Link>
                      </ListItem>
                      <ListItem className=" p-0 w-[10rem]">
                        <ListItemPrefix>
                          <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                        </ListItemPrefix>
                        <Link
                          to="dashboard/project"
                          onClick={() => handleSetActiveLink("project")}
                          className={`text-font-serif p-0 ${
                            activeLink === "project" ? "text-white" : ""
                          }`}
                        >
                          Xem Thêm Chi Tiết
                        </Link>
                      </ListItem>
                    </List>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === 2}
                  icon={
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4 transition-transform ${
                        open === 2 ? "rotate-180" : ""
                      }`}
                    />
                  }
                >
                  <ListItem
                    className="p-0 w-[10rem]"
                    selected={activeLink === "company"}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(2)}
                      className="border-b-0 p-1"
                    >
                      <Typography
                        color="blue-gray"
                        className={`mr-auto text-blue-gray-500 font-body text-sm ${
                          activeLink === "company" ? "text-white" : ""
                        }`}
                      >
                        Hồ sơ
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="py-1">
                    <List className="p-0 text-blue-gray-300 font-serif text-sm">
                      <ListItem className="p-0 w-[10rem]">
                        <ListItemPrefix>
                          <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                        </ListItemPrefix>
                        <Link
                          to="dashboard/Company"
                          onClick={() => handleSetActiveLink("profile-company")}
                          className={`font-serif p-0 w-full ${
                            activeLink === "profile-company" ? "text-white" : ""
                          }`}
                        >
                          Hồ Sơ Người Dùng
                        </Link>
                      </ListItem>
                      <ListItem className="p-0 w-[10rem]">
                        <ListItemPrefix>
                          <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                        </ListItemPrefix>
                        Kết Quả Khám Bệnh
                      </ListItem>
                    </List>
                  </AccordionBody>
                </Accordion>
              </>
            )}
            {role === "STAFF" && (
              <>
                <Typography className="text-white font-body mb-2">Dành cho Staff</Typography>
                <Accordion
                  open={open === 3}
                  icon={
                    <ChevronDownIcon
                      strokeWidth={3.5}
                      className={`mx-auto h-4 w-4 transition-transform ${
                        open === 3 ? "rotate-180" : ""
                      }`}
                    />
                  }
                >
                  <ListItem
                    className="p-0 w-[10rem]"
                    selected={activeLink === "pages"}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(3)}
                      className="border-b-0 p-1"
                    >
                      <Typography
                        color="blue-gray"
                        className={`mr-auto text-blue-gray-300 font-body text-sm ${
                          activeLink === "pages" ? "text-white" : ""
                        }`}
                      >
                        Hồ Sơ
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="py-1">
                    <List className="p-0 text-blue-gray-300 font-serif text-sm">
                      <ListItem className="p-0 w-[10rem]">
                        <ListItemPrefix>
                          <ChevronRightIcon strokeWidth={4} className="h-3 w-5" />
                        </ListItemPrefix>
                        <Link
                          to="dashboard/home"
                          onClick={() => handleSetActiveLink("home")}
                          className={`font-serif p-0 ${
                            activeLink === "home" ? "text-white" : ""
                          }`}
                        >
                          Home
                        </Link>
                      </ListItem>
                      <ListItem
                        className={`p-0 w-[10rem] ${
                          activeLink === "profile" ? "text-white" : ""
                        }`}
                      >
                        <ListItemPrefix>
                          <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                        </ListItemPrefix>
                        <Link
                          to="dashboard/Profile"
                          onClick={() => handleSetActiveLink("profile")}
                          className={`font-serif p-0 w-full ${
                            activeLink === "profile" ? "text-white" : ""
                          }`}
                        >
                          Profile
                        </Link>
                      </ListItem>
                    </List>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === 4}
                  icon={
                    <ChevronDownIcon
                      strokeWidth={4.5}
                      className={`mx-auto h-4 w-4 transition-transform ${
                        open === 4 ? "rotate-180" : ""
                      }`}
                    />
                  }
                >
                  <ListItem
                    className="p-0 w-[10rem]"
                    selected={activeLink === "authentication"}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(4)}
                      className="border-b-0 p-1"
                    >
                      <Typography
                        color="blue-gray"
                        className={`mr-auto text-blue-gray-300 font-body text-sm ${
                          activeLink === "authentication" ? "text-white" : ""
                        }`}
                      >
                        Authentication
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="py-1">
                    <List className="p-0 text-blue-gray-300 font-serif text-sm">
                      <ListItem className="p-0 w-[10rem]">
                        <ListItemPrefix>
                          <ChevronRightIcon strokeWidth={5} className="h-3 w-5" />
                        </ListItemPrefix>
                        Sign-up
                      </ListItem>
                      <ListItem className="p-0 w-[10rem]">
                        <ListItemPrefix>
                          <ChevronRightIcon strokeWidth={5} className="h-3 w-5" />
                        </ListItemPrefix>
                        Sign-in
                      </ListItem>
                      <ListItem className="p-0 w-[12rem] ">
                        <ListItemPrefix>
                          <ChevronRightIcon strokeWidth={5} className="h-3 w-5" />
                        </ListItemPrefix>
                        Create-Password
                      </ListItem>
                      <ListItem className="p-0 w-[12rem]">
                        <ListItemPrefix>
                          <ChevronRightIcon strokeWidth={5} className="h-3 w-5" />
                        </ListItemPrefix>
                        <Link
                          to="dashboard/authentication/forgotpassword"
                          onClick={() => handleSetActiveLink("forgotpassword")}
                          className={`text-font-serif p-0 w-full ${
                            activeLink === "forgotpassword" ? "text-white" : ""
                          }`}
                        >
                          Reset-Password
                        </Link>
                      </ListItem>
                      <ListItem className="p-0 w-[12rem]">
                        <ListItemPrefix>
                          <ChevronRightIcon strokeWidth={5} className="h-3 w-5" />
                        </ListItemPrefix>
                        Forgot-Password
                      </ListItem>
                    </List>
                  </AccordionBody>
                </Accordion>
              </>
            )}
          </List>
        </Card>
      </div>
      <div className="flex-1 ml-[15rem] mt-20">
        <Outlet />
      </div>
    </div>
  );
}

export default SidebarWithSearch;
