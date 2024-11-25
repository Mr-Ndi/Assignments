import { useState } from "react";

function DropDown() {
  const [isOpen, setIsOpen] = useState(false); // Tracks whether the menu is open or closed

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // Toggle the dropdown state
  };

  const handleOptionClick = (option) => {
    alert(`You selected: ${option}`);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="comp">
      <button onClick={toggleDropdown}>Select an Option</button>

      {isOpen && (
        <div
          style={{
            border: "1px solid black",
            width: "fit-content",
            padding: "5px",
            margin: "5px",
          }}
        >
          {options.map((option, index) => (
            <div key={index}>
              <button onClick={() => handleOptionClick(option)}>
                {option}
              </button>
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
