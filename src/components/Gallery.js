import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PhotoCard from './PhotoCard';
import {getPhotoUrl} from './../api'
import './../style/photos.css'

export default class Photos extends PureComponent {
	static propTypes = {
	   onDeleteClick: PropTypes.func.isRequired,
	}

	render() {
		const {photos, onDeleteClick} = this.props;

		return (
			<div className="gallery">
				{photos.map((photo) => {

					return  <PhotoCard
								key={photo.id} 
								photo={photo}
								photoUrl={getPhotoUrl(photo)}
								onDeleteClick={onDeleteClick}
							/>
				})}
			</div>
		);
	}
}