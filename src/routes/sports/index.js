import style from './style';
import ArticlesListWrapper from '../../components/articlesListWrapper';
import sources from './sourceList';

const Sports = () => (
	<div class={style.sports}>
		<ArticlesListWrapper sources={sources}/>
	</div>
);

export default Sports;
