import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardImageById from "../components/CardImageById.jsx";
import { getImageById } from "../services/ImageService.jsx"

const FavoriteImage = () => {

    const [image, setImage] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        imageById(id)
    }, [id])

    const imageById = async (id) => {
        try {
            const response = await getImageById(id)
            setImage(response);
        } catch (error) {
            console.error('Error trying to fetch images', error);
        }
    }

    return (
        <CardImageById key={image.id} image={image}/>
    )
}

export default FavoriteImage;