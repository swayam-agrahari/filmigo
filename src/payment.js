import React, { useState } from 'react';
import './styles/Payment.css';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [owner, setOwner] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();

  const handleCardNumberChange = (event) => {
    const inputValue = event.target.value.replace(/\D/g, '');
    const formattedValue = inputValue.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
    setCardNumber(formattedValue);
  };

  const handleOwnerChange = (event) => {
    const inputValue = event.target.value.replace(/[^A-Za-z ]/g, '');
    setOwner(inputValue);
  };

  const validateForm = () => {
    if (owner === '' || cvv === '' || cardNumber === '') {
      alert('Please fill in all fields.');
      return false;
    }

    if (cvv.length !== 3) {
      alert('CVV must be 3 digits.');
      return false;
    }

    alert('Payment confirmed successfully!');
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Confirm Your Payment</h1>
      <div className="first-row">
        <div className="owner">
          <h3>Cardholder's name</h3>
          <div className="input-field">
            <input
              type="text"
              id="owner"
              value={owner}
              onChange={handleOwnerChange}
            />
          </div>
        </div>
        <div className="cvv">
          <h3>CVV</h3>
          <div className="input-field">
            <input
              type="password"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="second-row">
        <div className="card-number">
          <h3>Card Number</h3>
          <div className="input-field">
            <input
              type="text"
              id="card-number"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </div>
        </div>
      </div>
      <div className="third-row">
        <h3>Card Expiry</h3>
        <div className="selection">
          <div className="date">
            <select name="months" id="months">
              <option value="Jan">Jan</option>
              <option value="Feb">Feb</option>
              <option value="Mar">Mar</option>
              <option value="Apr">Apr</option>
              <option value="May">May</option>
              <option value="Jun">Jun</option>
              <option value="Jul">Jul</option>
              <option value="Aug">Aug</option>
              <option value="Sep">Sep</option>
              <option value="Oct">Oct</option>
              <option value="Nov">Nov</option>
              <option value="Dec">Dec</option>
            </select>
            <select name="years" id="years">
              <option value="2029">2029</option>
              <option value="2028">2028</option>
              <option value="2027">2027</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>
          </div>
        </div>
      </div>
      <button onClick={validateForm}>CONFIRM</button>
    </div>
  );
};

export default Payment;
