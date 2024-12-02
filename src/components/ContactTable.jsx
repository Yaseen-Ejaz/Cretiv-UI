import React from 'react';
import ReactPaginate from 'react-paginate';

const ContactTable = ({ contacts, onSelect }) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const itemsPerPage = 5;

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const paginatedContacts = contacts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div>
      <table className="w-full bg-white shadow rounded-md">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3">Name</th>
            <th className="p-3">DOB</th>
            <th className="p-3">Address</th>
            <th className="p-3">City</th>
            <th className="p-3">State</th>
            <th className="p-3">Zip</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Select</th>
          </tr>
        </thead>
        <tbody>
          {paginatedContacts.map((contact, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="p-3">{contact.name}</td>
              <td className="p-3">{contact.dob}</td>
              <td className="p-3">{contact.address}</td>
              <td className="p-3">{contact.city}</td>
              <td className="p-3">{contact.state}</td>
              <td className="p-3">{contact.zip}</td>
              <td className="p-3">{contact.email}</td>
              <td className="p-3">{contact.phone}</td>
              <td className="p-3">
                <button
                  onClick={() => onSelect(contact)}
                  className="text-blue-500 hover:underline"
                >
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={Math.ceil(contacts.length / itemsPerPage)}
        onPageChange={handlePageClick}
        containerClassName="flex justify-center mt-4 gap-2"
        previousClassName="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400"
        nextClassName="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400"
        activeClassName="bg-blue-500 text-white px-3 py-1 rounded-md"
        pageClassName="px-3 py-1 rounded-md hover:bg-gray-200"
      />
    </div>
  );
};

export default ContactTable;
