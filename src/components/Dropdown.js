import React, { useState } from 'react';
import './DropdownStyles.css'; // Ensure this path matches the location of your CSS file

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select option');
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      setIsOpen(false); // Close the dropdown on selection
    };
  
    return (
      <div className="dropdown-container">
        <button onClick={toggleDropdown} className="dropdown-button">
          {selectedOption}
        </button>
        {isOpen && (
          <ul className="dropdown-list">
            {['Car', 'Bus', 'Truck'].map((option) => (
              <li key={option} onClick={() => handleOptionSelect(option)} className="dropdown-item">
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default Dropdown;