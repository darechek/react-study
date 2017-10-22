export const https = 'https://';

export const responseData = {
    method: 'flickr.photosets.getPhotos',
    api_key: 'YOUR-API-KEY',
    photoset_id: '72157683124613654',
    user_id: '156575077@N06',
    auth_token: '72157684066028034-5ba0a94bfe302f07',
    api_sig: 'b254f9aee82453c148435509af05ddec',
};

export const requestUrl = `${https}api.flickr.com/services/rest/?\
method=${responseData.method}\
&api_key=${responseData.api_key}\
&photoset_id=${responseData.photoset_id}\
&user_id=${responseData.user_id}\
&format=json&nojsoncallback=1`;

export const getPhotoUrl = (photo) => {
	return `${https}farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
};

