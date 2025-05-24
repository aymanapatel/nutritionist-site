import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-green-200 transition-colors">
          Nutritionist Site
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-green-200 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-green-200 transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-200 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-green-200 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
