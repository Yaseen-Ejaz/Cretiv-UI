import { useState, useEffect } from 'react';
import './App.css';
import InputField from './components/InputField';
import ContactTable from './components/ContactTable';
import contactData from './data/data.json';

function App() {
  const [filters, setFilters] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
  });

  const [contacts, setContacts] = useState(contactData); // show the list of contacts
  const [selectedContact, setSelectedContact] = useState(null); // store selected contact
  const [searchClicked, setSearchClicked] = useState(false); // track button

  useEffect(() => {
    if (searchClicked) {
      const filteredContacts = contactData.filter(contact => {
        return (
          (filters.firstName === '' || contact.name.toLowerCase().includes(filters.firstName.toLowerCase())) &&
          (filters.lastName === '' || contact.name.toLowerCase().includes(filters.lastName.toLowerCase())) &&
          (filters.dob === '' || contact.dob === filters.dob) &&
          (filters.email === '' || contact.email.toLowerCase().includes(filters.email.toLowerCase())) &&
          (filters.phone === '' || contact.phone.includes(filters.phone)) &&
          (filters.street === '' || contact.address.toLowerCase().includes(filters.street.toLowerCase())) &&
          (filters.city === '' || contact.city.toLowerCase().includes(filters.city.toLowerCase())) &&
          (filters.state === '' || contact.state === filters.state) &&
          (filters.zipcode === '' || contact.zipcode === filters.zipcode)
        );
      });

      setContacts(filteredContacts.length > 0 ? filteredContacts : contactData);
      setSearchClicked(false); // Reset the state after filtering
    }
  }, [searchClicked, filters]); // Run useEffect when `searchClicked` or `filters` change

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
    setSearchClicked(true); // true when the button is clicked
  };

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <>
      <h1 className='text-5xl font-bold text-neutral-950'>Choose a Contact</h1>
      <div className='pt-10 pl-20 pr-20'>
        <h1 className='text-2xl font-bold text-neutral-950'>Search for a contact</h1>
        <div className="flex flex-row pt-10">
          <div className="flex flex-wrap gap-4 max-w-3xl">
            <InputField
              label="First name"
              name="firstName"
              id="firstName"
              value={filters.firstName}
              onChange={handleInputChange}
            />
            <InputField
              label="Last name"
              name="lastName"
              id="lastName"
              value={filters.lastName}
              onChange={handleInputChange}
              required
            />
            <InputField
              label="Date of birth"
              name="dob"
              id="dob"
              type="date"
              value={filters.dob}
              onChange={handleInputChange}
            />
            <InputField
              label="Email address"
              name="email"
              id="email"
              type="email"
              value={filters.email}
              onChange={handleInputChange}
            />
            <InputField
              label="Phone number"
              name="phone"
              id="phone"
              type="tel"
              value={filters.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="w-full">
              <InputField
                label="Street"
                name="street"
                id="street"
                value={filters.street}
                onChange={handleInputChange}
              />
            </div>
            <InputField
              label="City"
              name="city"
              id="city"
              value={filters.city}
              onChange={handleInputChange}
            />
            <div className="flex flex-col w-15">
              <label className="text-sm text-gray-600 mb-1">
                State
              </label>
              <select
                id="state"
                name="state"
                value={filters.state}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled />
                <option value="ON">ON</option>
                <option value="QC">QC</option>
                <option value="BC">BC</option>
              </select>
            </div>
            <InputField
              label="Zip Code"
              name="zipcode"
              id="zipcode"
              value={filters.zipcode}
              onChange={handleInputChange}
            />
          </div>
        </div>

          <button 
          className=" mt-10  bg-white text-blue-500 p-2 
                      border border-gray-400 rounded-md
                      hover:bg-gray-200 ease-in-out duration-300 px-4 py-2 rounded"
          onClick={handleSearch}>
              Search
          </button>

        </div>
      <div className='pt-10 pl-20 pr-20'>
        <ContactTable contacts={contacts} onSelect={handleSelectContact} />
      </div>
    </>
  );
}

export default App;
