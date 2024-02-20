import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import editIcon from '/edit.svg'

const CardImageList = ({ image }) => {

    CardImageList.propTypes = {
        image: PropTypes.object,
    }

    return (
        <div className="card-image">
            <div className="image-container">
                <Link to={`/image/${image.id}`}><img src={image.url} className="image" alt={image.title} title={image.title} /></Link>
            </div>
            <div className="image-title-container">
                <Link to={`/image/${image.id}`} className="image-title"><h4>{image.title}</h4></Link>
                <p className="card-text description-text">{image.description}</p>
            </div>
            <Link to={`/update-image/${image.id}`} className="icons">
                    <img src={editIcon} alt="update" />
                </Link>
        </div>
    )
}

export default CardImageList