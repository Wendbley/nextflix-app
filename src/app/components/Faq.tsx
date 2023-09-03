import React from 'react'
import { Faqs } from '../constants'
import Accordion from './Accordion'

type Props = {}

/**
 * 
 * @param props 
 * @returns 
 */
const Faq = (props: Props) => {
	return (
		<div className='faq'>
			<h2>Frequently Asked Questions</h2>
            <div className="faq-accordion">
                { Faqs.map((faq, index) => (
                    <Accordion key={index} {...faq} />
                ))}
            </div>
		</div>
	)
}

export default Faq
