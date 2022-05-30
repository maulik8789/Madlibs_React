import React, { useState } from "react";

const NameForm = () => {
  const handleSubmit = evt => {
    evt.preventDefault();
    document.body.innerHTML = `There was the ${formData.color} ${formData.noun1} who loved the ${formData.adjective} ${formData.noun2}!`
    console.log("Check out state ->", formData);
    // do something with the data submitted
  };

  const [formData, setFormData] = useState({
    noun1: "",
    noun2: "",
    adjective: "",
    color : ""
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };
  // end handleChange

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="noun1">Noun1:</label>
      <input
        id="noun1"
        name="noun1"
        value={formData.noun1}
        onChange={handleChange}
      /><br></br>

      <label htmlFor="noun2">Noun2:</label>
      <input
        id="noun2"
        name="noun2"
        value={formData.noun2}
        onChange={handleChange}
      /><br></br>

      <label htmlFor="adjective">Adjective:</label>
      <input
        id="adjective"
        name="adjective"
        value={formData.adjective}
        onChange={handleChange}
      /><br></br>

      <label htmlFor="color">Color:</label>
      <input
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      /><br></br>

      <button>Get New Story!</button>
    </form>
  );
};
// end

export default NameForm;
