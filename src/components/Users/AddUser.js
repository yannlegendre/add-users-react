import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";


const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(null);

  const onModalConfirm = () => {
    setError(null);
  };

  const usernameInputHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageInputHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    const inputData = {
      username: enteredUsername,
      age: enteredAge,
      id: Math.random(),
    };
    setEnteredUsername("");
    setEnteredAge("");

    props.saveUser(inputData);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={onModalConfirm}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernameInputHandler}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageInputHandler}
          ></input>
          <Button type="submit">Create User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
