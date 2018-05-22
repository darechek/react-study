import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {getPhotoUrl} from './../api';
import Photo from './Photo';

import './../style/style.css';

export default class Photos extends PureComponent {
	static propTypes = {
		photos: PropTypes.array.isRequired,
		onDeleteClick: PropTypes.func.isRequired,
		onLikeClick: PropTypes.func.isRequired,
		likedPhotos: PropTypes.array.isRequired,
	}

	isPhotoLiked = (id, likedPhotos) => likedPhotos.includes(id);

	render() {
		const {photos, onDeleteClick, onLikeClick, likedPhotos} = this.props;

		return (
			<div className="gallery">
				{photos.map((photo) => {
					return	<Photo
						key={photo.id} 
						photo={photo}
						likedPhotos={likedPhotos}
						photoUrl={getPhotoUrl(photo)}
						onDeleteClick={onDeleteClick}
						onLikeClick={onLikeClick}
						isPhotoLiked={this.isPhotoLiked(photo.id, likedPhotos)}
					/>;		
				})}
			</div>
		);
	}
}
