import Layout from '../../layout/Layout'
import Field from '../../ui/field/Field'

const Auth = () => {
	return (
		<>
			<Layout heading='Sign in' bgImage='/images/auth-bg.png' />
			<div className='wrapper-inner-page'>
				<form action=''>
					<Field />
				</form>
			</div>
		</>
	)
}

export default Auth
