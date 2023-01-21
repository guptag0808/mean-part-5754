// let url= "https://636dca84b567eed48ac9262f.mockapi.io/blog"

let toys= "https://63c6e85fd307b769674396ce.mockapi.io/childtoys"

let storeData=[];
fetch(toys)
.then((res)=>{
	return res.json()
}).then((data)=>{
	// storeData.push(data)
	storeData=data
	display (data)
	})

	// search-------

	function search(){
		// event.preventDefault()
		
			let searched =document.querySelector("#search").value;
			console.log(searched) 
			 let searchedData= storeData.filter(function(el){
				 return el.name.toLowerCase().includes(searched.toLowerCase())
			 })
		   display(searchedData)
		   }


function filterfun(){
	let sorted = document.querySelector("#filter")
	console.log("srabh")
	if(sorted.value=="LTH"){
		storeData.sort((a,b)=>{
			return a.price - b.price
		}) 
		}if(sorted.value=="HTL"){
		storeData.sort((a,b)=>{
			return b.price - a.price
		})
		}
		display(storeData)
		// window.location.reload()
   }
console.log(storeData)
	// })

// console.log(data)


function display(data){
	document.querySelector("#cont").innerHTML=""
	data.forEach((el)=>{
		let div= document.createElement("div")
		
		
		let img= document.createElement("img")
		img.setAttribute("src",el.image)
		// let image_div=document.createElement("div")
		// image_div.setAttribute("id","div_img")
		// image_div.append(img)
		let name= document.createElement("h3");
         name.textContent=el.name.substr(0,20)+"...";
		 let price =document.createElement("p")
		 price.textContent=el.price
		 let btn= document.createElement("button")
		 btn.textContent="Add To Cart"
		div.append(img,name,price,btn)
		document.querySelector("#cont").append(div)

		// localStorage.setItem("itemsofchild",JSON.stringify())
	})
}