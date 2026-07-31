import {seachTool} from '../config/tavily.js'

export const searchAgent =async (state) => {
try{
const results=await searchTool.invoke({
    query:state.propmt
})

console.log(result)

}catch(error){
console.log(error)

}

};
