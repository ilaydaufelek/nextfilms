import HomeContainers from "@/containers/home";
import { getCategories, getPopulerMovies, getSingleCategory, getTopRatedMovies, } from "@/services/movie";



async function Home({params}) {

  
    const resolvedParams= await params
    let selectedCategory;


   const [{results:topRatedMovies}, { results:populerMovies},{genres:categories}]=
   await Promise.all([getPopulerMovies(),getTopRatedMovies(),getCategories()])



    if(resolvedParams?.category?.length > 0){
     const {results} =await getSingleCategory(resolvedParams.category[0])
     selectedCategory=results
    }
  return (
  <HomeContainers
  topRatedMovies={topRatedMovies}
  populerMovies={populerMovies}
  categories={categories}
  selectedCategory={{
    id:resolvedParams?.category?.[0] ?? '',
     movies :selectedCategory ? selectedCategory.slice(1,7) : []
  }}

   />
   
 );
}
export default Home