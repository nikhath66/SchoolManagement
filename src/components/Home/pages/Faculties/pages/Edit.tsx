import { Toast } from "@chakra-ui/react";
import React, { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import Action from "../../../../../redux/actions";
import { Faculty, Student } from "../../../../../redux/reducers";
import "./Edit.css";

const Edit = (props: {
  onSubmit: (faculty: Faculty) => void;
  faculty: Faculty;
}) => {
  const [name, setName] = useState(props.faculty.name);
  const [email, setEmail] = useState(props.faculty.email);
  const [contact, setContact] = useState(props.faculty.contactNo);
  const [Post, setPost] = useState(props.faculty.post);
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
          if (!name || !email || !contact || !Post) {
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
        <div className="Label">Post</div>
        <input
          type="text"
          placeholder="Enter fees"
          value={Post}
          id="Post"
          name="Post"
          onChange={(e) => {
            setPost(e.target.value);
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
              post: Post,
            });
          }}
        />
      </form>
    </div>
  );
};

export default Edit;
