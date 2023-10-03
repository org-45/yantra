import RealtimeHero from '@/components/RealtimeHero'
import React from 'react'

export default function page() {
	return (
		<>		
			<div>here we will have a header and footer layout</div>
			<div>here we will have a login with github modal opener</div>
			<div>only loggedin user will be able to access this page</div>
			
			<div>
				<p>Figma is here for the hero section, this <a href="https://www.figma.com/file/N5zbE3MxcP3QajEb6OMzoF/yantra?type=design&node-id=0%3A1&mode=design&t=Z4fSgvGoeiQTtdxP-1" style={{color : "orange"}}>FIGMA</a></p>
				<RealtimeHero/>
			</div>
			<div>
				here we will have a chat app, chat will be real time multiple 
				users will be poting their Ls and Ws just like in twitch
			</div>
		</>
	)
}

