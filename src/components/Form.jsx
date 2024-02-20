import PropTypes from 'prop-types'
import { useState } from "react"
import { Link } from "react-router-dom"

const Form = ({ action }) => {

    Form.propTypes = {
        action: PropTypes.func
    }

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    
    return (
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
                    name="url"
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
                <button className="btn btn-outline-success m-2" onClick={(e) => action(e)}>Save</button>
                <Link to='/images' className="btn btn-outline-danger m-2">Cancel</Link>
            </div>
        </form>
    )
}

export default Form