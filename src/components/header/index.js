import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
		<header class={style.header}>
			<h1 class={style.title}>NTAN</h1>
			<nav class={style.navigation}>
				<Link class={style.link} activeClassName={style.active} href="/">News</Link>
				<Link class={style.link} activeClassName={style.active} href="/tech">Technology</Link>
				<Link class={style.link} activeClassName={style.active} href="/sports">Sports</Link>
			</nav>
		</header>
);

export default Header;
