import Heading from './components/Heading';
import Section from './components/Section';
import Block from './components/Block';
import Button from './components/Button';
import Footer from './components/Footer';
import Title from './components/Title';
import 'bulma';

export default function App() {
  return (
    <div className="App">
      <Heading title="Hi, my name is Marcio Dantas" subtitle="I write softwares">
        3+ years of experience making world a better place with software.
      </Heading>
      <div className="hero has-background-black">
        <div className="hero-body">
          <Title>Skills</Title>
          <Section title="Languages, Frameworks and Technologies">
            <Button link="https://javascript.com">JavaScript</Button>
            <Button title="Easter Egg: This site is made in React.js!" link="https://reactjs.com">React.js</Button>
            <Button link="https://nextjs.org">Next.js</Button>
            <Button link="https://bulma.io">Bulma CSS Framework</Button>
            <Button link="https://nodejs.org">Node.js</Button>
            <Button link="https://python.org">Python 3</Button>
            <Button link="https://php.net">PHP</Button>
            <Button link="https://mysql.com">MySQL</Button>
            <Button link="https://rust-lang.org">Rust</Button>
          </Section>
          <Section title="Experience">
            <Button>Static web pages with React.js and Next.js</Button>
            <Button>Automation and Data Science Software with Python 3</Button>
            <Button>Dynamic web pages with PHP</Button>
            <Button>MySQL Databases knowledge</Button>
            <Button>Terminal-based and embedded software with Rust</Button>
            <Button>Low-level knowledge in C and Assembly</Button>
          </Section>
          <Title>Work</Title>
          <Section title="Main projects">
            <Block link="https://github.com/marc-dantas/pile/" title="RaCNuL">Esoteric, concatenative, stack-based, statically typed and compiled programming language for computers.</Block>
            <Block link="https://github.com/marc-dantas/viztack/" title="Viztack">An educational website about reverse polish notation</Block>
            <Block link="https://github.com/marc-dantas/3d-py-pong" title="3d-py-pong">A 3D Pong game made in Python with Ursina Engine.</Block>
            <Block link="https://github.com/marc-dantas/marc-dantas.vercel.app" title="marc-dantas.vercel.app">My website improved in React.js</Block>
          </Section>
          <Title>Contact</Title>
          <Section title="Social media">
            <Button link="https://github.com/marc-dantas">GitHub</Button>
            <Button link="https://x.com/marc_dantas">Twitter</Button>
            <Button link="mailto:marcio.dantas.pro@outlook.com">My E-Mail</Button>
          </Section>
        </div>
      </div>
      <Footer copy author="Marcio Dantas" />
    </div>
  );
}
