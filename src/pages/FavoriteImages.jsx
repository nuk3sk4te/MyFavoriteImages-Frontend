import { useState, useEffect } from "react";
import CardImage from "../components/CardImage.jsx";
import { getAllImages } from "../services/ImageService.jsx"

const FavoriteImages = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        imagesList()
    }, [])

    const imagesList = async () => {
        try {
            const response = await getAllImages()
            setImages(response);
        } catch (error) {
            console.error('Error trying to fetch images', error);
        }
    }
    
    return (
        <div className='images'>
            <h1 className="images-title">My favorite Images</h1>
            <div className='cards-container'>
                {
                    images.map((image) =>
                        <CardImage key={image.id} image={image} />
                    )
                }
            </div>
        </div>
    )
}

export default FavoriteImages