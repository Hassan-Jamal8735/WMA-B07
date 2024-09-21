import React, { useState } from 'react';

const RegistrationForm = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    name: '',
    address: '',
    country: '',
    zipCode: '',
    email: '',
    sex: '',
    language: [],
    about: '',
  });

  // State to manage errors
  const [errors, setErrors] = useState({});

  // Handle form data change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        language: checked
          ? [...prevFormData.language, value]
          : prevFormData.language.filter((lang) => lang !== value),
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Validate form inputs
  const validateForm = () => {
    let formErrors = {};

    // Validate User ID
    if (!formData.userId || formData.userId.length < 5 || formData.userId.length > 12) {
      formErrors.userId = 'User ID must be between 5 and 12 characters.';
    }

    // Validate Password
    if (!formData.password || formData.password.length < 7 || formData.password.length > 12) {
      formErrors.password = 'Password must be between 7 and 12 characters.';
    }

    // Validate Name (alphabets only)
    if (!formData.name || !/^[a-zA-Z]+$/.test(formData.name)) {
      formErrors.name = 'Name is required and must contain alphabets only.';
    }

    // Country validation
    if (!formData.country) {
      formErrors.country = 'Please select a country.';
    }

    // ZIP Code validation (numeric only)
    if (!formData.zipCode || !/^\d+$/.test(formData.zipCode)) {
      formErrors.zipCode = 'ZIP Code is required and must be numeric only.';
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      formErrors.email = 'Please enter a valid email.';
    }

    // Validate Sex
    if (!formData.sex) {
      formErrors.sex = 'Please select your sex.';
    }

    // Validate Language (at least one language selected)
    if (formData.language.length === 0) {
      formErrors.language = 'Please select at least one language.';
    }

    // Set errors
    setErrors(formErrors);

    // Return true if no errors
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    if (validateForm()) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* User ID */}
        <div>
          <label>User ID:</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
          />
          {errors.userId && <p style={{ color: 'red' }}>{errors.userId}</p>}
        </div>

        {/* Password */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        {/* Name */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        {/* Address */}
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {/* Address is optional, so no validation */}
        </div>

        {/* Country */}
        <div>
          <label>Country:</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Please select a country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
          </select>
          {errors.country && <p style={{ color: 'red' }}>{errors.country}</p>}
        </div>

        {/* ZIP Code */}
        <div>
          <label>ZIP Code:</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
          />
          {errors.zipCode && <p style={{ color: 'red' }}>{errors.zipCode}</p>}
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        {/* Sex */}
        <div>
          <label>Sex:</label>
          <input
            type="radio"
            name="sex"
            value="Male"
            checked={formData.sex === 'Male'}
            onChange={handleChange}
          /> Male
          <input
            type="radio"
            name="sex"
            value="Female"
            checked={formData.sex === 'Female'}
            onChange={handleChange}
          /> Female
          {errors.sex && <p style={{ color: 'red' }}>{errors.sex}</p>}
        </div>

        {/* Language */}
        <div>
          <label>Language:</label>
          <input
            type="checkbox"
            name="language"
            value="English"
            checked={formData.language.includes('English')}
            onChange={handleChange}
          /> English
          <input
            type="checkbox"
            name="language"
            value="Non English"
            checked={formData.language.includes('Non English')}
            onChange={handleChange}
          /> Non English
          {errors.language && <p style={{ color: 'red' }}>{errors.language}</p>}
        </div>

        {/* About (Optional) */}
        <div>
          <label>About:</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
