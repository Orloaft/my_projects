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
  align-items: center;
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
    width: 90%;
  }
  & textarea {
    width: 90%;
    height: 50%;
    border: none;
    background-color: gray;
    resize: none;
  }
  @media (min-width: 48rem) {
    top: 10%;
    left: 25%;
    width: 50%;
    height: 70%;
  }
`;
const Button = styled.button`
  height: 10%;
  width: 30%;
  font-family: RussoOne;
`;
const ReturnButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 2.5%;
  right: 2.5%;
`;
export const EmailForm = (props: { showModal: (arg0: boolean) => void }) => {
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
      <ReturnButton
        onClick={() => {
          props.showModal(false);
        }}
      >
        X
      </ReturnButton>
      Email address
      <input name="email" value={form.email}></input>
      Subject
      <input name="subject" value={form.subject}></input>
      Message
      <textarea name="message" value={form.message}></textarea>
      <Button>Send message</Button>
      {message}
    </Form>
  );
};
