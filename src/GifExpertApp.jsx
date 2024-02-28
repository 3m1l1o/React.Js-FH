import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["dragon Ball", "ballon figth"]);

  const onAddCategories = () => {
    setCategories([...categories, "valorant"]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <button onClick={onAddCategories}>onAddCategories</button>
      <ol>
        {categories.map((Category) => {
          return <li key={Category}>{Category}</li>;
        })}
      </ol>
    </>
  );
};
