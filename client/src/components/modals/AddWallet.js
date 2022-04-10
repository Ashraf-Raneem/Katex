import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { url } from "../../utils/urls";

const AddWallet = ({ toggle, setWalletData }) => {
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (text !== "" || desc !== "") {
      let payload = {
        id: `${Math.random()}`,
        theme: "primary",
        head: {
          //icon: HeadIcon1,
          text: text,
        },
        desc: desc,
      };
      fetch(url + "wallet", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((res) => setWalletData(res))
        .catch((err) => console.log(err));
      toggle();
      toast.success("New Wallet Added");
    } else {
      toast.error("Header and Description must be filled");
    }
  };

  return (
    <div className="form-container">
      <Form onSubmit={(ev) => handleSubmit(ev)}>
        <FormGroup>
          <Label>Header</Label>
          <Input type="text" onChange={(ev) => setText(ev.target.value)}></Input>
        </FormGroup>
        <FormGroup>
          <Label>Description</Label>
          <Input type="textarea" onChange={(ev) => setDesc(ev.target.value)}></Input>
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

export default AddWallet;
