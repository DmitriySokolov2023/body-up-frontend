import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
function Home() {
	return (
		<Layout bgImage={'images/home-bg.jpg'}>
			<Button main={true} clickHandler={() => alert(1)}>
				New
			</Button>
		</Layout>
	)
}

export default Home
