import Heading from './components/Heading';
import Section from './components/Section';
import Nav from './components/Nav';
import Button from './components/Button';
import Footer from './components/Footer';
import Title from './components/Title';
import 'bulma';

export default function App() {
  return (
    <>
      <Heading>
        <div className="hero-body">
          <div className="columns is-multiline is-centered">
            <div className="column is-full">
              <div className="content">
                <div className="columns is-centered has-text-centered is-multiline">
                  <div className="column is-8">
                    <p class="title is-2 is-family-monospace is-size-4-mobile has-text-justified">"<i>Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.</i>"</p>
                  </div>
                  <div className="column is-full">
                    <p className="is-size-4 has-text-weight-bold">
                      — Linus Torvalds
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Heading>
      <div className="hero has-background-black">
        <div className="hero-body">
          <div className="hero is-black">
            <div className="hero-body">
              <div className="columns is-black is-multiline has-text-centered">
                  <div className="column is-full">
                      <p className="has-text-weight-bold is-family-monospace is-size-2-mobile is-size-1">Hi there! I'm Marcio Dantas</p>
                      <p className="has-text-weight-bold is-family-monospace is-size-3 is-size-4-mobile">I write softwares</p>
                  </div>
                  <div className="column">
                      <p className="has-text-weight-bold is-size-4 has-text-left-mobile is-size-6-mobile">Welcome to my personal website, take a look at my information and experience below.</p>
                  </div>
              </div>
            </div>
          </div>
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
            <div className="columns is-multiline">
              <div className="column is-narrow">
                <a href="https://github.com/marc-dantas/pile/">
                  <img src="https://github-readme-stats.vercel.app/api/pin/?username=marc-dantas&repo=pile&theme=holi" alt="Pile" />
                </a>
              </div>
              <div className="column is-narrow">
                <a href="https://github.com/marc-dantas/domas/">
                  <img src="https://github-readme-stats.vercel.app/api/pin/?username=marc-dantas&repo=domas&theme=holi" alt="Domas" />
                </a>
              </div>
              <div className="column is-narrow">
                <a href="https://github.com/marc-dantas/sned/">
                  <img src="https://github-readme-stats.vercel.app/api/pin/?username=marc-dantas&repo=sned&theme=holi" alt="Sned" />
                </a>
              </div>
              <div className="column is-narrow">
                <a href="https://github.com/marc-dantas/pong3d/">
                  <img src="https://github-readme-stats.vercel.app/api/pin/?username=marc-dantas&repo=pong3d&theme=holi" alt="Pong3D" />
                </a>
              </div>
              <div className="column is-narrow">
                <a href="https://github.com/marc-dantas/marc-dantas.vercel.app/">
                  <img src="https://github-readme-stats.vercel.app/api/pin/?username=marc-dantas&repo=marc-dantas.vercel.app&theme=holi" alt="marc-dantas.vercel.app" />
                </a>
              </div>
              <div className="column is-narrow">
                <a href="https://github.com/marc-dantas/todoguy/">
                  <img src="https://github-readme-stats.vercel.app/api/pin/?username=marc-dantas&repo=todoguy&theme=holi" alt="TodoGuy" />
                </a>
              </div>
              <div className="column is-narrow">
                <a href="#">
                  <img src="https://github-readme-stats.vercel.app/api/pin/?username=marc-dantas&repo=racnul&theme=holi" alt="Domas" />
                </a>
              </div>
            </div>
          </Section>
          <Title>More info</Title>
          <Section title="Contact">
            <Button link="https://github.com/marc-dantas">GitHub</Button>
            <Button link="https://linkedin.com/in/marc-dantas">Linkedin</Button>
            <Button link="mailto:marcio.dantas.pro@outlook.com">E-Mail</Button>
          </Section>
        </div>
      </div>
      <Footer>
          <div class="block">
              <p>&copy; {new Date().getFullYear()} Marcio Dantas. This website is fully open-source and licensed under <a href="https://ose/mit/"><u>MIT License</u></a>.</p>
          </div>
          <div className="is-inline-block">
            <p>
              <a href="https://github.com/marc-dantas">
                <img className="image" width="400" src="/marciodantas.svg"></img>
              </a>
            </p>
          </div>
      </Footer>
    </>
  );
}
