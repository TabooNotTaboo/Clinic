import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Schema definition for form validation
const SignUpSchema = z.object({
  phoneNumber: z.string().min(10).max(15),
  password: z.string().min(3).max(20),
});

export function Login() {
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [open, setOpen] = useState(false); // State for dialog visibility

  // Setting up form handling with validation
  const { register, handleSubmit } = useForm({ resolver: zodResolver(SignUpSchema) });

  // Handling form submission
  const handleSignIn = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api-prn.zouzoumanagement.xyz/api/authentication/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);

      // Save the access token to local storage
      localStorage.setItem('accessToken', result.data.accessToken);
      localStorage.setItem('refreshToken', result.data.refreshToken);
      localStorage.setItem('role', result.data.role);
      // Navigate to dashboard if login is successful
      navigate("/dashboard/dashboard/profile/dashboard/profile/profile-user");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Welcome back! Enter your details to log in.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          noValidate
          onSubmit={handleSubmit(handleSignIn)}
        >
          <div className="mb-6">
            <Typography variant="h6" color="blue-gray" className="-mb-1">
              Phone Number
            </Typography>
            <Input
              size="lg"
              placeholder="1234567890"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("phoneNumber")}
            />
          </div>
          <div className="mb-6">
            <Typography variant="h6" color="blue-gray" className="-mb-1">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("password")}
            />
          </div>
          <Button
            className="mt-4 mb-10 flex justify-center items-center"
            fullWidth
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <AiOutlineLoading3Quarters color="white" className="animate-spin" />
            ) : (
              "Sign In"
            )}
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <Link to="/signup" className="font-medium text-gray-900">
              Sign Up
            </Link>
          </Typography>
          <Typography
            onClick={() => {
              setOpen(true);
            }}
            color="gray"
            className="mt-4 text-center font-normal cursor-pointer"
          >
            Forgot password?
          </Typography>
        </form>
      </Card>
    </div>
  );
}

export default Login;
