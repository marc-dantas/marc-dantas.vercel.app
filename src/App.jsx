import Heading from './components/Heading';
import Section from './components/Section';
import Block from './components/Block';
import LinkButton from './components/LinkButton';
import Footer from './components/Footer';
import 'bulma';
import './style.css';

export default function App() {
  return (
    <div className="App">
      <Heading title="Marcio Dantas" subtitle="Software Developer" />
      <div className="hero has-background-black">
        <div className="hero-body">
          <Section title="Skills">
            <LinkButton link="https://javascript.com">JavaScript</LinkButton>
            <LinkButton title="Easter Egg: This site is made in React.js!" link="https://reactjs.com">React.js</LinkButton>
            <LinkButton link="https://nextjs.org">Next.js</LinkButton>
            <LinkButton link="https://bulma.io">Bulma CSS Framework</LinkButton>
            <LinkButton link="https://nodejs.org">Node.js</LinkButton>
            <LinkButton link="https://python.org">Python 3</LinkButton>
            <LinkButton link="https://php.net">PHP</LinkButton>
            <LinkButton link="https://mysql.com">MySQL</LinkButton>
            <LinkButton link="https://rust-lang.org">Rust</LinkButton>
          </Section>
          <Section title="Main projects">
            <Block link="https://github.com/marc-dantas/cuper/" title="CuPER">A custom parsing module written in Python</Block>
            <Block link="https://github.com/marc-dantas/racnul/" title="RaCNuL">RAndom Crazy NUmeration Language </Block>
            <Block link="https://github.com/marc-dantas/viztack/" title="Viztack">An educational website about reverse polish notation</Block>
            <Block link="https://github.com/marc-dantas/mexa/" title="MExA">Math expression abstraction</Block>
          </Section>
          <Section title="Contact">
            <LinkButton link="https://github.com/marc-dantas">GitHub</LinkButton>
            <LinkButton link="https://instagram.com/marciodantasms">Instagram</LinkButton>
            <LinkButton link="mailto:marcio.dantas.pro@outlook.com">E-Mail</LinkButton>
          </Section>
        </div>
      </div>
      <Footer copy author="Marcio Dantas" />
    </div>
  );
}
