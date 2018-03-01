import { h, Component } from 'preact';
import style from './style';
import Article from '../article';

export default class ArticlesList extends Component {
	state = {
		isLoading: true,
		newsJSON: {}
	}

	componentDidMount = () => {
		this.getContent(this.props.urlToFetch);
	}

	componentWillReceiveProps = (nextProps) => {
		this.setState({isLoading: true});
		this.getContent(nextProps.urlToFetch);
	}

	getContent = (urlToFetch) => {
		fetch(urlToFetch)
			.then(response => response.json())
			.then(responseJSON => this.setState({isLoading: false, newsJSON: responseJSON}))
	}

	renderLoad = () => {
		return (
			<div class={style.loadingState}><div class={style.loader}></div></div>
		);
	}

	renderList = (newsJSON) => {
		const items = newsJSON.status === 'ok' ?
			newsJSON.articles.map(item => <Article article={item}/>) :
			'';
		return (
			<ul class={style.newsGrid}>
				{items}
			</ul>
		);
	}

	render(props, state) {
		return this.state.isLoading ?
			this.renderLoad():
			this.renderList(state.newsJSON);
	}
}
