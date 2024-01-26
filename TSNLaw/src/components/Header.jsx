const Header = () => {
  return (
    <header className="absolute top-0 inset-x-0 text-center py-10 z-10 font-sans flex justify-around">
      <div className="top-0">
        <img src="../assets/logo.png" alt="logo" />
      </div>
      <nav>
        <ul className="inline-flex space-x-10">
        <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
        <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
        <li><a href="#" className="text-white hover:text-gray-300">Our Team</a></li>
        <li><a href="#" className="text-white hover:text-gray-300">Practice Areas</a></li>
        <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
      </ul>
      </nav>
      <div className="flex items-center justify-end">
        
        <a href="tel:+1234567890" className="text-blue-500 hover:underline">
          <i className="fas fa-phone mr-1"></i> +1 (234) 567-890
        </a>
        <span className="text-white mr-2">Call Us:</span>
      </div>
      
    </header>
  );
}

export default Header;
