import React from 'react';

import './responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './landing.css';
import './responsive.css';

const Landing = () => {
    const handleSearch = (event) => {
        event.preventDefault();
        const searchInput = document.querySelector('.search-input').value;
        if (searchInput.trim() === '') {
            alert('Please enter a search term.');
            return;
        }
        if (searchInput === 'matrix') {
            window.location.href = 'movie2_theMatrix.html';
        }
        console.log('Searching for:', searchInput);
    };

    const scrollToDiv = (divId) => {
        const div = document.getElementById(divId);
        if (div) {
            div.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Required meta tagss for new branch */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link
                rel="shortcut icon"
                href="images/netflix_logo_icon_170919.png"
                type="image/x-icon"
            />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
            />
            {/* Bootstrap CSS */}
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossOrigin="anonymous"
            />

            <title>Neflix</title>
            <div style={{ position: "relative" }}>
                {/* header */}
                <nav className="navbar navbar-expand-md netflix-navbar netflix-padding-left netflix-padding-right  border border-1">
                    <div className="container-fluid">
                        <div className="netflix-row">
                            <div className="left d-flex align-items-center">
                                <a className="navbar-brand" href="home.html">
                                    <img src="logo.png" alt="logo" />
                                </a>
                                <div className="netflix-nav">
                                    <section>
                                        <button onclick="scrollToDiv('home')">Home</button>
                                        <button onclick="scrollToDiv('topchoices')">Top Choices</button>
                                        <button onclick="scrollToDiv('classic')">Classic</button>
                                        <button onclick="scrollToDiv('trending')">Trending</button>
                                        <button>Browse by Language</button>
                                    </section>
                                </div>
                                <div className="netflix-dropdown-box dropdown">
                                    <button
                                        className="netflix-dropdown dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="true"
                                    >
                                        Browse
                                    </button>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton1"
                                    >
                                        <li>
                                            <a className="dropdown-item" href="home.html">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                TV Shows
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Movies
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Trending
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                My List
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="right d-flex align-items-center">
                                <form
                                    className="d-flex search-form"
                                    onsubmit="return validateSearch(event)"
                                >
                                    <input
                                        className="form-control search-input me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        required=""
                                    />
                                    <button className="btn btn-danger" type="submit">
                                        Search
                                    </button>
                                </form>
                                <i className="bi bi-bell-fill ms-3" />
                            </div>
                        </div>
                    </div>
                </nav>
                {/* /header */}
                {/* video */}
                <div className="">
                    <section className="netflix-home-video">
                        <div className="top" />
                        <div className="bottom" />
                        <video src="/video/video.mp4" autoPlay="" loop="" />
                        <div className="content">
                            <section className="left">
                                <img src="./images/image2.png" alt="" />
                                <div className="d-flex mt-2">
                                    <button className="btn btn-light m-2">
                                        {" "}
                                        <i
                                            className="bi bi-play-fill"
                                            style={{ color: "black", padding: "0%" }}
                                        />
                                        Watch Now{" "}
                                    </button>
                                    <button className="btn btn-secondary m-2">
                                        <i className="bi bi-info-circle" style={{ padding: "0%" }} />{" "}
                                        More Information
                                    </button>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
                {/* video */}
                {/* sliders */}
                <div className="slider-box">
                    <div className="container-fluid slider" id="topchoices">
                        <section className="d-flex justify-content-between margin-right">
                            <p className="text-white">
                                {" "}
                                <b>Top choices for you</b>{" "}
                            </p>
                            <div className="">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={0}
                                    className="active tab-change-btn"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                />
                                <button
                                    className="tab-change-btn"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={1}
                                    aria-label="Slide 2"
                                />
                                <button
                                    className="tab-change-btn"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={2}
                                    aria-label="Slide 3"
                                />
                            </div>
                        </section>
                        <div
                            id="carouselExampleIndicators"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div
                                className="carousel-inner"
                                style={{ position: "relative", overflow: "visible" }}
                            >
                                <div className="carousel-item active">
                                    <section className="d-flex">
                                        <div
                                            onclick="window.location.href = 'movie1_inception.html';"
                                            className="card"
                                        >
                                            <img
                                                src="inception.jpeg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <section className="d-flex justify-content-between">
                                                    <div>
                                                        <i className="bi bi-play-circle-fill card-icon" />
                                                        <i className="bi bi-plus-circle card-icon" />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-down-circle card-icon" />
                                                    </div>
                                                </section>
                                                <section className="d-flex align-items-center justify-content-between">
                                                    <p
                                                        className="netflix-card-text m-0"
                                                        style={{ color: "rgb(0, 186, 0)" }}
                                                    >
                                                        97% Relevent
                                                    </p>
                                                    <span className="m-2 netflix-card-text text-white">
                                                        Limited Series
                                                    </span>{" "}
                                                    <span className="border netflix-card-text p-1 text-white">
                                                        HD
                                                    </span>
                                                </section>
                                                <span className="netflix-card-text text-white">
                                                    Romance • Drama • Korea
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            onclick="window.location.href = 'movie2_theMatrix.html';"
                                            className="card"
                                        >
                                            <img
                                                src="./description_pg_imgs/matrix.jpeg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <section className="d-flex justify-content-between">
                                                    <div>
                                                        <i className="bi bi-play-circle-fill card-icon" />
                                                        <i className="bi bi-plus-circle card-icon" />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-down-circle card-icon" />
                                                    </div>
                                                </section>
                                                <section className="d-flex align-items-center justify-content-between">
                                                    <p
                                                        className="netflix-card-text m-0"
                                                        style={{ color: "rgb(0, 186, 0)" }}
                                                    >
                                                        97% Relevent{" "}
                                                    </p>
                                                    <span className="m-2 netflix-card-text text-white">
                                                        Limited Series
                                                    </span>{" "}
                                                    <span className="border netflix-card-text p-1 text-white">
                                                        HD
                                                    </span>
                                                </section>
                                                <span className="netflix-card-text text-white">
                                                    Romance • Drama • Korea
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            onclick="window.location.href = 'movie3_interstellar.html';"
                                            className="card"
                                        >
                                            <img
                                                src="interstellar.jpeg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <section className="d-flex justify-content-between">
                                                    <div>
                                                        <i className="bi bi-play-circle-fill card-icon" />
                                                        <i className="bi bi-plus-circle card-icon" />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-down-circle card-icon" />
                                                    </div>
                                                </section>
                                                <section className="d-flex align-items-center justify-content-between">
                                                    <p
                                                        className="netflix-card-text m-0"
                                                        style={{ color: "rgb(0, 186, 0)" }}
                                                    >
                                                        97% Relevent
                                                    </p>
                                                    <span className="m-2 netflix-card-text text-white">
                                                        Limited Series
                                                    </span>{" "}
                                                    <span className="border netflix-card-text p-1 text-white">
                                                        HD
                                                    </span>
                                                </section>
                                                <span className="netflix-card-text text-white">
                                                    Romance • Drama • Korea
                                                </span>
                                            </div>
                                            <div className="card-body">
                                                <section className="d-flex justify-content-between">
                                                    <div>
                                                        <i className="bi bi-play-circle-fill card-icon" />
                                                        <i className="bi bi-plus-circle card-icon" />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-down-circle card-icon" />
                                                    </div>
                                                </section>
                                                <section className="d-flex align-items-center justify-content-between">
                                                    <p
                                                        className="netflix-card-text m-0"
                                                        style={{ color: "rgb(0, 186, 0)" }}
                                                    >
                                                        97% Relevent
                                                    </p>
                                                    <span className="m-2 netflix-card-text text-white">
                                                        Limited Series
                                                    </span>{" "}
                                                    <span className="border netflix-card-text p-1 text-white">
                                                        HD
                                                    </span>
                                                </section>
                                                <span className="netflix-card-text text-white">
                                                    Romance • Drama • Korea
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            onclick="window.location.href = 'movie4_lordOfTheRings.html';"
                                            className="card"
                                        >
                                            <img
                                                src="/description_pg_imgs/Lord-Of-The-Rings.jpeg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <section className="d-flex justify-content-between">
                                                    <div>
                                                        <i className="bi bi-play-circle-fill card-icon" />
                                                        <i className="bi bi-plus-circle card-icon" />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-down-circle card-icon" />
                                                    </div>
                                                </section>
                                                <section className="d-flex align-items-center justify-content-between">
                                                    <p
                                                        className="netflix-card-text m-0"
                                                        style={{ color: "rgb(0, 186, 0)" }}
                                                    >
                                                        97% Relevent
                                                    </p>
                                                    <span className="m-2 netflix-card-text text-white">
                                                        Limited Series
                                                    </span>{" "}
                                                    <span className="border netflix-card-text p-1 text-white">
                                                        HD
                                                    </span>
                                                </section>
                                                <span className="netflix-card-text text-white">
                                                    Romance • Drama • Korea
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            onclick="window.location.href = 'movie5_pulpFiction.html';"
                                            className="card"
                                        >
                                            <img
                                                src="/description_pg_imgs/pulp-fiction.jpeg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <section className="d-flex justify-content-between">
                                                    <div>
                                                        <i className="bi bi-play-circle-fill card-icon" />
                                                        <i className="bi bi-plus-circle card-icon" />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-down-circle card-icon" />
                                                    </div>
                                                </section>
                                                <section className="d-flex align-items-center justify-content-between">
                                                    <p
                                                        className="netflix-card-text m-0"
                                                        style={{ color: "rgb(0, 186, 0)" }}
                                                    >
                                                        97% Relevent
                                                    </p>
                                                    <span className="m-2 netflix-card-text text-white">
                                                        Limited Series
                                                    </span>{" "}
                                                    <span className="border netflix-card-text p-1 text-white">
                                                        HD
                                                    </span>
                                                </section>
                                                <span className="netflix-card-text text-white">
                                                    Romance • Drama • Korea
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            onclick="window.location.href = 'movie6_forrestGump.html';"
                                            className="card"
                                        >
                                            <img
                                                src="./description_pg_imgs/forest gump.jpeg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <section className="d-flex justify-content-between">
                                                    <div>
                                                        <i className="bi bi-play-circle-fill card-icon" />
                                                        <i className="bi bi-plus-circle card-icon" />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-down-circle card-icon" />
                                                    </div>
                                                </section>
                                                <section className="d-flex align-items-center justify-content-between">
                                                    <p
                                                        className="netflix-card-text m-0"
                                                        style={{ color: "rgb(0, 186, 0)" }}
                                                    >
                                                        97% Relevent
                                                    </p>
                                                    <span className="m-2 netflix-card-text text-white">
                                                        Limited Series
                                                    </span>{" "}
                                                    <span className="border netflix-card-text p-1 text-white">
                                                        HD
                                                    </span>
                                                </section>
                                                <span className="netflix-card-text text-white">
                                                    Romance • Drama • Korea
                                                </span>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="container-fluid  slide2" id="classic">
                        <section className="d-flex justify-content-between margin-right margin-title">
                            <p className="text-white">
                                {" "}
                                <b>Classic</b>{" "}
                            </p>
                            <div className="">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={0}
                                    className="active tab-change-btn"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                />
                                <button
                                    className="tab-change-btn"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={1}
                                    aria-label="Slide 2"
                                />
                                <button
                                    className="tab-change-btn"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={2}
                                    aria-label="Slide 3"
                                />
                            </div>
                        </section>
                        <div
                            id="carouselExampleIndicators"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div
                                className="carousel-inner"
                                style={{ position: "relative", overflow: "visible" }}
                            >
                                <div className="carousel-item active">
                                    <section className="d-flex">
                                        <div
                                            onclick="window.location.href = 'movie7_shawshankRedemption.html';"
                                            className="card"
                                        >
                                            <img
                                                src="./description_pg_imgs/shawshankredemption.jpg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <section className="d-flex justify-content-between">
                                                    <div>
                                                        <i className="bi bi-play-circle-fill card-icon" />
                                                        <i className="bi bi-plus-circle card-icon" />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-down-circle card-icon" />
                                                    </div>
                                                </section>
                                                <section className="d-flex align-items-center justify-content-between">
                                                    <p
                                                        className="netflix-card-text m-0"
                                                        style={{ color: "rgb(0, 186, 0)" }}
                                                    >
                                                        97% Relevent
                                                    </p>
                                                    <span className="m-2 netflix-card-text text-white">
                                                        Limited Series
                                                    </span>{" "}
                                                    <span className="border netflix-card-text p-1 text-white">
                                                        HD
                                                    </span>
                                                </section>
                                                <span className="netflix-card-text text-white">
                                                    Romance • Drama • Japan
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            onclick="window.location.href='movie8_godFather.html';"
                                            className="card"
                                        >
                                            <img
                                                src="./description_pg_imgs/the god father.jpg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <section className="d-flex justify-content-between">
                                                    <div>
                                                        <i className="bi bi-play-circle-fill card-icon" />
                                                        <i className="bi bi-plus-circle card-icon" />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-down-circle card-icon" />
                                                    </div>
                                                </section>
                                                <section className="d-flex align-items-center justify-content-between">
                                                    <p
                                                        className="netflix-card-text m-0"
                                                        style={{ color: "rgb(0, 186, 0)" }}
                                                    >
                                                        97% Relevent
                                                    </p>
                                                    <span className="m-2 netflix-card-text text-white">
                                                        Limited Series
                                                    </span>{" "}
                                                    <span className="border netflix-card-text p-1 text-white">
                                                        HD
                                                    </span>
                                                </section>
                                                <span className="netflix-card-text text-white">
                                                    Romance • Drama • Japan
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            onclick="window.location.href='movie9_fightClub.html';"
                                            className="card"
                                        >
                                            <img
                                                src="./description_pg_imgs/fighter club.jpeg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <section className="d-flex justify-content-between">
                                                    <div>
                                                        <i className="bi bi-play-circle-fill card-icon" />
                                                        <i className="bi bi-plus-circle card-icon" />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-down-circle card-icon" />
                                                    </div>
                                                </section>
                                                <section className="d-flex align-items-center justify-content-between">
                                                    <p
                                                        className="netflix-card-text m-0"
                                                        style={{ color: "rgb(0, 186, 0)" }}
                                                    >
                                                        97% Relevent
                                                    </p>
                                                    <span className="m-2 netflix-card-text text-white">
                                                        Limited Series
                                                    </span>{" "}
                                                    <span className="border netflix-card-text p-1 text-white">
                                                        HD
                                                    </span>
                                                </section>
                                                <span className="netflix-card-text text-white">
                                                    Romance • Drama • Japan
                                                </span>
                                            </div>
                                            <div className="card-body">
                                                <section className="d-flex justify-content-between">
                                                    <div>
                                                        <i className="bi bi-play-circle-fill card-icon" />
                                                        <i className="bi bi-plus-circle card-icon" />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-down-circle card-icon" />
                                                    </div>
                                                </section>
                                                <section className="d-flex align-items-center justify-content-between">
                                                    <p
                                                        className="netflix-card-text m-0"
                                                        style={{ color: "rgb(0, 186, 0)" }}
                                                    >
                                                        97% Relevent
                                                    </p>
                                                    <span className="m-2 netflix-card-text text-white">
                                                        Limited Series
                                                    </span>{" "}
                                                    <span className="border netflix-card-text p-1 text-white">
                                                        HD
                                                    </span>
                                                </section>
                                                <span className="netflix-card-text text-white">
                                                    Romance • Drama • Japan
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            onclick="window.location.href='movie10_darkKnight.html';"
                                            className="card"
                                        >
                                            <img
                                                src="./description_pg_imgs/dark knight.jpg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <section className="d-flex justify-content-between">
                                                    <div>
                                                        <i className="bi bi-play-circle-fill card-icon" />
                                                        <i className="bi bi-plus-circle card-icon" />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-down-circle card-icon" />
                                                    </div>
                                                </section>
                                                <section className="d-flex align-items-center justify-content-between">
                                                    <p
                                                        className="netflix-card-text m-0"
                                                        style={{ color: "rgb(0, 186, 0)" }}
                                                    >
                                                        97% Relevent
                                                    </p>
                                                    <span className="m-2 netflix-card-text text-white">
                                                        Limited Series
                                                    </span>{" "}
                                                    <span className="border netflix-card-text p-1 text-white">
                                                        HD
                                                    </span>
                                                </section>
                                                <span className="netflix-card-text text-white">
                                                    Romance • Drama • Japan
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            onclick="window.location.href='movie11_theIrishMan.html';"
                                            className="card"
                                        >
                                            <img
                                                src="./description_pg_imgs/irishman.jpg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <section className="d-flex justify-content-between">
                                                    <div>
                                                        <i className="bi bi-play-circle-fill card-icon" />
                                                        <i className="bi bi-plus-circle card-icon" />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-down-circle card-icon" />
                                                    </div>
                                                </section>
                                                <section className="d-flex align-items-center justify-content-between">
                                                    <p
                                                        className="netflix-card-text m-0"
                                                        style={{ color: "rgb(0, 186, 0)" }}
                                                    >
                                                        97% Relevent{" "}
                                                    </p>
                                                    <span className="m-2 netflix-card-text text-white">
                                                        Limited Series
                                                    </span>{" "}
                                                    <span className="border netflix-card-text p-1 text-white">
                                                        HD
                                                    </span>
                                                </section>
                                                <span className="netflix-card-text text-white">
                                                    Romance • Drama • Japan
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            onclick="window.location.href='movie12_MarriageStory.html';"
                                            className="card"
                                        >
                                            <img
                                                src="./description_pg_imgs/marriage-story.jpg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <section className="d-flex justify-content-between">
                                                    <div>
                                                        <i className="bi bi-play-circle-fill card-icon" />
                                                        <i className="bi bi-plus-circle card-icon" />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-down-circle card-icon" />
                                                    </div>
                                                </section>
                                                <section className="d-flex align-items-center justify-content-between">
                                                    <p
                                                        className="netflix-card-text m-0"
                                                        style={{ color: "rgb(0, 186, 0)" }}
                                                    >
                                                        97% Relevent
                                                    </p>
                                                    <span className="m-2 netflix-card-text text-white">
                                                        Limited Series
                                                    </span>{" "}
                                                    <span className="border netflix-card-text p-1 text-white">
                                                        HD
                                                    </span>
                                                </section>
                                                <span className="netflix-card-text text-white">
                                                    Romance • Drama • Japan
                                                </span>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden ">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="container-fluid  slide3" id="trending">
                        <section className="d-flex justify-content-between margin-right margin-title2">
                            <p className="text-white">
                                {" "}
                                <b>Trending</b>{" "}
                            </p>
                            <div className="">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={0}
                                    className="active tab-change-btn"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                />
                                <button
                                    className="tab-change-btn"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={1}
                                    aria-label="Slide 2"
                                />
                                <button
                                    className="tab-change-btn"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={2}
                                    aria-label="Slide 3"
                                />
                            </div>
                        </section>
                        <div
                            id="carouselExampleIndicators"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div
                                className="carousel-inner"
                                style={{ position: "relative", overflow: "visible" }}
                            >
                                <div className="carousel-item active">
                                    <section className="d-flex ">
                                        <div
                                            onclick="window.location.href='movie13_Extraction.html';"
                                            className="card"
                                        >
                                            <img
                                                src="./description_pg_imgs/extraction.jpg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <section className="d-flex justify-content-between">
                                                    <div>
                                                        <i className="bi bi-play-circle-fill card-icon" />
                                                        <i className="bi bi-plus-circle card-icon" />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-down-circle card-icon" />
                                                    </div>
                                                </section>
                                                <section className="d-flex align-items-center justify-content-between">
                                                    <p
                                                        className="netflix-card-text m-0"
                                                        style={{ color: "rgb(0, 186, 0)" }}
                                                    >
                                                        97% Relevent
                                                    </p>
                                                    <span className="m-2 netflix-card-text text-white">
                                                        Limited Series
                                                    </span>{" "}
                                                    <span className="border netflix-card-text p-1 text-white">
                                                        HD
                                                    </span>
                                                </section>
                                                <span className="netflix-card-text text-white">
                                                    Romance • Drama • Comédia
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            onclick="window.location.href='movie14_BirdBox.html';"
                                            className="card"
                                        >
                                            <img
                                                src="./description_pg_imgs/birdbox.jpg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <section className="d-flex justify-content-between">
                                                    <div>
                                                        <i className="bi bi-play-circle-fill card-icon" />
                                                        <i className="bi bi-plus-circle card-icon" />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-down-circle card-icon" />
                                                    </div>
                                                </section>
                                                <section className="d-flex align-items-center justify-content-between">
                                                    <p
                                                        className="netflix-card-text m-0"
                                                        style={{ color: "rgb(0, 186, 0)" }}
                                                    >
                                                        97% Relevent
                                                    </p>
                                                    <span className="m-2 netflix-card-text text-white">
                                                        Limited Series
                                                    </span>{" "}
                                                    <span className="border netflix-card-text p-1 text-white">
                                                        HD
                                                    </span>
                                                </section>
                                                <span className="netflix-card-text text-white">
                                                    Romance • Drama • Comédia
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            onclick="window.location.href='movie15_theTrialOfTheChicago7.html';"
                                            className="card"
                                        >
                                            <img
                                                src="./description_pg_imgs/chicago.jpg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <section className="d-flex justify-content-between">
                                                    <div>
                                                        <i className="bi bi-play-circle-fill card-icon" />
                                                        <i className="bi bi-plus-circle card-icon" />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-down-circle card-icon" />
                                                    </div>
                                                </section>
                                                <section className="d-flex align-items-center justify-content-between">
                                                    <p
                                                        className="netflix-card-text m-0"
                                                        style={{ color: "rgb(0, 186, 0)" }}
                                                    >
                                                        97% Relevent
                                                    </p>
                                                    <span className="m-2 netflix-card-text text-white">
                                                        Limited Series
                                                    </span>{" "}
                                                    <span className="border netflix-card-text p-1 text-white">
                                                        HD
                                                    </span>
                                                </section>
                                                <span className="netflix-card-text text-white">
                                                    Romance • Drama • Comédia
                                                </span>
                                            </div>
                                            <div className="card-body">
                                                <section className="d-flex justify-content-between">
                                                    <div>
                                                        <i className="bi bi-play-circle-fill card-icon" />
                                                        <i className="bi bi-plus-circle card-icon" />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-down-circle card-icon" />
                                                    </div>
                                                </section>
                                                <section className="d-flex align-items-center justify-content-between">
                                                    <p
                                                        className="netflix-card-text m-0"
                                                        style={{ color: "rgb(0, 186, 0)" }}
                                                    >
                                                        97% Relevent
                                                    </p>
                                                    <span className="m-2 netflix-card-text text-white">
                                                        Limited Series
                                                    </span>{" "}
                                                    <span className="border netflix-card-text p-1 text-white">
                                                        HD
                                                    </span>
                                                </section>
                                                <span className="netflix-card-text text-white">
                                                    Romance • Drama • Comédia
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            onclick="window.location.href='movie16_ToAllDBoysIHvlovedaBfr.html';"
                                            className="card"
                                        >
                                            <img
                                                src="./description_pg_imgs/boys.jpg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <section className="d-flex justify-content-between">
                                                    <div>
                                                        <i className="bi bi-play-circle-fill card-icon" />
                                                        <i className="bi bi-plus-circle card-icon" />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-down-circle card-icon" />
                                                    </div>
                                                </section>
                                                <section className="d-flex align-items-center justify-content-between">
                                                    <p
                                                        className="netflix-card-text m-0"
                                                        style={{ color: "rgb(0, 186, 0)" }}
                                                    >
                                                        97% Relevent
                                                    </p>
                                                    <span className="m-2 netflix-card-text text-white">
                                                        Limited Series
                                                    </span>{" "}
                                                    <span className="border netflix-card-text p-1 text-white">
                                                        HD
                                                    </span>
                                                </section>
                                                <span className="netflix-card-text text-white">
                                                    Romance • Drama • Comédia
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            onclick="window.location.href='movie17_OldGuard.html';"
                                            className="card"
                                        >
                                            <img
                                                src="./description_pg_imgs/old-guard.jpg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <section className="d-flex justify-content-between">
                                                    <div>
                                                        <i className="bi bi-play-circle-fill card-icon" />
                                                        <i className="bi bi-plus-circle card-icon" />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-down-circle card-icon" />
                                                    </div>
                                                </section>
                                                <section className="d-flex align-items-center justify-content-between">
                                                    <p
                                                        className="netflix-card-text m-0"
                                                        style={{ color: "rgb(0, 186, 0)" }}
                                                    >
                                                        97% Relevent
                                                    </p>
                                                    <span className="m-2 netflix-card-text text-white">
                                                        Limited Series
                                                    </span>{" "}
                                                    <span className="border netflix-card-text p-1 text-white">
                                                        HD
                                                    </span>
                                                </section>
                                                <span className="netflix-card-text text-white">
                                                    Romance • Drama • Comédia
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            onclick="window.location.href='movie18_3Idiots.html';"
                                            className="card"
                                        >
                                            <img
                                                src="./description_pg_imgs/3idiots.jpg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <section className="d-flex justify-content-between">
                                                    <div>
                                                        <i className="bi bi-play-circle-fill card-icon" />
                                                        <i className="bi bi-plus-circle card-icon" />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-down-circle card-icon" />
                                                    </div>
                                                </section>
                                                <section className="d-flex align-items-center justify-content-between">
                                                    <p
                                                        className="netflix-card-text m-0"
                                                        style={{ color: "rgb(0, 186, 0)" }}
                                                    >
                                                        97% Relevent
                                                    </p>
                                                    <span className="m-2 netflix-card-text text-white">
                                                        Limited Series
                                                    </span>{" "}
                                                    <span className="border netflix-card-text p-1 text-white">
                                                        HD
                                                    </span>
                                                </section>
                                                <span className="netflix-card-text text-white">
                                                    Romance • Drama • Comédia
                                                </span>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Forecast</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="container-fluid new-movies-section">
                        <section>
                            <p className="text-white">
                                {" "}
                                <b>Newly Added Movies</b>{" "}
                            </p>
                        </section>
                        <div
                            id="carouselExampleIndicators"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div
                                className="carousel-inner-new"
                                style={{ position: "relative", overflow: "visible" }}
                            ></div>
                        </div>
                    </div>
                </div>
                {/* sliders-end */}
                {/* New movies section */}
                <div id="newMovies" className="row" />
                {/* footer  */}
                <div className="container footer">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="row">
                                <div className="col-md-3">
                                    <ul>
                                        <li>Audio and Subtitles</li>
                                        <li>Media Center</li>
                                        <li>Privacy</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <ul>
                                        <li>Audio Description</li>
                                        <li>Investor Relations</li>
                                        <li>Terms of Service</li>
                                        <li>News</li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <ul>
                                        <li>Help Center</li>
                                        <li>Careers</li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <ul>
                                        <li>Gift Card</li>
                                        <li>Subscribe</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col">
                                    <p className="copy-right">@netflix copyright</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*   Bootstrap Bundle with Popper */}
        </>

    );
};

export default Landing;