export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 shadow fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="font-bold text-xl">
          BB Landscaping
        </h1>

        <div className="space-x-4">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}