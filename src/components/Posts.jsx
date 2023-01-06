import React, { useEffect, useState } from "react";

const Posts = () => {
  const [notes, setNotes] = useState([
    {
      title: "",
      content: "",
      date: "",
      age: "",
    },
  ]);

  useEffect(() => {
    fetch("/notes")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setNotes(jsonRes));
  });

  return (
    <>
      <h1>Notes</h1>
      <div className="grid grid-auto-fit gap-10">
        {notes.map((note) => (
          <div className="gap-10 bg-[#f3f]">
            <h1 className="text-[20px] ">{note.title}</h1>
            <p>{note.content}</p>
            <p>{note.age}</p>
            <p>{note.date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
