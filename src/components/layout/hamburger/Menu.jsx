import cn from 'clsx'
import styles from './Hamburger.module.scss'
import { menu } from './menu.data.js'
const Menu = ({ isShow }) => {
	const logoutHandler = () => {}
	return (
		<nav className={cn(styles.menu, { [styles.show]: isShow })}>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
						<a href={item.link}>{item.title}</a>
					</li>
				))}
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}
export default Menu
