import cn from 'clsx'
import { useRef } from 'react'
import Header from './header/Header'
import styles from './Layout.module.scss'

const Layout = ({ children, bgImage, heading, backLink = '/' }) => {
	const ref = useRef(null)

	return (
		<section
			className={cn(styles.wrapper, { [styles.otherPage]: !!heading })}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Header />
			{heading && <h1 className={styles.heading}>{heading}</h1>}
			{children && <div>{children}</div>}
		</section>
	)
}

export default Layout
