import Navbar from '../components/Navbar'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="about" className="container mx-auto max-w-4xl px-4 py-16">
        <About />
      </section>
      <section id="skills" className="container mx-auto max-w-4xl px-4 py-16">
        <Skills />
      </section>
      <section id="projects" className="container mx-auto max-w-4xl px-4 py-16">
        <Projects />
      </section>
    </main>
  )
}
