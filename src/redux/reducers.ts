import Action from "./actions";

export type User = {
  isLoggedIn: boolean;
  name: string;
  email: string;
};

export type Notice = {
  title: string;
  description: string;
  date: Date;
};

export type School = {
  name: string;
  description: string;
  imageUrl: string;
  noticeBoard: Notice[];
};

export type Student = {
  name: string;
  email: string;
  contactNo: string;
  class: number;
};

export type Faculty = {
  name: string;
  email: string;
  contactNo: string;
  post: string;
};

export type State = {
  user: User;
  school: School;
  students: Student[];
  faculties: Faculty[];
};

const initialState: State = {
  school: {
    description: "",
    imageUrl: "",
    name: "",
    noticeBoard: [],
  },
  students: [],
  faculties: [],
  user: {
    email: "",
    isLoggedIn: false,
    name: "",
  },
};

export default function Reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "ADD_STUDENT":
      return {
        ...state,
        students: [...state.students, action.payload],
      };

    case "EDIT_STUDENT": {
      const students = [...state.students];
      students[action.payload.id] = action.payload.student;
      return {
        ...state,
        students,
      };
    }
    case "DELETE_STUDENT": {
      const students = [
        ...state.students.slice(0, action.payload.id),
        ...state.students.slice(action.payload.id + 1),
      ];
      console.log(students);
      return {
        ...state,
        students,
      };
    }

    case "ADD_TEACHER":
      return {
        ...state,
        faculties: [...state.faculties, action.payload],
      };

    case "EDIT_TEACHER": {
      const faculties = [...state.faculties];
      faculties[action.payload.id] = action.payload.faculty;
      return {
        ...state,
        faculties,
      };
    }
    case "DELETE_TEACHER": {
      const faculties = [
        ...state.faculties.slice(0, action.payload.id),
        ...state.faculties.slice(action.payload.id + 1),
      ];
      console.log(faculties);
      return {
        ...state,
        faculties,
      };
    }
    case "LOGOUT_USER":
      return {
        ...state,
        school: {
          name: "",
          description: "",
          imageUrl: "",
          noticeBoard: [],
        },
        students: [],
        faculties: [],
        user: {
          email: "",
          isLoggedIn: false,
          name: "",
        },
      };
    case "SET_SCHOOL_DETAILS":
      return {
        ...state,
        school: action.payload,
      };
    default:
      return state;
  }
}
