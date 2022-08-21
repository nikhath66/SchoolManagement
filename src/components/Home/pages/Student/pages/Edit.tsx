import { Toast } from "@chakra-ui/react";
import React, { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import Action from "../../../../../redux/actions";
import { Student } from "../../../../../redux/reducers";
import "./Edit.css";

const Edit = (props: {
  onSubmit: (student: Student) => void;
  student: Student;
}) => {
  const [name, setName] = useState(props.student.name);
  const [email, setEmail] = useState(props.student.email);
  const [contact, setContact] = useState(props.student.contactNo);
  const [Class, setClass] = useState(props.student.class);
  const [error, setError] = useState("");
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
          placeholder="Enter fees"
          value={Class}
          id="Class"
          name="Class"
          onChange={(e) => {
            setClass(Number(e.target.value));
          }}
        />

        <input
          type="submit"
          value="Update"
          className="Save-btn"
          onClick={() => {
            props.onSubmit({
              name: name,
              email: email,
              contactNo: contact,
              class: Class,
            });
          }}
        />
      </form>
    </div>
  );
};

export default Edit;
