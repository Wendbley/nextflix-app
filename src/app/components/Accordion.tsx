'use client'

import { FaPlus } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

type Props = {
	question: string
	answer1: string
	answer2?: string
}

const Accordion = ({ question, answer1, answer2 }: Props) => {
	const [open, setOpen] = useState(false)

	return (
		<div className='accordion'>
			<div className='accordion-title'>
				<h3>{question}</h3>
				<span>
					<FaPlus
						id='open'
						className={`${!open ? '' : 'active'}`}
						onClick={() => setOpen(true)}
					/>

					<AiOutlineClose
						id='close'
						className={`${open ? 'active' : ''}`}
						onClick={() => setOpen(false)}
					/>
				</span>
			</div>
			<div className={`accordion-content ${open ? 'active' : ''}`}>
				<p>{answer1}</p>

				<p>{answer2}</p>
			</div>
		</div>
	)
}

export default Accordion
