import { FiArrowLeft } from 'react-icons/fi'
import { MdOutlineSportsGymnastics } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'
const Header = ({ backLink = '' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { isAuth } = useAuth()
	return (
		<div className={styles.header}>
			{pathname !== '/' ? (
				<button onClick={() => navigate(backLink)}>
					<FiArrowLeft color='white' size={24} />
				</button>
			) : isAuth ? (
				<button onClick={() => navigate('/profile')}>
					<MdOutlineSportsGymnastics color='white' size={28} />
				</button>
			) : (
				<div></div>
			)}
			<Hamburger />
		</div>
	)
}
export default Header
