#!/usr/bin/env node

function performCheer(name) {
	const PREFACE_WITH_AN = ['a', 'e', 'f', 'h', 'i', 'l', 'm', 'n', 'o', 'r', 's', 'x']

	for(const char of name) {
		if(char === ' ') continue
		const article = PREFACE_WITH_AN.indexOf(char.toLowerCase()) > -1 ? 'an' : 'a'

		console.log(`Give me ${article} ${char.toUpperCase()}!`)
	}

	console.log('What does that spell?')
	console.log(`${name}!`)
}

function performSpacedCheer(name) {
	const INTERVAL_ID = setInterval(cheer, 200)
	let char
	let i = 0
	const LENGTH = name.length

	function cheer() {
		char = name[i]
		if(char === ' ') {i++; char = name[i]}

		if(i === LENGTH) {
			console.log('What does that spell?')
			i++
			return
		}

		if(i === LENGTH + 1) {
			console.log(`${name}!`)
			clearInterval(INTERVAL_ID)
			return
		}

		const article = `aefhilmnorsx`.includes(char.toLowerCase()) ? 'an' : 'a'
		console.log(`Give me ${article} ${char.toUpperCase()}!`)
		i++
	}

}

performSpacedCheer('Joe The Sheep Herder')
