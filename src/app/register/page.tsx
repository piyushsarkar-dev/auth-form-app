import Register from "@/components/customui/Register";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Auth Form App",
  description: "Register page of Auth Form App",
};
const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="w-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Register />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
