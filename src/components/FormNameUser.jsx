import React, { useRef } from "react";
import { setTrainerName } from "../store/slices/trainerName.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./css/FormNameUser.css";

const FormNameUser = () => {
  const inputName = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerName(inputName.current.value.trim()));
    navigate("/pokedex");
  };

  return (
    <form className="form__name" onSubmit={handleSubmit}>
      <input className="form__name-input" ref={inputName} type="text" />
      <button className="form__name-btn">start</button>
    </form>
  );
};

export default FormNameUser;
