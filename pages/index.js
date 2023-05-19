import Image from "next/image";
import { Inter } from "next/font/google";
import SideBarLayout from "@/components/layouts/SideBarLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div className="">Home</div>;
}

Home.Layout = SideBarLayout;
