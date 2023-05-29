function detectWord(str) {
	let finalStr = ""
	for(let i = 0; i < str.length; i++){
		if(str[i] == str[i].toLowerCase()){
			finalStr += str[i]
		}
	}
	return finalStr
}
