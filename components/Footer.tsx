import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex h-12 items-center justify-between p-4 text-primary md:h-24 lg:p-20 xl:p-40">
      <Link href="/" className="text-xl font-bold uppercase">
        Massimo
      </Link>
      <p>All rights reserved.</p>
    </div>
  );
};

export default Footer;
