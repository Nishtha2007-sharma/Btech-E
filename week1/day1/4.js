let obj = {
    a:1,
    b:2,
    key:"tarak"
}

for(let key in obj){
    console.log(key);
    console.log(obj[key]);
    console.log(obj.key);
    console.log(obj["key"]);
}