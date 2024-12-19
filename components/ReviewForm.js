// pages/reviewform.js
import { useState } from 'react';

export default function ReviewForm() {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation: ensure all fields are filled
    if (!name || !rating || !review) {
      setError('Please fill in all fields.');
      return;
    }

    // Log the review data (in a real application, you'd submit this to a backend)
    console.log('Review Submitted:', { name, rating, review });

    // Reset form fields
    setName('');
    setRating('');
    setReview('');
    setError('');
    alert('Thank you for your review!');
  };

  return (
    <div style={formContainerStyles}>
      <h2>Leave a Review</h2>
      <form onSubmit={handleSubmit} style={formStyles}>
        <div style={inputGroupStyles}>
          <label htmlFor="name" style={labelStyles}>Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyles}
            placeholder="Enter your name"
          />
        </div>

        <div style={inputGroupStyles}>
          <label htmlFor="rating" style={labelStyles}>Rating</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            style={inputStyles}
          >
            <option value="">Select a rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>

        <div style={inputGroupStyles}>
          <label htmlFor="review" style={labelStyles}>Your Review</label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            style={textareaStyles}
            placeholder="Write your review here"
          />
        </div>

        {error && <p style={errorStyles}>{error}</p>}

        <button type="submit" style={submitButtonStyles}>Submit Review</button>
      </form>
    </div>
  );
}

// Styles
const formContainerStyles = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
};

const inputGroupStyles = {
  marginBottom: '15px',
};

const labelStyles = {
  fontSize: '1rem',
  marginBottom: '5px',
  fontWeight: 'bold',
};

const inputStyles = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '1rem',
  width: '100%',
};

const textareaStyles = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '1rem',
  width: '100%',
  minHeight: '100px',
};

const submitButtonStyles = {
  padding: '12px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem',
};

const errorStyles = {
  color: 'red',
  fontSize: '0.9rem',
};
