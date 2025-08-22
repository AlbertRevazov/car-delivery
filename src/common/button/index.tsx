import React from 'react'
import './styles.css'

interface IButtonProps {
	cn?: string
	title?: string
}

export const Button: React.FC<IButtonProps> = ({ cn, title }) => {
	return <button className={`${cn} btn`}>{title}</button>
}
