    let incrId=document.getElementById("incr");
	let decrId=document.getElementById("decr");


let product=[
    {
	    id:101,
		product:"Product 1",
		price:2100,
		qty:0
	},
	{
		id:102,
		product:"Product 2",
		price:2100,
		qty:0
	}
	]
let cartItems=[
    {
		id:102,
		product:"Product 1",
		price:2300,
		qty:5
	}
	]
			   
	incrId.addEventListener("click",() => { 
	const addCart=(id) =>{
        let items=cartItems.find(e => e.id===id);
            if(items){
                cartItems.map((item) => {
                    if(item.id === id){
                        return{
                            ...item,
                            qty:item.qty +=1
						}
					}
				})
				console.log(cartItems)
			}
			else{
				let additem=product	.find(e=>e.id===id);
				additem.qty +=1;
				cartItems.push(additem);
				console.log(cartItems)
			}
	}
	addCart(102);
	})
	
	decrId.addEventListener('click',()=>{ 
	const soldCart=(id)=>{
        let items=cartItems.find(e => e.id===id);
            if(items){
                cartItems.map((item) => {
                    if(item.id===id){
                        return{
                            ...item,
                                qty:item.qty-=1
						}
					}
				})
				console.log(cartItems)
			}else{
				let additem=product	.find(e=>e.id===id);
				additem.qty-=1;
				cartItems.push(additem);
				console.log(cartItems)
			}
	}
	soldCart(102);
	})
	
	

	/*incrId.addEventListener('click',()=>{
		cartItems[0].qty ++;
		console.log(cartItems[0].qty);
	})
	decrId.addEventListener('click',()=>{
		cartItems[0].qty --;
		console.log(cartItems[0].qty);
	})*/
	