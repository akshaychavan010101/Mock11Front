import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";

import style from "./form.module.css";
function Form() {
  const baseURL = "http://localhost:3000";
  return (
    <div className={style.formContainer}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="text" id="name" />
        <FormLabel>Email</FormLabel>
        <Input type="email" id="email" />
        <FormLabel>Destination</FormLabel>
        <Select placeholder="Select option" id="destination">
          <option value="India">India</option>
          <option value="Africa">Africa</option>
          <option value="Australia">Australia</option>
          <option value="Europe">Europe</option>
          <option value="America">America</option>
        </Select>
        <FormLabel>Total Travellers</FormLabel>
        <Input type="number" id="total_travellers" />
        <FormLabel>Budget Per Person</FormLabel>
        <Input type="number" id="budget_per_person" />

        <Button
          className={style.btn}
          onClick={() => {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const destination = document.getElementById("destination").value;
            const total_travellers =
              document.getElementById("total_travellers").value;
            const budget_per_person =
              document.getElementById("budget_per_person").value;
            const data = {
              name,
              email,
              destination,
              total_travellers,
              budget_per_person,
            };
            fetch(`${baseURL}/api/post`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((res) => res.json())
              .then((data) => {
                alert(data.msg);
              })
              .catch((err) => {
                alert("Something went wrong");
                console.log(err);
              });
          }}
        >
          Submit
        </Button>
      </FormControl>
    </div>
  );
}

export default Form;
