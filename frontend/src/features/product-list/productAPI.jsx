
export function products() {
  return new Promise(async (resolve) => {
    const request = await fetch.get("https://dummyjson.com/products/category/smartphones");
    const data = await request.json();
    resolve(data);
    console.log(data);    
  });
}



// export default async function products() {
//    try{
//     fetch('https://dummyjson.com/products/category/smartphones')
// .then(res => res.json())
// .then(data=> data);
//    }
//   catch (err) {console.log(`API Error :${err}`);
//   }
// }
