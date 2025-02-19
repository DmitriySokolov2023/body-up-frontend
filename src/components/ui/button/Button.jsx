import cn from 'clsx'
import styles from './Button.module.scss'
const Button = ({ children, main = false, size = 'xl', clickHandler }) => {
	return (
		<div className={styles.wrapper}>
			<button
				className={cn(styles.button, styles[size], {
					[styles.main]: main
				})}
				onClick={clickHandler}
			>
				{children}
			</button>
		</div>
	)
}
export default Button
