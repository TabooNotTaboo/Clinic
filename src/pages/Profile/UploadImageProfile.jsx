import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadImage } from '../../redux/Slice/uploadProfile';

const UploadImageProfile = ({ showPopup, handleClosePopup }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isUploading, setIsUploading] = useState(false); 
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedFile || imageUrl) {
      const formData = new FormData();
      if (selectedFile) {
        formData.append('file', selectedFile);
      } else if (imageUrl) {
        formData.append('file', imageUrl);
      }

      setIsUploading(true); 
      try {
        await dispatch(uploadImage(formData));
        setUploadSuccess(true); 
        
        setTimeout(() => {
          window.location.reload();
        }, 500); 
      } catch (error) {
        console.error('Upload failed', error);
      }
      setIsUploading(false); 
    } else {
      alert('Please choose an image or enter an image URL.');
    }
  };

  return (
    <>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Upload Image Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 w-full">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Choose Image:
                </label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mt-1 p-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-black rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                  Or Enter Image URL:
                </label>
                <input
                  type="text"
                  id="imageUrl"
                  value={imageUrl}
                  onChange={handleUrlChange}
                  className="mt-1 p-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-black rounded-md"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleClosePopup}
                  className="mr-2 py-2 px-3 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  disabled={isUploading} 
                >
                  {isUploading ? 'Uploading...' : 'Upload'}
                </button>
              </div>
            </form>
            {isUploading && ( 
              <div className="flex justify-center mt-2">
                <div className="loader"></div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default UploadImageProfile;
