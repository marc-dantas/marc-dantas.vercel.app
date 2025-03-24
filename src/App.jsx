import Heading from './components/Heading';
import Section from './components/Section';
import Button from './components/Button';
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
          <Section title="Contact">
            <div className="columns is-centered">
                <div className="column is-narrow">
                  <Button link="https://github.com/marc-dantas">GitHub</Button>
                </div>
                <div className="column is-narrow">
                  <Button link="mailto:marcio.dantas.pro@outlook.com">E-Mail</Button>
                </div>
                <div className="column is-narrow">
                  <Button link="https://linkedin.com/in/marc-dantas">Linkedin</Button>
                </div>
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}
