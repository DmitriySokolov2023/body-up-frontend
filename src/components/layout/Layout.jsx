import cn from 'clsx'
import { useRef } from 'react'
import Header from './header/Header'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
	const ref = useRef(null)

	return (
		<section className={cn(styles.wrapper)}>
			<Header />
			{children}
		</section>
	)
}

export default Layout
