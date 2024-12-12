import { Metadata } from "next";
import Projects from "@/components/views/Projects/Projects";

export const metadata: Metadata = {
  title: "Projects | Gospel Chinyereugo",
  description: "View my Projects | Building things that matter,",
};

export default function project() {
  return <Projects />;
}
