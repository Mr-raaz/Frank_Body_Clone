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