import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [input, setInput] = useState({
    title: "",
    content: "",
    age: "",
    date: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();

    const newNote = {
      title: input.title,
      content: input.content,
      date: input.date,
      age: input.age,
    };

    axios.post("http://localhost:5000/create", newNote);
  }

  return (
    <div>
      <form action="" className="mx-[30px] gap-10 my-[20px]">
        <input
          className="mb-[10px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          placeholder="Enter Title"
        />

        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="content"
          id="content"
          value={input.content}
          cols="30"
          rows="10"
          onChange={handleChange}
          placeholder="Enter Post details"
        />
        <input type="date" name="date" id="date" onChange={handleChange} />
        {/* <input type="file" name="file" id="file" onChange={handleChange} /> */}
        <input type="number" name="age" id="age" onChange={handleChange} />
        <button
          className="text-[20px] text-[#fff] bg-[#002153] px-[15px] py-[7px] my-[10px] rounded-md"
          type="submit"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
