import './App.css';
import Banner from './banner/Banner';
import Features from './features/Features';
import Footer from './footer/Footer';
import Hero from './hero/Hero';
import Navbar from './navbar/Navbar';
import Result from './result/Result';
import SearchForm from './searchForm/SearchForm';

function App() {
    return (
        <div className="App">
            <Navbar key="navbar" />
            <Hero key="hero" />
            <SearchForm key="searchform" />
            <Result key="result" />
            <Features key="features" />
            <Banner key="banner" />
            <Footer key="footer" />
        </div>
    );
}

export default App;
