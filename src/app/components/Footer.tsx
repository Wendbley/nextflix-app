import Image from 'next/image'
import { downIcon } from '../../../public/images'

type Props = {}

const Footer = (props: Props) => {
	return (
		<div className='footer'>
			<h2>Questions? call 078256 2568</h2>
			<div className='row'>
				<div className='col'>
					<a href='#'>FAQ</a>
					<a href='#'>Investor Relations</a>
					<a href='#'>Privacy</a>
					<a href='#'>Speed Test</a>
				</div>
				<div className='col'>
					<a href='#'>Help Center</a>
					<a href='#'>Jobs</a>
					<a href='#'>Cookies Preferences</a>
					<a href='#'>Legal Notices</a>
				</div>
				<div className='col'>
					<a href='#'>Account</a>
					<a href='#'>Ways to Watch</a>
					<a href='#'>Corporate Information</a>
					<a href='#'>Only on Netflix</a>
				</div>
				<div className='col'>
					<a href='#'>Media</a>
					<a href='#'>Terms of Use</a>
					<a href='#'>Contact Us</a>
				</div>
			</div>
			<button type='submit' className='language-btn'>
				English <Image src={downIcon} alt='down-icon' />
			</button>
			<p className='copyright-text'>Netflix South Africa</p>
		</div>
	)
}

export default Footer
