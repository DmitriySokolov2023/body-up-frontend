import { FiArrowLeft } from 'react-icons/fi'
import { MdOutlineSportsGymnastics } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'
const Header = ({ backLink = '' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	return (
		<div className={styles.header}>
			{pathname !== '/' ? (
				<button onClick={() => navigate(backLink)}>
					<FiArrowLeft color='white' size={24} />
				</button>
			) : (
				<button onClick={() => navigate('/profile')}>
					<MdOutlineSportsGymnastics color='white' size={28} />
				</button>
			)}
			<Hamburger />
		</div>
	)
}
export default Header
