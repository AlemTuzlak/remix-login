import type { ActionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export const action = async ({}: ActionArgs) => {
  // your implementation here
  return null;
};

export default function RegisterRoute() {
  return (
    <Form
      className="mx-auto flex h-full w-full items-center justify-center"
      method="post"
    >
      <div className="flex flex-col gap-4 mx-auto h-full w-full items-center justify-center lg:w-2/3">
        <h1 className="mb-2 text-center text-6xl text-black lg:mb-4">
          Register
        </h1>
        <p className="text-center">Register below</p>
        <Input
          autoFocus
          className="w-full"
          placeholder="Enter your username"
          name="username"
        />
        <Input
          name="email"
          placeholder="Enter your email"
          type="email"
          required
          className="w-full"
        />
        <Input
          placeholder="Enter your password"
          name="password"
          type="password"
          required
          className="w-full"
        />
        <Input
          placeholder="Confirm password"
          type="password"
          className="w-full"
          name="confirmPassword"
        />

        <Button type="submit" size="lg">
          Register
        </Button>
      </div>
    </Form>
  );
}
