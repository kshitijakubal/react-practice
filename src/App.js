import logo from './logo.svg';
import './App.css';
import ContactCard from './components/ContactCard';

function App() {
  return (
    <div className="App">
      <ContactCard 
        imgUrl = "https://placekitten.com/200/202"
        name = "Pickles"
        phone = "9876756435"
        email = "nathan@gmail.com"
      /><ContactCard
        imgUrl = "https://placekitten.com/200/300"
        name = "Princess"
        phone = "5676898765"
        email = "catlady@gmail.com" />
      <ContactCard 
        imgUrl = "https://placekitten.com/200/350"
        name = "Annie"
        phone = "9908563456"
        email = "felineme@gmail.com"
      />
    </div>
  );
}

export default App;
