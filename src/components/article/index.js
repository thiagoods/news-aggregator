import style from './style';
import { formatDate } from '../../utils';

const Article = ({article}) => {
	return (
		<li class={style.article}>
			<a href={article.url} class={style.link} target="_blank">
				<h2 class={style.title}>{article.title}</h2>
				{article.description !== '' && <p class={style.description}>{article.description}</p>}
				<footer class={style.footer}>{formatDate(article.publishedAt)}</footer>
			</a>
		</li>
	);
};

export default Article;