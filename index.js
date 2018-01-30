//测试一下
let findName = (username)=>{
  return(
    new Promise((resolve,reject)=>{
      if(username){
        consol.log(username);
        resolve(username);
      }
      else{
        reject('not find this name')
      }
    }));
