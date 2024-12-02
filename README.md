# 2Cretiv UI

# Contact Search Feature

## Overview
This project is a Contact Search feature built using **React**, **Vite**, and **Tailwind CSS**. It allows users to search for contacts from a JSON dataset using multiple filters and displays the results in a table format. Users can select a contact, and the selected contact's details are displayed below.

---

## Features

1. **Search Filters:**
   - Search by:
     - First Name
     - Last Name
     - Date of Birth
     - Email Address
     - Phone Number
     - Address (Street, City, State, Zip Code)
   - Dynamic filtering with multiple fields.

2. **Search Results:**
   - Display results in a table format.
   - Show relevant details, including Name, Date of Birth, Address, City, State, Zip Code, Email, and Phone Number.
   - Include pagination for large datasets.

3. **Single Contact Selection:**
   - Allows users to select a single contact from the results.
   - Updates and displays the selected contact's data below, including:
     - Name
     - Email
     - Phone
     - Address

4. **Responsive UI:**
   - Built with Tailwind CSS for modern, responsive design.
   - Easy-to-use input fields for search criteria.

---

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone github.com/Yaseen-Ejaz/Cretiv-UI
   cd ui-cretiv
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the development server:**
   ```
   npm run dev
   ```

4. **Open the app in your browser:**
   Navigate to `http://localhost:5173` (default Vite port).

---

## Usage

1. **Search for Contacts:**
   - Input search criteria in the respective fields (e.g., first name, last name, email, etc.).
   - Click the **Search** button to filter the results.

2. **View Search Results:**
   - Results matching the criteria will be displayed in a table format.

3. **Select a Contact:**
   - Click on a contact from the table to select it.
   - The selected contact's details will be displayed below the table.

---

## File Structure
```
├── src
│   ├── components
│   │   ├── InputField.jsx        # Reusable input field component.
│   │   └── ContactTable.jsx     # Component for displaying the contacts table.
│   ├── data
│   │   └── data.json            # JSON file containing contact data.
│   ├── App.jsx                  # Main app component.
│   └── index.css                # Global styles.
├── public
│   └── index.html               # Entry point for the app.
├── package.json                 # Project dependencies and scripts.
└── vite.config.js               # Vite configuration file.
```

---

## Sample JSON Data Structure

Example format of `data.json`:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "dob": "1990-01-01",
    "email": "johndoe@example.com",
    "phone": "123-456-7890",
    "address": "123 Main St",
    "city": "Toronto",
    "state": "ON",
    "zipcode": "M1A 1A1"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "dob": "1985-05-15",
    "email": "janesmith@example.com",
    "phone": "987-654-3210",
    "address": "456 Oak Ave",
    "city": "Montreal",
    "state": "QC",
    "zipcode": "H3A 2K3"
  }
]
```

---

## Test Plan

### Test Case 1: Search by First Name
- **Input:** Enter `John` in the First Name field.
- **Expected Result:** Results display contacts with the first name containing "John".

### Test Case 2: Search by Last Name
- **Input:** Enter `Smith` in the Last Name field.
- **Expected Result:** Results display contacts with the last name containing "Smith".

### Test Case 3: Filter by State and City
- **Input:** Select `ON` from the State dropdown and enter `Toronto` in the City field.
- **Expected Result:** Results display contacts located in Toronto, Ontario.

### Test Case 4: Filter by Date of Birth
- **Input:** Enter `1985-05-15` in the Date of Birth field.
- **Expected Result:** Results display contacts with the matching date of birth.

### Test Case 5: Search by Email Address
- **Input:** Enter `johndoe@example.com` in the Email field.
- **Expected Result:** Results display the contact with the specified email address.

---

## Video Demonstration
- **Flow Video:** [Google Drive Link](https://drive.google.com/file/d/1YfJCh5sNUprErEag-37vBbONnHVv-kOj/view?usp=sharing)
---

## Author
- Developed by Yaseen Ejaz Ahmed.
