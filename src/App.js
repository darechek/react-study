import React, {PureComponent} from 'react';
import CustomLoader from './components/Loader';
import Gallery from './components/Gallery';
import {requestUrl } from './api'

export default class App extends PureComponent {
	state = {
		photos: null,
		isFetching: true,
	}

	componentDidMount() {
		fetch(requestUrl)
		.then(response => response.json())
		.then(json => {
			this.setState({
				isFetching: false,
				photos: json.photoset.photo
			});
		});
	}

	handleDeleteClick = (id) => {
		const {photos} = this.state;
		let filtredPhotos = photos.filter(photo => photo.id !== id)
		this.setState({photos: filtredPhotos});
	}

	render() {
		const {photos, isFetching} = this.state;
		
		return (
			<div>
				{isFetching ? 
					<CustomLoader /> 
					: <div>
						<Gallery
							photos={photos}
							onDeleteClick={this.handleDeleteClick}
						/>
					</div>
				}
			</div>
		);
	}
}