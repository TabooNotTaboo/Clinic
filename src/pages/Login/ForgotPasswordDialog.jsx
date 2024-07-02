import React from "react";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Input, Button, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/Slice/forgotpasswordSlice"; 

export function ForgotPasswordDialog({ open, setOpen }) {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const handleForgot = (data) => {
    dispatch(forgotPassword(data.email)); 
    setOpen(false);
    alert("Vui lòng check mail");
  };

  return (
    <Dialog
      open={open}
      handler={() => {
        setOpen(!open);
      }}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogHeader>Forgot Password</DialogHeader>
      <DialogBody>
        <div className="mb-6">
          <Typography variant="h6" color="blue-gray" className="-mb-1">
            Email
          </Typography>
          <form onSubmit={handleSubmit(handleForgot)}>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("email")}
            />
          </form>
        </div>
      </DialogBody>
      <DialogFooter className="justify-between space-x-2">
        <Button color="gray" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button color="indigo" onClick={handleSubmit(handleForgot)}>
          Confirm
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default ForgotPasswordDialog;
