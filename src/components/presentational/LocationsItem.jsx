import { useState } from "react";

export const LocationsItem = ({ className, name, type, dimension, content }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={className} onClick={() => setOpen(true)}>
                <h1>{name}</h1>
                <div>Тип: {type}</div>
                <div>Измерение: {dimension}</div>
                {open && content}
        </div>
    )
}