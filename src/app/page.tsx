import { Metadata } from "next";
import Home from "@/components/views/Home/Home";

export const metadata: Metadata = {
  title: "Gospel Chinyereugo - Software Engineer",

  description:
    "Building things that matter, I help brands worldwide elevate their digital presence.",
};

export default function home() {
  return <Home />;
}
