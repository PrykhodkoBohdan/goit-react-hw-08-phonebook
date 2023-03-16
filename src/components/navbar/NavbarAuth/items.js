import { nanoid } from "nanoid";

const items = [
  {
    id: nanoid(),
    text: "Register",
    link: "/register",
    private: false,
  },

  {
    id: nanoid(),
    text: "Login",
    link: "/login",
    private: false,
  },

  {
    id: nanoid(),
    text: "Contacts",
    link: "/contacts",
    private: true,
  },
];

export default items;