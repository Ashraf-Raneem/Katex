import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { url } from "../../utils/urls";
import { toast } from "react-toastify";

const AddHeroDesc = ({ toggle, setHero }) => {
  const [text, setText] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (text !== "") {
      let payload = {
        text: text,
      };
      fetch(url + "hero/desc", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((res) => setHero(res))
        .catch((err) => console.log(err));
      toggle();
      toast.success("Hero description updated");
    } else {
      toast.error("Input must be filled up");
    }
  };

  return (
    <div className="form-container">
      <Form onSubmit={(ev) => handleSubmit(ev)}>
        <FormGroup>
          <Label>Description</Label>
          <Input type="textarea" onChange={(ev) => setText(ev.target.value)}></Input>
        </FormGroup>
        <div className="form-footer">
          <Button color="primary" type="submit">
            Submit
          </Button>
          <Button color="secondary" onClick={() => toggle()}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddHeroDesc;
