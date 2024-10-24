import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/products"; // Ensure your supabase client is set up correctly

const useSupabase = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filterData, setFilterData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [singleProduct, setSingleProduct] = useState<any | null>(null);

  const getDataFromSupabase = async () => {
    setLoading(true);
    let { data, error } = await supabase.from("product").select("*");
    if (data) {
      setProducts(data);
      setError(null);
    }
    if (error) {
      setError(error.message);
    }
    setLoading(false);
  };
  const getFilteredData = async (query:string) => {
    setLoading(true);
    let { data, error } = await supabase.from("product").select("*").or(`title.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`);
    if (data) {
      setFilterData(data);
      setError(null);
    }
    if (error) {
      setError(error.message);
    }
    setLoading(false);
  };
const getSingleProduct= async(id:number)=>{
  let { data, error } = await supabase.from("product").select("*").eq('id',id);
  if(data){
    setSingleProduct(data);
  }
}
  // Optionally, fetch data when the hook is used
  // useEffect(() => {
  //   getDataFromSupabase();
  // }, []);

  return { 
    products,
    loading,
    filterData,
    error,
    getDataFromSupabase,
    getFilteredData,
    singleProduct,
    getSingleProduct,
   };
};

export { useSupabase };
