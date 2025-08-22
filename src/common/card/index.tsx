import React from 'react'
import './styles.css'

interface ICardProps {
	title: string
	subtitle: string
	img?: string
}

export const Card: React.FC<ICardProps> = ({ title, subtitle, img }) => {
	return (
		<div className='card_root'>
			{!!img && (
				<img
					className='card_image'
					src={img}
					loading='lazy'
					alt='service card image'
				/>
			)}
			<h3 className='card_title'>{title}</h3>
			<h4 className='card_subtitle'>
				{subtitle}
			</h4>
		</div>
	)
}
