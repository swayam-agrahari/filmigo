import React, { useState } from 'react';
import './styles/Booking.css';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seatPrice = 10; // Assuming each seat costs $10
  const taxRate = 0.07; // Assuming 7% tax
  const navigate = useNavigate();

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const calculateTotal = () => {
    const totalAmount = selectedSeats.length * seatPrice;
    return (totalAmount * (1 + taxRate)).toFixed(2);
  };

  const handlePayment = () => {
    navigate('/payment')
  };

  const renderSeats = (rows, cols) => {
    const seats = [];
    for (let row = 0; row < rows; row++) {
      const seatRow = [];
      for (let col = 0; col < cols; col++) {
        const seatNumber = row * cols + col + 1;
        seatRow.push(
          <div
            key={seatNumber}
            className={`seat ${selectedSeats.includes(seatNumber) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seatNumber)}
          >
            {seatNumber}
          </div>
        );
      }
      seats.push(<div key={row} className="row">{seatRow}</div>);
    }
    return seats;
  };

  return (
    <>
      <div className="booking-container">
        <ul className="status">
          <li>
            <div className="seat"></div>
            <small>N/A</small>
          </li>
          <li>
            <div className="seat selected"></div>
            <small>SELECTED</small>
          </li>
          <li>
            <div className="seat occupied"></div>
            <small>OCCUPIED</small>
          </li>
        </ul>
        <div className="screen"></div>
        <div className="seats">{renderSeats(8, 12)}</div>
        <div className="price">
          <div className="total">
            Total: $<span id="total-amount">{calculateTotal()}</span>
          </div>
          <button className="pay-btn" onClick={handlePayment}>Proceed to Payment</button>
        </div>
      </div></>
  );
};

export default Booking;
