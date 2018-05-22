import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Card, Image, Button} from 'semantic-ui-react';
import './../style/style.css';

export default class Photo extends PureComponent {
	static propTypes = {
		photo: PropTypes.object.isRequired,
		photoUrl: PropTypes.string.isRequired,
		onDeleteClick: PropTypes.func.isRequired,
		onLikeClick: PropTypes.func.isRequired,
		isPhotoLiked: PropTypes.bool.isRequired,
	}
 
	handleLikeClick = () => this.props.onLikeClick(this.props.photo.id);

	handleDeleteClick = () => this.props.onDeleteClick(this.props.photo.id);

	render() {
		const {photoUrl, isPhotoLiked} = this.props;
		const {id, title} = this.props.photo;
		const likedClass = isPhotoLiked ? 'photo-card--liked' : null;

		return (
			<Card 
				key={id}
				className="photo-card"
			>
				<Image 
					className={'photo-card__image'}
					src={photoUrl}
					alt={title}
					onClick={this.handleOpenClick}
				/>
				<span className="photo-card__title">{title}</span>
				<Card.Content extra>
					<Button
						className={likedClass}
						icon="heart"
						onClick={this.handleLikeClick}
					/>
					<Button 
						icon="trash outline"
						onClick={this.handleDeleteClick}
					/>
				</Card.Content>
			</Card>
		);
	}
}

