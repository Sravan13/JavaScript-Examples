
let counter = 0;
const getData = () => {
	console.log("Fetching data .... : ", counter++);
}

var doDebouncing = function(fn,delay){
	
	let timer;
	
	return function(){
		
		var context = this;
		clearTimeout(timer);
		
		timer =	setTimeout(()=>{
			fn.apply(context,arguments);
		},delay);
		
	}
		
}

const debounceFunction = doDebouncing(getData,300);	
