import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["dragon Ball"]);

  const onAddCategory = (loEscrito) => {
    if (categories.includes(loEscrito)) return;
    setCategories([...categories, loEscrito]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
          onNewCategory={(event) => onAddCategory(event)} />
      
        {
           categories.map((category) => (
              <GifGrid 
                key={category} 
                category={category} />
        ))}
      
    </>
  );
};
