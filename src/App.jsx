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
        5+ years of experience making world a better place with software.
      </Heading>
      <div className="hero has-background-black">
        <div className="hero-body">
          <Title>Skills</Title>
          <Section title="Languages, Frameworks and Technologies">
            <Button link="https://reactjs.com">React.js</Button>
            <Button link="https://nodejs.org">Node.js</Button>
            <Button link="https://python.org">Python 3</Button>
            <Button link="https://www.djangoproject.com/">Django</Button>
            <Button link="https://www.postgresql.org/">PostgreSQL</Button>
            <Button link="https://rust-lang.org">Rust</Button>
          </Section>
          <Title>Work</Title>
          <Section title="Main projects">
            <Block link="https://github.com/marc-dantas/pile/" title="Pile">Esoteric, concatenative, stack-based, statically typed and compiled programming language for computers.</Block>
            <Block link="https://github.com/marc-dantas/viztack/" title="Viztack">An educational website about reverse polish notation</Block>
            <Block link="https://github.com/marc-dantas/3d-py-pong" title="3d-py-pong">A 3D Pong game made in Python with Ursina Engine.</Block>
            <Block link="https://github.com/marc-dantas/marc-dantas.vercel.app" title="marc-dantas.vercel.app">My website improved in React.js</Block>
          </Section>
          <Title>More information</Title>
          <Section title="Contact">
            <Button link="https://github.com/marc-dantas">GitHub</Button>
            <Button link="https://x.com/marc_dantas">Twitter (X)</Button>
            <Button link="https://linkedin.com/in/marc-dantas">Linkedin</Button>
            <Button link="mailto:marcio.dantas.pro@outlook.com">My E-Mail</Button>
          </Section>
        </div>
      </div>
      <Footer>
          <div class="block">
              <p>Copyright © {new Date().getFullYear()} - This project is under <a href="https://opensource.org/license/mit/"><u>MIT License</u></a>.</p>
          </div>
          <div className="is-inline-block">
            <p>
              Made with ❤️ in Brazil by
              <a href="https://github.com/marc-dantas">
                <img className="image" width="400" src="/marciodantas.svg"></img>
              </a>
            </p>
          </div>
      </Footer>
    </div>
  );
}
