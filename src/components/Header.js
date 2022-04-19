import {
  Navbar,
  Nav,
  Offcanvas,
  NavDropdown,
  Form,
  Container,
  FormControl,
  Button,
  InputGroup,
  Badge,
} from "react-bootstrap";

import { FaSearch } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

import { BsToggleOff } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";

import { globalContext } from "../App";
import axios from "axios";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => {
    setShow((s) => !s);
  };

  const navigate = useNavigate();
  const { brand_name } = useContext(globalContext);

  return (
    <>
      <Navbar bg="default" className="bg-default bg-brand shadow" expand="lg">
        <Container fluid>
          <Link to="/">
            <Navbar.Brand className="brand-text me-2">
              {brand_name}
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>

            <NavDropdown
              className="d-flex ms-auto"
              title="Links"
              id="navbarScrollingDropdown"
              align="end"
            >
              <NavDropdown.Item href="mailto:contact@sajjad.info">
                Contact
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
