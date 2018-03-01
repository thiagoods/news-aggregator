import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import News from '../routes/news';
import Tech from '../routes/tech';
import Sports from '../routes/sports';
// import News from 'async!../routes/news';
// import Tech from 'async!../routes/tech';
// import Sports from 'async!../routes/sports';

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<News path="/" />
					<Tech path="/tech/" />
					<Sports path="/sports/" />
				</Router>
			</div>
		);
	}
}
