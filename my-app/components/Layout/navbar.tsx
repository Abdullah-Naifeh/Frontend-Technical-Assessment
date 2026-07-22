import Image from "next/image";
import Link from "next/link";
import { StarMinus } from 'lucide-react'


function Navbar() {
    return (
        <div className="flex w-full justify-between items-start px-4 py-6 max-h-16 top-0 z-50">
            <div className="flex items-center">
            <StarMinus />
                <Image src="/Text.svg" alt="logo" width={235} height={40} />
            </div>
            <div className="flex items-center gap-4 font-inter">
                <Link
                    href="/"
                    className="relative text-sm md:text-base lg:text-xl font-bold text-text-blue after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-text-blue after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                    Markets
                </Link>
                <Link href="/trade" className="relative text-sm md:text-base lg:text-xl font-bold text-text-blue after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-text-blue after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">Trade</Link>
                <Link href="/portfolio" className="relative text-sm md:text-base lg:text-xl font-bold text-text-blue after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-text-blue after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">Portfolio</Link>
                <Link href="/history" className="relative text-sm md:text-base lg:text-xl font-bold text-text-blue after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-text-blue after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">History</Link>
            </div>
            <div className="flex items-center gap-2">
                <Image src="/user.jpeg" alt="user" width={24} height={30} className="rounded-full object-cover w-7 h-7" />
                <h1 className="text-sm font-medium">Demo User</h1>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium">Logout</button>
            </div>
        </div>
    );
}

export default Navbar;