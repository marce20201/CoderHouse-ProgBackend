export const ADDITEM = 'ADDITEM'
export const DLTITEM = 'DLTITEM'

export const addItem = (item) =>{
    /* console.log("Entra en el action");
    console.log(item); */
    return ({
        type:ADDITEM,
        payload:item
    })
}

export const dltItem = (item)=>({
    type:DLTITEM,
    payload: item
})