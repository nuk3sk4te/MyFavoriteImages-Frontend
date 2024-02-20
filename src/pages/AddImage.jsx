import { useState } from "react"
import { addImage } from "../services/ImageService.jsx"
import { Link, useNavigate } from "react-router-dom";

const AddImage = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const navigate = useNavigate();


    const saveImage = async (e) => {
        e.preventDefault();
        try {
            await addImage({
                title: title,
                description: description,
                url: url
            });
            navigate('/images');
        } catch (error) {
            console.error('Error al crear producto o al navegar:', error);
        }
    }

    return (
        <div className="add-update-form">
            <div className="text-center">Add New Image</div>
            <form>
                <div className="form-group mb-2">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        placeholder="Write image title"
                        name="title"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Image Url</label>
                    <input
                        type="text"
                        placeholder="Add image url"
                        name="img"
                        className="form-control"
                        defaultValue={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Description</label>
                    <input
                        type="text"
                        placeholder="Write image description"
                        name="description"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="d-flex">
                    <button className="btn btn-outline-success m-2" onClick={(e) => saveImage(e)}>Save</button>
                    <Link to='/images' className="btn btn-outline-danger m-2">Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default AddImage;