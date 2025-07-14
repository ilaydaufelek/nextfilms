import HomeContainers from "@/containers/home";
import Movies from '@/mocks/movies.json'



async function delay(ms){
    return new Promise((res)=>setTimeout(res,ms))
}

 async function Home({params}) {
    await delay(10000)
    let selectedCategory;
    if(params?.category?.length > 0){
        selectedCategory=true

    }
  return (
  <HomeContainers selectedCategory={{
    id:params?.category?.[0] ?? '',
     movies :selectedCategory ? Movies.results.slice(1,7) : []
  }}

   />
   
 );
}
export default Home