import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom"; // achieve page switch
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import BookScreen from "./screens/BookScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact /> 
          <Route path='/books/:id' component={BookScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
