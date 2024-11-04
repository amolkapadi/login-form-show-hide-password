// App.js
import React, { useState } from 'react';
import './App.css'; // Importing the CSS file

const App = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        showPassword: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const toggleShowPassword = () => {
        setFormData((prevData) => ({ ...prevData, showPassword: !prevData.showPassword }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        alert(`Email: ${formData.email}\nPassword: ${formData.password}`);
        setFormData({
          email: '',
          password: '',
          showPassword: formData.showPassword // Retain the showPassword state
      });
    };

    return (
        <div className="form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type={formData.showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group2">
                    <input
                        type="checkbox"
                        id="show-password"
                        checked={formData.showPassword}
                        onChange={toggleShowPassword}
                    />
                    <label htmlFor="show-password">Show Password</label>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default App;
