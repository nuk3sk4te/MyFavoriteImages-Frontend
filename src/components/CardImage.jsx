import PropTypes from 'prop-types'

const CardImageList = ({ image }) => {

    CardImageList.propTypes = {
        image: PropTypes.object,
    }

    return (
        <div className="card-image">
            <div className="image-container">
                <img src={image.url} className="image" alt={image.title} title={image.title} />
            </div>
            <div className="image-title-container">
                <p className="card-text description-text">{image.description}</p>
            </div>
        </div>
    )
}

export default CardImageList