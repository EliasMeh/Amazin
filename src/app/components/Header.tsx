import React from "react";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, ButtonGroup} from "@nextui-org/react";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gray-800 text-white">
      <Navbar isBordered className="w-full">
        <NavbarBrand className="flex items-center">
          <Image src="/assets/imageamazin.png" alt="Amazing" width={120} height={40} className="rounded-full" />
          <p className="ml-2 font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4 justify-center flex-grow">
          <NavbarItem>
            
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="justify-end mr-10">
          <NavbarItem className="hidden lg:flex">
            <Link className="bg-lime-600 border-spacing-2 border-black text-white hover:bg-lime-700 hover:text-white transition-colors duration-300 rounded-full px-6 py-3 text-lg" href="#">
                Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} className="bg-lime-600 border-spacing-2 border-black text-white hover:bg-lime-700 hover:text-white transition-colors duration-300 rounded-full px-6 py-3 text-lg" href="#">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
};

export default Header;