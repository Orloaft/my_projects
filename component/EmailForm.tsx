import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
const Form = styled.form`
  background-color: #393e41;
  display: flex;
  border: 2px solid #58355e;
  padding: 0.5rem;
  font-size: 1rem;
  flex-direction: column;
  position: absolute;
  gap: 1rem;
  top: 25%;
  left: 10%;
  width: 80%;
  height: 80%;
  z-index: 3;
  & input {
    height: 2rem;
    border: none;
    background-color: gray;
  }
  & textarea {
    height: 6rem;
    border: none;
    background-color: gray;
    resize: none;
  }
  @media (min-width: 48rem) {
    left: 25%;
    width: 50%;
    height: 70%;
  }
`;
export const EmailForm = () => {
  const [form, setForm] = useState({ email: "", subject: "", message: "" });
  const [message, setMessage] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post(`/api/sendmail`, { ...form })
      .then((res) => {
        setMessage(res.data.message);
        setForm({ email: "", subject: "", message: "" });
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <Form onChange={(e) => handleChange(e)} onSubmit={(e) => handleSubmit(e)}>
      Email address
      <input name="email" value={form.email}></input>
      Subject
      <input name="subject" value={form.subject}></input>
      Message
      <textarea name="message" value={form.message}></textarea>
      <button>Send message</button>
      {message}
    </Form>
  );
};
