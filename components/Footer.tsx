import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex h-12 items-center justify-between p-4 text-primary md:h-24 lg:px-20 xl:px-40">
      <Link href="/" className="text-xl font-bold">
        MASSIMO
      </Link>
      <p>© ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
