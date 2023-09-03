import ButtonForm from './components/ButtonForm'
import Faq from './components/Faq'
import FeatureRow from './components/FeatureRow'
import { Features } from './constants'


export default function Home() {
	return (
		<main>
			<div className='features'>
				{Features.map((feature, index) => 
					 <FeatureRow key={index} {...feature} />
				)}
			</div>
			<Faq/>
			<ButtonForm/>
		</main>
	)
}
