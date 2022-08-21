import { Toast } from "@chakra-ui/react";
import React, { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import Action from "../../../../../redux/actions";
import "./Add.css";

const Add = (props: { onSubmit: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [Class, setClass] = useState(0);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <form
        style={{
          padding: "16px",
          margin: "auto",
          maxWidth: "450px",
          alignContent: "center",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          if (!name || !email || !contact || !Class) {
            setError("All feids required");
          }
        }}
      >
        <div className="Label"> Name</div>
        <input
          type="text"
          placeholder="Enter Name"
          id="name"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div className="Label"> Email</div>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          id="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div className="Label">Contact</div>
        <input
          type="number"
          placeholder="Enter Contact-no"
          value={contact}
          id="contact"
          name="contact"
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
        <div className="Label">Class</div>
        <input
          type="text"
          placeholder="Enter Class"
          value={Class}
          id="Class"
          name="Class"
          onChange={(e) => {
            setClass(Number(e.target.value));
          }}
        />

        <input
          type="submit"
          value="Add"
          className="Save-btn"
          onClick={() => {
            dispatch({
              type: "ADD_STUDENT",
              payload: {
                name: name,
                email: email,
                contactNo: contact,
                class: Class,
              },
            } as Action);
            props.onSubmit();
          }}
        />
      </form>
    </div>
  );
};

export default Add;
