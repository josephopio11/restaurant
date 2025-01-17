import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Menu from "./Menu";

const Navbar = () => {
  const user = false;
  return (
    <div className="flex h-12 items-center justify-between border-b-2 border-b-primary p-4 uppercase text-primary md:h-24 lg:px-20 xl:px-40">
      <div className="hidden flex-1 gap-4 md:flex">
        <Link href="/">Home page</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="flex-1 text-xl md:text-center md:font-bold">
        <Link href="/">Massimo</Link>
      </div>
      <div className="md:hidden">
        {/* Mobile Menu */}
        <Menu />
      </div>
      <div className="hidden flex-1 items-center justify-end gap-4 md:flex">
        <Link
          href="tel:+123456789"
          className="right-2 top-3 flex cursor-pointer items-center gap-2 rounded-md bg-orange-300 px-1 md:absolute lg:static"
        >
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>123 456 789</span>
        </Link>
        {user ? (
          <Link href="/orders">Orders</Link>
        ) : (
          <Link href="/login">Login</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
