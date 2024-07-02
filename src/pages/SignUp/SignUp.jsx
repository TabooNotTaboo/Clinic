import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SignUpSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  password: z.string().min(3).max(20),
  phoneNumber: z.string().min(10),
  dateOfBirth: z.string().nonempty("Date of birth is required"),
  address: z.string().min(1, "Address is required"),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm({ resolver: zodResolver(SignUpSchema) });

  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (data) => {
    setIsLoading(true);

    try {
      const response = await fetch('https://api-prn.zouzoumanagement.xyz/api/authentication/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Sign up successful!');
        navigate('/login');
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Watch for changes in dateOfBirth and set the value in the form
  const watchDateOfBirth = watch("dateOfBirth");

  // Function to handle date picker change and set value
  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    setValue("dateOfBirth", formattedDate, { shouldValidate: true });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card color="transparent" shadow={false}>
        <Typography color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Create your account by filling in the details below.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 p-6 border border-gray-200 rounded-lg"
          noValidate
          onSubmit={handleSubmit(handleSignUp)}
        >
          <div className="mb-6">
            <Typography color="blue-gray" className="mb-1">
              First Name
            </Typography>
            <Input
              size="lg"
              placeholder="First Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("firstName")}
            />
            {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
          </div>
          <div className="mb-6">
            <Typography color="blue-gray" className="mb-1">
              Last Name
            </Typography>
            <Input
              size="lg"
              placeholder="Last Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("lastName")}
            />
            {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
          </div>
          <div className="mb-6">
            <Typography color="blue-gray" className="mb-1">
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("email")}
            />
            {errors.email && <span className="text-red-500">Valid Email is required</span>}
          </div>
          <div className="mb-6">
            <Typography color="blue-gray" className="mb-1">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("password")}
            />
            {errors.password && <span className="text-red-500">Password is required</span>}
          </div>
          <div className="mb-6">
            <Typography color="blue-gray" className="mb-1">
              Phone Number
            </Typography>
            <Input
              size="lg"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && <span className="text-red-500">Phone Number is required</span>}
          </div>
          <div className="mb-6">
            <Typography color="blue-gray" className="mb-1">
              Date of Birth
            </Typography>
            <DatePicker
              selected={watchDateOfBirth ? new Date(watchDateOfBirth) : null}
              onChange={date => handleDateChange(date)}
              dateFormat="yyyy-MM-dd"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
            />
            {errors.dateOfBirth && <span className="text-red-500">{errors.dateOfBirth.message}</span>}
          </div>
          <div className="mb-6">
            <Typography color="blue-gray" className="mb-1">
              Address
            </Typography>
            <Input
              size="lg"
              placeholder="Address"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("address")}
            />
            {errors.address && <span className="text-red-500">{errors.address.message}</span>}
          </div>
          <Button
            className="mt-4 mb-10 flex justify-center items-center"
            fullWidth
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <AiOutlineLoading3Quarters
                color="white"
                className="animate-spin"
              />
            ) : (
              "Sign Up"
            )}
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-gray-900">
              Login
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
