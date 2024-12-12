import { Metadata } from "next";
import About from "@/components/views/About/About";

export const metadata: Metadata = {
  title: "Gospel Chinyereugo - Software Engineer",

  description:
    "Building things that matter, I help brands worldwide elevate their digital presence.",
};

export default function about() {
  return <About />;
}
