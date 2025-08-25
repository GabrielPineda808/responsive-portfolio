export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-[#0a192f] shadow">
      <div className="container mx-auto max-w-4xl flex items-center justify-between p-4">
        <a href="#" className="text-xl font-bold text-teal-400">Gabriel Pineda</a>
        <div className="space-x-4 text-gray-300">
          <a href="#about" className="hover:text-teal-400">About</a>
          <a href="#skills" className="hover:text-teal-400">Skills</a>
          <a href="#projects" className="hover:text-teal-400">Projects</a>
        </div>
      </div>
    </nav>
  )
}
