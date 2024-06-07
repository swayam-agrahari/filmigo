import React, { useState, useEffect } from 'react';
import './AdminPage.css'; // Assuming you create a CSS file for styles

const AdminPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    setMovies(storedMovies);
  }, []);

  const addMovie = (movie) => {
    const updatedMovies = [...movies, movie];
    setMovies(updatedMovies);
    localStorage.setItem('movies', JSON.stringify(updatedMovies));
  };

  const deleteMovie = (index) => {
    const updatedMovies = movies.filter((_, i) => i !== index);
    setMovies(updatedMovies);
    localStorage.setItem('movies', JSON.stringify(updatedMovies));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const image = event.target.image.value;
    const video = event.target.video.value;

    const newMovie = { title, description, image, video };
    addMovie(newMovie);

    event.target.reset();
  };

  return (
    <div className="container mt-5">
      <h1>Admin Page</h1>
      <form id="movieForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" required />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input type="text" className="form-control" id="image" required />
        </div>
        <div className="mb-3">
          <label htmlFor="video" className="form-label">Video URL</label>
          <input type="text" className="form-control" id="video" required />
        </div>
        <button type="submit" className="btn btn-primary">Add Movie</button>
      </form>

      <h2 className="mt-5">Newly Added Movies</h2>
      <div id="movieList" className="mt-3">
        {movies.map((movie, index) => (
          <div className="card mb-3" style={{color: 'white'}} key={index}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={movie.image} className="img-fluid rounded-start" alt={movie.title} />
              </div>
              <div className="col-md-8" style={{color: 'white'}}>
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.description}</p>
                  <p className="card-text"><small className="text-muted">{movie.video}</small></p>
                  <button className="btn btn-danger" onClick={() => deleteMovie(index)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
