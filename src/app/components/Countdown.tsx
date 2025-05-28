'use client'
import { useState, useEffect } from 'react'
import { Card, CardContent, Typography } from '@mui/material'

interface CountdownProps {
	targetDate: string
}

export default function Countdown({ targetDate }: CountdownProps) {
	const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 })

	useEffect(() => {
		const update = () => {
			const now = Date.now()
			const then = new Date(targetDate).getTime()
			const diff = then - now
			const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)))
			const hours = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
			const minutes = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)))
			setTimeLeft({ days, hours, minutes })
		}
		update()
		const timer = setInterval(update, 60000)
		return () => clearInterval(timer)
	}, [targetDate])

	return (
		<div className='flex flex-col sm:flex-row gap-4'>
			<Card className='flex-1 text-center'>
				<CardContent>
					<Typography variant='h3'>{timeLeft.days}</Typography>
					<Typography variant='subtitle1'>Dni</Typography>
				</CardContent>
			</Card>
			<Card className='flex-1 text-center'>
				<CardContent>
					<Typography variant='h3'>{timeLeft.hours}</Typography>
					<Typography variant='subtitle1'>Godzin</Typography>
				</CardContent>
			</Card>
			<Card className='flex-1 text-center'>
				<CardContent>
					<Typography variant='h3'>{timeLeft.minutes}</Typography>
					<Typography variant='subtitle1'>Minut</Typography>
				</CardContent>
			</Card>
		</div>
	)
}
