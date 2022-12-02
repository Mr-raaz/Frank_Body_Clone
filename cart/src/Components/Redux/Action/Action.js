
 export const DeleteFromCart = (data,index,dispatch)=>{
    data.splice(index,1);
    var NewArr = [...data];
    
    dispatch({
        type : "Delete_From_Cart",
        payload : NewArr,
    })
 }

 export const AddQuantityKey = (data,dispatch)=>{
//     data.map((el)=>{
//     return el.quantity = 1;
//    })
//    console.log(newArr);
 }