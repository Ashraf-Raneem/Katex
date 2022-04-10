import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const AddWallet = ({ toggle }) => {
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = () => {
    if (text !== "" || desc !== "") {
    }
  };

  return (
    <div className="form-container">
      <Form onSubmit={() => handleSubmit()}>
        <FormGroup>
          <Label>Header</Label>
          <Input type="text" onChange={(ev) => setText(ev.target.value)}></Input>
        </FormGroup>
        <FormGroup>
          <Label>Description</Label>
          <Input type="textarea" onChange={(ev) => setDesc(ev.target.value)}></Input>
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

export default AddWallet;
