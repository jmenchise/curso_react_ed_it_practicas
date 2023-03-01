import ContactCard from "./components/ContactCard/ContactCard";

function App() {
  
  const contactLinks = [
    {
      name: 'LinkedIn',
      adress: 'https://www.linkedin.com/in/joan-menchise-43a511247/'
    },
    {
      name: 'Github',
      adress:'https://github.com/jmenchise'
    }
  ]
  
  return (
    <div className="App">
      <ContactCard
        name={'Joan Menchise'}
        career={'FullStack Developer'}
        description={'Mi nombre es Joan Menchise, y soy desarrollador Fullstack'}
        contactLinks={contactLinks}
      />
    </div>
  );
}

export default App;
