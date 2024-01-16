import Link from "next/link";
import Image from "next/image";
import LogoSvg from "@/public/logo.svg"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-start p-4 gap-4 shadow-sm text-lg sticky bg-white z-20 w-full top-0">
      <div className="w-12 h-12">
          <Link href="/"><Image src={LogoSvg} alt="logo" loading="lazy" className="w-full h-full"/></Link>
      </div>
      <div className="gap-8 flex items-center">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/product" className="hover:text-blue-600">Products</Link>
        <Link href="#footer" className="hover:text-blue-600">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
