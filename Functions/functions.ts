function signature(a:number, b:string):number {
    
    console.log(a, b)
    return a
}

signature(5, "The return is the first parameter you have passed")


let signature2 = (a:string, b:boolean):string => {
    if(b){
        return a
    }else{
        return "you have choose to not to show data"
    }
}

console.log(signature2("data", true))