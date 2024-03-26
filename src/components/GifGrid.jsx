import  PropTypes  from 'prop-types';
import { useEffect } from 'react';
import { getGifs } from "../Helpers/getGifs";
import { getDolarBlue, getDolarOficial} from "../Helpers/getDolarValues";
export const GifGrid = ({ category }) => {
  
  
  
  useEffect(() => {
    const read = async () => {
      const oficial = await getDolarOficial();
      const blue = await getDolarBlue();
      console.log({oficial, blue})
    }

    read();
  }, []);
  
  getGifs( category );


  return (
    <>
      <h3>{category}</h3>
    </>
  );
};  
  GifGrid.propTypes = {
   category: PropTypes.string.isRequired,
  };
  