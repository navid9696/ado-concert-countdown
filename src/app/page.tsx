import Image from 'next/image'
import Countdown from './components/Countdown'

export default function Home() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-purple-800 to-indigo-900 text-white p-8 flex flex-col items-center'>
			<div className='w-full max-w-3xl mb-8 relative h-64 sm:h-96'>
				<Image
					src='https://i.scdn.co/image/ab6761610000e5ebbcb1c184c322688f10cdce7a'
					alt='Ado Live Concert'
					fill
					className='object-cover rounded-lg'
					priority
				/>
			</div>
			<h1 className='text-4xl font-bold mb-4'>Ado Live Concert 2025</h1>
			<p className='text-lg mb-2'>June 17, 2025 · Berlin</p>
			<div className='mb-8 w-full max-w-md'>
				<Countdown targetDate='2025-06-17T20:30:00' />
			</div>
			<div className='flex gap-4'>
				<a
					href='https://x.com/ado1024imokenp?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
					className='underline'>
					Twitter
				</a>
				<a href='https://www.instagram.com/ado1024sweetpotet/?hl=en' className='underline'>
					Instagram
				</a>
				<a
					href='https://ado-shop.com/?srsltid=AfmBOoq0iOESTXClaRPrlFY-q5CnvPLNCJJNKLNMdCGuD50yyyBXmlLV'
					className='underline'>
					Official Site
				</a>
			</div>
		</div>
	)
}
