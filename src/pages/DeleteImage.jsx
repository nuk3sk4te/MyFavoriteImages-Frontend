import { useEffect } from "react";
import { deleteImage } from "../services/ImageService.jsx"
import { useNavigate, useParams } from "react-router-dom";

const DeleteImage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        const deleteImageAsync = async () => {
            try {
                await deleteImage(id);
            } catch (error) {
                console.log(error);
            }
        };
        deleteImageAsync();
        navigate('/images');
    }, [navigate, id])

}

export default DeleteImage