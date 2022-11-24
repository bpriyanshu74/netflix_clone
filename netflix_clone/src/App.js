import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow="true"/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romantic" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentary" fetchUrl={requests.fetchDocumentaries}/>
      
    </div>
  );
}

export default App;
