"use client"

import { Button } from "@/components/ui/button";
// import { Menu } from "./menu-sheet.component";
import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo.svg"

export  function Header() {
  return (
    <div className="px-4 py-3 flex justify-between items-center lg:px-10 lg:py-8">
      <Image src={logo} alt="Routerra Logo" className="w-auto lg:w-[220px]"/>
      <div className="flex items-center gap-2">
        <Link href="https://app.routerra.io">
            <Button size="sm">Sign in</Button>
        </Link>
        {/* <Menu /> */}
      </div>
    </div>
  );
} 