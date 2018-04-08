import { h, Component } from 'preact';
import style from './style';
import ArticlesList from '../articlesList';
import SourcePicker from '../sourcePicker';
import { API_KEY, API_URL, TOP_HISTORIES } from '../../utils/config';

export default class ArticlesListWrapper extends Component {
	state = {
		source: this.props.sources[0].id
	}

	setWantedSource = (event) => {
		this.setState({source: event.target.value});
	}

	render(props, state) {
		const topHistoriesURL = `${API_URL}/${TOP_HISTORIES}?sources=${state.source}&${API_KEY}`;
		return (
			<div>
				<SourcePicker sources={props.sources} onChangeHandler={this.setWantedSource}/>
				<h1 class={style.title}>Top Histories</h1>
				<ArticlesList urlToFetch={topHistoriesURL}/>
			</div>
		)
	}
}