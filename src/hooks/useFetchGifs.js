import { useState } from "react";
import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true)
    
      const getImage = async () => {
        const newImage = await getGifs(category);
        setImages(newImage);
        setisLoading(false);
      }
    
      useEffect( () => {
        getImage();
      }, [])
    
  return {
    images,
    isLoading
  }

}
