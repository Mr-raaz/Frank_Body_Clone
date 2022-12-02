
 export const DeleteFromCart = (data,index,dispatch)=>{
    data.splice(index,1);
    var NewArr = [...data];
    
    dispatch({
        type : "Delete_From_Cart",
        payload : NewArr,
    })
 }

 export const AddQuantityKey = (data,dispatch)=>{
   const temp = data.map((elem)=>{
    let tem = {...elem , quantity:1}
    return tem;
    })
   dispatch({
    type : "Add_quantity_key",
    payload : [...temp],
   })

 }

 export const DecreaseQuantity = (data,index,dispatch)=>{
     data[index].quantity = data[index].quantity - 1;
     const newArr = [...data];
     dispatch({
        type : "decrease_quantity",
        payload : newArr
     })
 }

 export const IncreaseQuantity = (data,index,dispatch)=>{
    data[index].quantity = data[index].quantity + 1;
    const newArr = [...data];
    
    dispatch({
       type : "increase_quantity",
       payload : newArr
    })
}