import { FiArrowLeft } from 'react-icons/fi'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'
const Header = () => {
	return (
		<div className={styles.header}>
			<button onClick={() => {}}>
				<FiArrowLeft color='white' size={24} />
			</button>
			<Hamburger />
		</div>
	)
}
export default Header
