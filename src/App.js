import React, {PureComponent} from 'react';
import {requestUrl} from './api';

import CustomLoader from './components/Loader';
import Gallery from './components/Gallery';

export default class App extends PureComponent {
	state = {
		photos: null,
		isFetching: true,
		likedPhotos: [],
	}

	componentDidMount() {

		localStorage.getItem('liked') ? this.setState({ likedPhotos: JSON.parse(localStorage.getItem('liked'))}) : null;

		fetch(requestUrl)
		.then(response => response.json())
		.then(json => {
			this.setState({
				isFetching: false,
				photos: json.photoset.photo,
			});
		});
	}

	handleLikeClick = (id) => {
		const {likedPhotos} = this.state;
		const filtredPhotos = likedPhotos.filter(value => value !== id);
		const newLikedPhotos = !likedPhotos.includes(id) ? [...likedPhotos, id] : filtredPhotos;
		this.setState({likedPhotos: newLikedPhotos});
		localStorage.setItem('liked', JSON.stringify(newLikedPhotos));
	}	

	handleDeleteClick = (id) => {
		const {photos, likedPhotos} = this.state;
		const filtredPhotos = photos.filter(photo => photo.id !== id);
		const newLikedPhotos = likedPhotos.filter(value => value !== id);
		this.setState({ photos: filtredPhotos, likedPhotos: newLikedPhotos });
		localStorage.setItem('liked', JSON.stringify(newLikedPhotos));
	}

	render() {
		const {photos, isFetching, likedPhotos} = this.state;
		
		return (
				isFetching ? 
					<CustomLoader /> 
					: <Gallery
							photos={photos}
							likedPhotos={likedPhotos}
							onDeleteClick={this.handleDeleteClick}
							onLikeClick={this.handleLikeClick}
					/>
				
		);
	}
}