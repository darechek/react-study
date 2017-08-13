import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Card, Image, Button} from 'semantic-ui-react';
import './../style/photo.css'

export default class Photo extends PureComponent {
	static propTypes = {
		photo: PropTypes.object,
		onDeleteClick: PropTypes.func.isRequired,
	}

	state = {
		isLiked: false,
	}
 
	handleLikeClick = () => {
		this.setState({isLiked: !this.state.isLiked});
	}

	handleDeleteClick = () => {
		this.props.onDeleteClick(this.props.photo.id);
	}
	
	render() {
		const {isLiked} = this.state;
		const {photoUrl} = this.props;
		const {id, title} = this.props.photo;
		const like = Boolean(isLiked);

		const likeClasses = classNames({
			'photo-card--liked': like,
		});

		return (
			<div>
				<Card 
					key={id}
					className="photo-card"
				>
					<Image 
						className="photo-card__image"
						src={photoUrl}
						alt={title}
					/> 
					<hr/>
					<span className="photo-card__title">{title}</span>
					<Card.Content extra>
						<Button
							className={likeClasses}
							icon="heart"
							onClick={this.handleLikeClick}
						/>
						<Button 
							icon="trash outline"
							onClick={this.handleDeleteClick}
						/>
					</Card.Content>
				</Card>    
			</div>
		);
	}
}

