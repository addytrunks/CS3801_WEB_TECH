# Volunteer Registration Form

A simple, responsive volunteer registration form built using **HTML**, **CSS**, and **JavaScript**. This form collects basic user details and validates them using **Regex** (Regular Expressions) for a better user experience and data accuracy.

## 🚀 Features

- Responsive and user-friendly design
- Real-time form validation using JavaScript
- Regex-based validation for:
  - Email
  - Phone number
  - Name
- Age restriction (minimum age: 18)

## 🧪 Validations

### ✅ Email
- Must follow format: `example@domain.com`
- Regex used: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

### 📞 Phone Number
- 10 digits only
- Starts with 6, 7, 8, or 9 (Indian format)
- Regex used: `/^[6-9]\d{9}$/`

### 🧑 Name
- Only letters and spaces allowed
- Regex used: `/^[a-zA-Z\s]+$/`

### 🎂 Age
- Minimum age: 18
- Validated using JavaScript number parsing

## 📁 Project Structure

📦 volunteer-form/
├── index.html
├── styles.css
├── script.js
└── README.md
