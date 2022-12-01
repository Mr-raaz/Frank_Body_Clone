export default function AddProducts(dispatch , updatefilte){

    async function getData(){
        const res = await fetch('https://frankbodyapi.herokuapp.com/products');
        const data = await res.json();

        updatefilte(data);
        
        dispatch({
            type:"ADDDATA",
            payload:data
    
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


function addToCart(data , dispatch){

    dispatch({
        type:"ADD",
        payload:data
    })
}


export {setActiveCategory , setSortingOrder , addToCart};