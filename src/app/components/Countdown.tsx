'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CountdownProps {
	targetDate: string
}

export default function Countdown({ targetDate }: CountdownProps) {
	const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

	useEffect(() => {
		const update = () => {
			const now = Date.now()
			const then = new Date(targetDate).getTime()
			const diff = then - now
			const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)))
			const hours = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
			const minutes = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)))
			const seconds = Math.max(0, Math.floor((diff % (1000 * 60)) / 1000))
			setTimeLeft({ days, hours, minutes, seconds })
			document.title = `${days}d ${hours}h ${minutes}m ${seconds}s - Ado Live Concert`
		}
		update()
		const timer = setInterval(update, 1000)
		return () => clearInterval(timer)
	}, [targetDate])

	const labels = ['Days', 'Hours', 'Minutes', 'Seconds']
	const values = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds]

	return (
		<div className='flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center'>
			{values.map((v, i) => (
				<div
					key={i}
					className='flex-1 bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-xl border-4 border-[#00688f] px-8 py-1 md:p-8 flex md:flex-col items-center justify-center'>
					<AnimatePresence mode='wait' initial={false}>
						<motion.span
							key={v}
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className='text-[3rem] md:text-[6rem] font-extrabold text-[#00688f]'>
							{v}
						</motion.span>
					</AnimatePresence>
					<span className='ml-4 md:ml-0 mt-4 text-base uppercase font-semibold text-white'>{labels[i]}</span>
				</div>
			))}
		</div>
	)
}
