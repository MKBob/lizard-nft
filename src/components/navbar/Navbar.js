import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Navbar.css";
import { useState } from "react";
import { Box, Button, Drawer, IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div>
      <header className="navBarHeader">
        <Grid container justifyContent="space-evenly">
          <Grid item xs={11} lg={11} className="navBar">
            <div className="navBarLogo">
              <img className="navBarLogoImg" src="./Assets/logo.png" />
            </div>
            <div className="navBar">
              <div className="navBarList">
                <ul className="NavBarLists">
                  <li>
                    <Link
                      activeClass="active"
                      to="Home"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={500}
                      delay={400}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                      spyThrottle={500}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="About"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={500}
                      delay={400}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                      spyThrottle={500}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="Roadmap"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={500}
                      delay={400}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                      spyThrottle={500}
                    >
                      Roadmap
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="Faqs"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={500}
                      delay={400}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                      spyThrottle={500}
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="our team"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={500}
                      delay={400}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                      spyThrottle={500}
                    >
                      Our Team
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* ==========================DROPDRWN========================= */}
            <div className="navbar-btns">
              <div className="dropDown">
                <div
                  className="dropDown-btn"
                  onClick={(e) => setIsActive(!isActive)}
                >
                  <h4>Our Socials</h4>{" "}
                  <span>
                    <ExpandMoreIcon className="btn-Icon" />
                  </span>
                </div>
                {isActive && (
                  <div className="dropDown-content">
                    <div className="dropDown-item">
                      <div className="dropDown-itemIcon">
                        <img src="./Assets/discord.png" />
                      </div>
                      <div className="dropDown-itemText">Discord</div>
                    </div>
                    <div className="dropDown-item">
                      <div className="dropDown-itemIcon">
                        <img src="./Assets/instLogo.png" />
                      </div>
                      <div className="dropDown-itemText">Instagram</div>
                    </div>
                    <div className="dropDown-item">
                      <div className="dropDown-itemIcon">
                        <img src="./Assets/opensea.svg" />
                      </div>
                      <div className="dropDown-itemText">OpenSea</div>
                    </div>
                  </div>
                )}
              </div>
              {/* =================================================================== */}

              {/* ===============================DREAWER========================================== */}
              <div className="navbarDrawer">
                <IconButton
                  className="sideBarMenu"
                  size="large"
                  edge="start"
                  aria-label="logo"
                  onClick={() => setIsDrawerOpen(true)}
                >
                  <MenuIcon className="sideBarMenuIcon" />
                </IconButton>
                <Drawer
                  anchoe="left"
                  open={isDrawerOpen}
                  onClose={() => setIsDrawerOpen(false)}
                >
                  <Box
                    className="sideBar"
                    width="50%"
                    textAlign={"center"}
                    role="presentation"
                  >
                    <ul className="sideBarLists">
                      <li>
                      <Link
                      activeClass="active"
                      to="Home"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={500}
                      delay={400}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                      spyThrottle={500}
                    >
                      Home
                    </Link>
                      </li>
                      <li>
                      <Link
                      activeClass="active"
                      to="About"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={500}
                      delay={400}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                      spyThrottle={500}
                    >
                      About
                    </Link>
                      </li>
                      <li>
                      <Link
                      activeClass="active"
                      to="Roadmap"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={500}
                      delay={400}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                      spyThrottle={500}
                    >
                      Roadmap
                    </Link>
                      </li>
                      <li>
                      <Link
                      activeClass="active"
                      to="Faqs"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={500}
                      delay={400}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                      spyThrottle={500}
                    >
                      FAQs
                    </Link>
                      </li>
                      <li>
                      <Link
                      activeClass="active"
                      to="our team"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={500}
                      delay={400}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                      spyThrottle={500}
                    >
                      Our Team
                    </Link>
                      </li>
                    </ul>
                  </Box>
                </Drawer>
              </div>
            </div>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default Navbar;
