import React, { useState } from 'react';
import Modal from 'react-modal';

const programs = [
  {
    id: 1,
    title: 'Teaching Students',
    description: 'Volunteer to teach students in various subjects including Math, Science, and English.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    title: 'Basic Computer Course',
    description: 'Help adults learn basic computer skills including using the internet, email, and office applications.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    title: 'Tailoring for Adults',
    description: 'Teach adults the art of tailoring and help them develop skills to create their own clothing.',
    image: 'https://via.placeholder.com/300x200',
  },
  // Add more programs as needed
];

const VolunteeringPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const openModal = (program) => {
    setSelectedProgram(program);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProgram(null);
    setFormData({ name: '', email: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend or display a success message)
    console.log('Form submitted for program:', selectedProgram, formData);
    closeModal();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Volunteering Programs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {programs.map((program) => (
          <div key={program.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{program.title}</h2>
              <p>{program.description}</p>
              <button
                onClick={() => openModal(program)}
                className="mt-2 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Volunteer
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Volunteer Form"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Volunteer for {selectedProgram?.title}</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default VolunteeringPage;