import { Form, Link } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

export const action = async ({}: ActionArgs) => {
  // your implementation here
  return null;
};

export default function LoginRoute() {
  return (
    <Form className="flex h-full items-center justify-center" method="post">
      <div className="flex flex-col gap-4 mx-auto h-full w-full items-center justify-center lg:w-2/3">
        <h1 className="mb-2 text-center text-6xl text-black lg:mb-4">Login</h1>
        <p className="text-center">Login below</p>
        <Input
          placeholder="Enter your email"
          autoFocus
          type="email"
          className="w-full"
          name="email"
        />
        <Input
          placeholder="Enter your password"
          className="w-full"
          name="password"
          type="password"
        />
        <Link to={"/forgot-password"}>Forgot password?</Link>
        <Button type="submit" size="lg">
          Login
        </Button>
      </div>
    </Form>
  );
}
