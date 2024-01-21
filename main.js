//display content
const displayContent=(content)=>{
    //'result' is the id of input tag
    result.value+=content
}
const clearScreen=()=>{
    result.value=""
}
const finalOutput=()=>{

try{
    result.value=eval(result.value)}
    catch{
        result.value="Error"
    }
}

const removeItem=()=>{
    result.value=result.value.slice(0,-1)
}