function makeid(l) {
  // write your code here
	// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	let str="";
	for(let i=0;i<l;i++){
		
		str+= String.fromCharCode(generateRandomNum());
	}
	return str;
	
}
function generateRandomNum() {
	const randomIndex =parseInt(Math.random() * 100);
		if(randomIndex<47){
			randomIndex+=47;
			return randomIndex;
		}
}



// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
