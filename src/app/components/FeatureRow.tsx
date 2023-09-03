import { StaticImageData } from 'next/image'
import Image from 'next/image'

type Props = {
	title: string
	text: string
	feature: StaticImageData
}

const FeatureRow = ({ title, text, feature }: Props) => {
	return (
		<div className='row'>
			<div className='text-col'>
				<h2>{title}</h2>
				<p>{text}</p>
			</div>
			<div className='img-col'>
				<Image src={feature} alt='feature'priority={true}/>
			</div>
		</div>
	)
}

export default FeatureRow
