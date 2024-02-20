
import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateImage, getImageById } from "../services/ImageService.jsx";

const UpdateImage = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const editImage = async (e) => {
        e.preventDefault();
        const image = { title, description, url };
        try {
            await updateImage(id, image);
            navigate('/images');
        } catch (error) {
            console.error('Error trying to update the image:', error);
        }
    }


    useEffect(() => {
        if (id) {
            getImageById(id).then((response) => {
                setTitle(response.title)
                setDescription(response.description)
                setUrl(response.url)
            }).catch(error => {
                console.log(error)
            })
        }
    }, [id])

    return (
        <div className="create-update-form">
            <div className="text-center">Update Image</div>
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
                        placeholder="Write image title"
                        name="url"
                        className="form-control"
                        value={url}
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
                    <button className="btn btn-outline-success m-2" onClick={(e) => editImage(e)}>Save</button>
                    <Link to='/images' className="btn btn-outline-danger m-2">Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default UpdateImage;