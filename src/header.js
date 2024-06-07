import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moviesData from './data/moviesData'; // Import your movie data
import './styles/header.css';


const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    const handleSearch = (e) => {
        e.preventDefault();
        // Find movies matching the search term
        const foundMovies = moviesData.topChoices.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
        // Set search results
        setSearchResults(foundMovies);
    };

    return (
        <header className="header">
            <div className="logo-container">
                <img src="/logo.png" alt="Logo" className="logo" />
            </div>
            <form onSubmit={handleSearch} className="search-bar">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='bar'
                />
                <button type="submit">Search</button>
            </form>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/top-choices">Top Choices</Link></li>
                    <li><Link to="/classic">Classic</Link></li>
                    <li><Link to="/trending">Trending</Link></li>
                </ul>
            </nav>
            {searchResults.length > 0 && (
                <div className="search-results">
                    <h2>Search Results</h2>
                    <ul>
                        {searchResults.map(movie => (
                            <li key={movie.title}>
                                <Link to={`/movie/${movie.title}`}>{movie.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
