import React, { useState } from 'react';
import { saveProfileData } from '../../../redux/Slice/addCompany'; 
const AddProfilePopup = ({ handleClosePopup }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    phoneNumber: '',
    passwordAdmin: '',
    confirmPassword: '',
    userNameAdmin: '',
    emailCompany: '',
    address: '',
    taxCompany: '',
    countryCode: ''
  });
  const [requestStatus, setRequestStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, message } = await saveProfileData(formData);
    if (success) {
      setRequestStatus(message);
      setTimeout(() => {
        window.location.reload();
      }, 2000); 
    } else {
      setRequestStatus(message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-md">
        <h2 className="text-lg font-bold mb-4">Add Profile Company</h2>
        {requestStatus && <div className="text-green-600 mb-4">{requestStatus}</div>}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label htmlFor="floating_companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
            <input type="text" name="companyName" id="floating_companyName" className="block w-full px-4 py-2 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter company name" value={formData.companyName} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="floating_userNameAdmin" className="block text-sm font-medium text-gray-700">Admin Username</label>
            <input type="text" name="userNameAdmin" id="floating_userNameAdmin" className="block w-full px-4 py-2 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter admin username" value={formData.userNameAdmin} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="floating_phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" name="phoneNumber" id="floating_phoneNumber" className="block w-full px-4 py-2 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter phone number" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="floating_passwordAdmin" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" name="passwordAdmin" id="floating_passwordAdmin" className="block w-full px-4 py-2 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter password" value={formData.passwordAdmin} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="floating_confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input type="password" name="confirmPassword" id="floating_confirmPassword" className="block w-full px-4 py-2 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Confirm password" value={formData.confirmPassword} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="floating_emailCompany" className="block text-sm font-medium text-gray-700">Company Email</label>
            <input type="email" name="emailCompany" id="floating_emailCompany" className="block w-full px-4 py-2 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter company email" value={formData.emailCompany} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="floating_address" className="block text-sm font-medium text-gray-700">Address</label>
            <input type="text" name="address" id="floating_address" className="block w-full px-4 py-2 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter company address" value={formData.address} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="floating_taxCompany" className="block text-sm font-medium text-gray-700">Tax ID</label>
            <input type="text" name="taxCompany" id="floating_taxCompany" className="block w-full px-4 py-2 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter tax ID" value={formData.taxCompany} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="floating_countryCode" className="block text-sm font-medium text-gray-700">Country Code</label>
            <input type="text" name="countryCode" id="floating_countryCode" className="block w-full px-4 py-2 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter country code" value={formData.countryCode} onChange={handleChange} required />
          </div>
          <div className="col-span-2 flex justify-between items-center">
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
            <button onClick={handleClosePopup} className="text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProfilePopup;
