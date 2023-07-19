
	

 let calc = () =>{
 	let cal=document.getElementById("screen").innerHTML;
 	
 	 total = eval(cal)


 	 if(Number.isInteger(total))
 	 	document.getElementById("screen").innerHTML = total;
 	 else
 	 	document.getElementById("screen").innerHTML = total.toFixed(2);
 	 	// total=total.toFixed(2)


 	 

 	 
 }


 let bak = () =>{
 	 var innerHTML = document.getElementById("screen").innerHTML;
    document.getElementById("screen").innerHTML = innerHTML.substr(0, innerHTML.length - 1);
 }


const myDiv = document.getElementById("screen").innerHTML;
console.log(myDiv)
 
 // const tag=document.getElementsByTagName("button");
 // 	tag.addEventListener("click", function eve() {
 // 		console.log("hello")
 // 	})

	 // const myDiv = document.getElementById("screen");
  
 	// 	 myDiv.addEventListener("change", (event) => {
  //  		 const content = event.target.textContent;
  //  		 console.log(content);
  // 	});




	// const myDiv = document.getElementById("myDiv");
  
 //  myDiv.addEventListener("input", (event) => {
 //    const content = event.target.textContent;
 //    console.log(content);
 


 // function len(event){
 // 	alert("len worked")
 // 	console.log(event)
 // 	// let val = document.getElementById("screen").innerHTML;
 // 	// console.log(val.length)
 // 	// if(val.length==9)
 // 	// 	alert("max input no reached");

 // }