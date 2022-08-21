import React from "react";
import "./Home.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { auth, firebaseAuth } from "../../Firebase/Firebase";

const Toolbar = () => {
  const nav = useNavigate();
  return (
    <div className="Toolbar">
      <div className="toolbar-content">
        <img src="/images/school-logo.jpg" className="Logo" />
        <Menu>
          <MenuButton
            className="Profile-button"
            minWidth={0}
            as={IconButton}
            aria-label="Options"
            icon={<img src="/images/user-solid.svg" />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>Nikhath</MenuItem>
            <MenuItem onClick={() => firebaseAuth.signOut(auth)}>
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Toolbar;
