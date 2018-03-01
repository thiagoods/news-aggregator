import style from './style';
import ArticlesListWrapper from '../../components/articlesListWrapper';
import sources from './sourceList';

const News = () => (
	<div class={style.news}>
		<ArticlesListWrapper sources={sources}/>
	</div>
);

export default News;