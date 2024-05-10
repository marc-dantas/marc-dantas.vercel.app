import Heading from './components/Heading';
import Section from './components/Section';
import Block from './components/Block';
import Button from './components/Button';
import Footer from './components/Footer';
import Title from './components/Title';
import 'bulma';

export default function App() {
  return (
    <>
      <Heading>
        <div className="hero-body">
            <div className="columns is-multiline">
                <div className="column is-full">
                    <p className="title is-family-monospace is-1">Hi there! I'm Marcio Dantas</p>
                    <p className="title is-family-monospace is-2">I write softwares</p>
                </div>
                <div className="column">
                  5+ years of experience making world a better place with software.
                </div>
            </div>
        </div>
      </Heading>
      <div className="hero has-background-black">
        <div className="hero-body">
          <Title>Skills</Title>
          <Section title="I can write">
            <Button link="https://rust-lang.org">Rust</Button>
            <Button link="https://python.org">Python</Button>
            <Button link="https://javascript.com">JavaScript</Button>
            <Button link="https://www.typescriptlang.org/">TypeScript</Button>
            <Button link="https://php.net/">PHP</Button>
            <Button link="https://www.open-std.org/jtc1/sc22/wg14/">C</Button>
            <p>And pretty much any other one...</p>
          </Section>
          <Section title="I can work with">
            <Button link="https://reactjs.com">React.js</Button>
            <Button link="https://nodejs.org">Node.js</Button>
            <Button link="https://www.djangoproject.com/">Django</Button>
            <Button link="https://www.postgresql.org/">PostgreSQL</Button>
          </Section>
          <Section title="I generally work as">
            <Button>Backend Software Engineer</Button>
            <Button>Database Engineer</Button>
            <Button>Tooling Engineer</Button>
          </Section>
          <Section title="I speak">
            <Button>English</Button>
            <Button>Brazilian Portuguese</Button>
          </Section>
          <Title>Work</Title>
          <Section title="My open-source projects">
            <Block link="https://github.com/marc-dantas/pile/" title="Pile">Esoteric programming language for computers</Block>
            <Block link="https://github.com/marc-dantas/domas/" title="Domas">Dynamic binary visualization algorithm</Block>
            <Block link="https://github.com/marc-dantas/snake-editor/" title="Snake Editor">A minimalistic and customizable Python code editor</Block>
            <Block link="https://github.com/marc-dantas/pong3d" title="pong3D">A 3D Pong game made fully in Python</Block>
            <Block link="https://github.com/marc-dantas/marc-dantas.vercel.app" title="marc-dantas.vercel.app">Marcio Dantas' official website</Block>
          </Section>
          <Title>More info</Title>
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
              <p>Copyright &copy; {new Date().getFullYear()} - This website is fully open-source and licenced under <a href="https://ose/mit/"><u>MIT License</u></a>.</p>
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
    </>
  );
}
