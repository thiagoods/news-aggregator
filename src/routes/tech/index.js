import style from './style';
import ArticlesListWrapper from '../../components/articlesListWrapper';
import sources from './sourceList';

const Tech = () => (
	<div class={style.tech}>
		<ArticlesListWrapper sources={sources}/>
	</div>
);

export default Tech;
