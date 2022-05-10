function drawWaterfall() {
	const userNum = Number(document.getElementById('input-num').value);
	const arrayFloor = []
	let arrayAsteriscFall = []

	for(let i = 0; i < userNum; i++) {
		let floor = ''

		for(let j = 0; j < i+1; j++) {
			floor = floor + '*'
			console.log(floor)
			if(i = userNum - 1){
				arrayFloor.push(`${floor} \n`)
			}
		}	
	}

	arrayFloor.reverse()
	arrayAsteriscFall = arrayFloor.join('')
	document.getElementById('result').innerHTML = arrayAsteriscFall
}
