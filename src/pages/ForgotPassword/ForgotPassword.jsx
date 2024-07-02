import { zodResolver } from "@hookform/resolvers/zod";
import { Typography, Input, Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { changePassword } from "../../redux/Slice/loginSlice/loginSlice";

const SignUpSchema = z.object({
  oldPassword: z.string().min(3).max(20),
  newPassword: z.string().min(3).max(20),
});
const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(SignUpSchema) });
  const dispatch = useDispatch();
  const handleChangePassword = async (data) => {
    data.authorization = "Bearer" + " " + localStorage.getItem("token");
    dispatch(changePassword(data))
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          toast.success("Password Changed");
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        noValidate
        onSubmit={handleSubmit(handleChangePassword)}
      >
        <div className="mb-6">
          <Typography variant="h6" color="blue-gray" className="-mb-1">
            Old Password
          </Typography>
          <Input
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("oldPassword")}
          />
        </div>
        <div className="mb-6">
          <Typography variant="h6" color="blue-gray" className="-mb-1">
            New Password
          </Typography>
          <Input
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("newPassword")}
          />
        </div>
        <Button
          className="mt-4 mb-10 flex justify-center items-center"
          fullWidth
          type="submit"
        >
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
