export default function AddProducts(dispatch , updatefilte){

    async function getData(){
        // const res = await fetch('https://frankbodyapi.herokuapp.com/products');
        const res = await fetch('https://odd-pleat-cod.cyclic.app/products');
        const data = await res.json();

        let temp = data.map((elem)=>{

            return {...elem}

        })

        updatefilte(temp)
        
        dispatch({
            type:"ADDDATA",
            payload:temp
    
        })
    }
   
    getData()

    

}


function setActiveCategory(curr , dispatch){

    dispatch({
        type:"SETCAT",
        payload : curr
    })
}

function setSortingOrder(curr , dispatch){

    dispatch({
        type:"SORTINGORDER",
        payload:curr
    })
}


function addToCart(data , dispatch , id){

const actual = {...data , cartStatus:true};

// fetch(`https://frankbodyapi.herokuapp.com/products/${id}`,{

    fetch(`https://odd-pleat-cod.cyclic.app/products/${id}`,{


        method:'PATCH',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            "cartStatus" : true
        })
    })


    dispatch({
        type:"ADD",
        payload:actual
    })
}

function quantityZero(data ,dispatch , id){

    // fetch(`https://frankbodyapi.herokuapp.com/products/${id}`,{

        fetch(`https://odd-pleat-cod.cyclic.app/products/${id}`,{
        method:'PATCH',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            "cartStatus" : false
        })
    })

    const newarr = data.filter((elem)=>{
        return elem.id != id
    })

    dispatch({
        type:"DELETE",
        payload:newarr
    })

}

function SetLogin(dispatch , status){

    dispatch({
        type:"SetLogin",
        payload:status,
    })
}
export {setActiveCategory , setSortingOrder , addToCart , quantityZero , SetLogin};