import Image from 'next/image'
import { logo } from '../../../public/images'
import './index.css'

type Props = {}

/**
 *
 * @param props
 * @returns
 */
const Navbar = (props: Props) => {
	return (
		<div className='header'>
			<nav>
				<Image src={logo} alt='logo' className='logo' />
				<div>
					<button className='language-btn'>
						English{' '}
						<span>
							<i className='fa-solid fa-plus'></i>
						</span>
					</button>
					<button>Sign In</button>
				</div>
			</nav>

			<div className='header-content'>
				<h1>Save data. Download easily to watch offline.</h1>
				<h3>Plans starting from R49/month. Cancel anytime.</h3>
				<p>
					Ready to watch? Enter your email to create or restart your membership.
				</p>
				<form action='' className='email-signup'>
					<input type='email' placeholder='Email address' required />
					<button type='submit'>Get Started</button>
				</form>
			</div>
		</div>
	)
}

export default Navbar
