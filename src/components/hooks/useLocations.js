import { fetchLocations } from "../../api";
import { useState, useEffect } from "react";

export const useLocations = () => {
        const [locations, setLocations] = useState([]);
        useEffect(() => {
            fetchLocations().then((data) => {
                setLocations(data);
          });
        }, []);
    
    return { locations };
}