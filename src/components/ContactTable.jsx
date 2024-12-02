import React from 'react';
import ReactPaginate from 'react-paginate';

const ContactTable = ({ contacts, onSelect }) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [selectedContact, setSelectedContact] = React.useState(null); // New state for selected contact
  const itemsPerPage = 5;

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleSelectContact = (contact) => {
    setSelectedContact(contact); // Update the selected contact
    if (onSelect) {
      onSelect(contact); // Call the onSelect callback if needed
    }
  };

  const paginatedContacts = contacts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div>
      <table className="w-full bg-white shadow rounded-md border-collapse">
        <thead>
          <tr className="bg-white text-left">
            <th className="p-3"></th>
            <th className="p-3">Name</th>
            <th className="p-3">DOB</th>
            <th className="p-3">Address</th>
            <th className="p-3">City</th>
            <th className="p-3">State</th>
            <th className="p-3">Zip</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
          </tr>
        </thead>
        <tbody>
          {paginatedContacts.map((contact, index) => (
            <tr key={index} className="hover:bg-gray-100 border-t border-gray-300">
              <td className="p-3">
                <input
                  type="radio"
                  name="selectedContact"
                  className="rounded-sm border border-gray-400"
                  onClick={() => handleSelectContact(contact)}
                />
              </td>
              <td className="p-3">{contact.name}</td>
              <td className="p-3">{contact.dob}</td>
              <td className="p-3">{contact.address}</td>
              <td className="p-3">{contact.city}</td>
              <td className="p-3">{contact.state}</td>
              <td className="p-3">{contact.zip}</td>
              <td className="p-3">{contact.email}</td>
              <td className="p-3">{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Display selected contact details */}
      {selectedContact && (
        <div className="mt-4 p-4 border border-gray-300 rounded-md bg-gray-50">
          <h3 className="text-lg font-bold">Selected Contact</h3>
          <p><strong>Name:</strong> {selectedContact.name}</p>
          <p><strong>Email:</strong> {selectedContact.email}</p>
          <p><strong>Phone:</strong> {selectedContact.phone}</p>
          {selectedContact.address && (
            <p><strong>Address:</strong> {selectedContact.address}</p>
          )}
        </div>
      )}

        <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={Math.ceil(contacts.length / itemsPerPage)}
        onPageChange={handlePageClick}
        containerClassName="flex justify-end mt-4 gap-1"
        previousClassName="bg-white text-gray-500 px-3 py-1 rounded-md"
        nextClassName="bg-white text-gray-500 px-3 py-1 rounded-md"
        activeClassName="bg-blue-600 text-white px-3 py-1"
        pageClassName="px-3 py-1"
        />

    </div>
  );
};

export default ContactTable;
