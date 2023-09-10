import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function ForgotPasswordRoute() {
  return (
    <div className="flex flex-col gap-4 mx-auto h-full w-full items-center justify-center lg:w-2/3">
      <h1 className="mb-2 text-6xl text-black text-center lg:mb-4">
        Forgot password
      </h1>
      <p className="text-center">Forgot password description</p>
      <Input className="w-full" placeholder="Enter your email" name="email" />
      <Link to="/login">Back to login</Link>
      <Button size="lg">Send password reset email</Button>
    </div>
  );
}
