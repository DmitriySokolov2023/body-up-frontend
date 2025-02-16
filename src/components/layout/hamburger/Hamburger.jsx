import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import { UseOnClickOutside } from '../../../hooks/UseOnClickOutside'
import styles from './Hamburger.module.scss'
import Menu from './Menu.jsx'
const Hamburger = () => {
	const { ref, isShow, setIsShow } = UseOnClickOutside(false)
	return (
		<div>
			<div className={styles.wrapper} ref={ref}>
				<button onClick={() => setIsShow(!isShow)}>
					{isShow ? (
						<IoClose color='white' size={24} />
					) : (
						<CgMenuRight color='white' size={24} />
					)}
				</button>
				<Menu isShow={isShow} />
			</div>
		</div>
	)
}
export default Hamburger
