import React, { PureComponent } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

export default class CustomLoader extends PureComponent {
	render() {
		return (
			<div>
				<Dimmer active>
					<Loader 
						size="large"
						content="Loading"
					/>
				</Dimmer>
			</div>
		);
	}
}