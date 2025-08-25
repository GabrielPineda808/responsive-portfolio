export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="#" className="text-xl font-bold">Gabriel Pineda</a>
        <div className="space-x-4">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
        </div>
      </div>
    </nav>
  )
}
