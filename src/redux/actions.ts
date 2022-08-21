import { Faculty, School, Student, User } from "./reducers";

type LOGIN_USER = {
  type: "LOGIN_USER";
  payload: User;
};

type LOGOUT_USER = {
  type: "LOGOUT_USER";
  payload: {};
};

type SET_SCHOOL_DETAILS = {
  type: "SET_SCHOOL_DETAILS";
  payload: School;
};

type ADD_STUDENT = {
  type: "ADD_STUDENT";
  payload: Student;
};

type EDIT_STUDENT = {
  type: "EDIT_STUDENT";
  payload: { student: Student; id: number };
};

type DELETE_STUDENT = {
  type: "DELETE_STUDENT";
  payload: {
    id: number;
  };
};
type ADD_TEACHER = {
  type: "ADD_TEACHER";
  payload: Faculty;
};

type EDIT_TEACHER = {
  type: "EDIT_TEACHER";
  payload: { faculty: Faculty; id: number };
};

type DELETE_TEACHER = {
  type: "DELETE_TEACHER";
  payload: {
    id: number;
  };
};

type Action =
  | LOGIN_USER
  | LOGOUT_USER
  | SET_SCHOOL_DETAILS
  | ADD_STUDENT
  | EDIT_STUDENT
  | DELETE_STUDENT
  | ADD_TEACHER
  | EDIT_TEACHER
  | DELETE_TEACHER;

export default Action;
