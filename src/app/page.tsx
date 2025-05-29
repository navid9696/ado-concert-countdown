'use client'
import { useRef, useEffect, useState } from 'react'
import Countdown from './components/Countdown'

export default function Home() {
	const audioRef = useRef<HTMLAudioElement | null>(null)
	const [isPlaying, setIsPlaying] = useState(false)

	useEffect(() => {
		const audio = audioRef.current
		if (!audio) return
		audio.muted = true
		audio.play().catch(() => {})
	}, [])

	const handleToggle = () => {
		const audio = audioRef.current
		if (!audio) return
		if (!isPlaying) {
			audio.muted = false
			audio.play()
			setIsPlaying(true)
		} else {
			audio.pause()
			audio.muted = true
			setIsPlaying(false)
		}
	}

	return (
		<div className='h-dvh relative flex items-center justify-center w-screen min-h-screen'>
			<div
				className="
          absolute inset-0
          bg-[url('https://preview.redd.it/hibana-mobile-wallpaper-v0-i2buuf5yj0ye1.jpg?width=1080&crop=smart&auto=webp&s=b5b45a024e237920a434218379f8b33a5d5d81f9')]
          md:bg-[url('https://a.storyblok.com/f/178900/1920x1080/73393b35df/ado-hibana-world-tour.png')]
          bg-center bg-cover bg-no-repeat
        "
			/>
			<div className='absolute inset-0 bg-black/50' />
			<div className='relative z-10 flex flex-col items-center justify-center text-center space-y-6 p-6'>
				<h1 className='text-3xl md:text-6xl font-extrabold text-white smooth-outline'>Ado Live Concert 2025</h1>
				<h2 className='text-xl text-white smooth-outline'>June 17, 2025 · Berlin · 8.30pm</h2>
				<div className='w-full max-w-xs'>
					<Countdown targetDate='2025-06-17T20:30:00' />
				</div>
				<audio
					ref={audioRef}
					autoPlay
					loop
					playsInline
					muted
					src='/audio/ado.mp3'
					className='w-full max-w-xs mb-4 rounded-lg border-4 border-[#00688f]'
				/>
				<button
					onClick={handleToggle}
					className='cursor-pointer
        px-8 py-3
             bg-[#00688f] text-white font-semibold rounded-xl
           transform transition-all duration-300 ease-in-out
       hover:scale-105 hover:shadow-lg hover:bg-[#005f7e]
  				'>
					{isPlaying ? 'Stop Audio' : 'Play Audio'}
				</button>

				<div className='flex space-x-8'>
					{[
						{ href: 'https://x.com/ado1024imokenp', label: 'Twitter' },
						{ href: 'https://www.instagram.com/ado1024sweetpotet/', label: 'Instagram' },
						{ href: 'https://ado-shop.com/', label: 'Official Site' },
					].map(({ href, label }) => (
						<a key={label} href={href} className='text-xl font-semibold text-white hover:text-[#00688f] transition'>
							{label}
						</a>
					))}
				</div>
			</div>
		</div>
	)
}
