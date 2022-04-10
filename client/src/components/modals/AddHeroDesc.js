import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const AddHeroDesc = ({ toggle }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text !== "") {
    }
  };

  return (
    <div className="form-container">
      <Form onSubmit={() => handleSubmit()}>
        <FormGroup>
          <Label>Description</Label>
          <Input type="textarea" onChange={(ev) => setText(ev.target.value)}></Input>
        </FormGroup>
        <div className="form-footer">
          <Button color="success" type="submit">
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
