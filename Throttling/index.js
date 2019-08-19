
let counter = 0;
const getData = () => {
	console.log("Fetching data .... : ", counter++);
}

var doThrottling = function(fn,delay){
	
	let timer;
	var status = true;
	return function(){
		let context = this;
		let args = arguments;
		console.log(args);
		if(status){
			fn.apply(context,args);
			status = false;
			setTimeout(()=>{
				status = true;
			},delay);
		}
		
	}
		
}

const throttlingFunction = doThrottling(getData,3000);	
