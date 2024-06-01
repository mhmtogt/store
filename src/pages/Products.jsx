import React, { useEffect, useState } from 'react';
import SearchInput from '../components/SearchInput';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import Loading from '../components/Loading';

const Products = () => {
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [search,setSearch] = useState(""); //burada alt sınıftaki componenti yukarı ile payalaşamadığım için burada state açıyorum 
  console.log(search);

  const getData = async()=>{
    setLoading(true)
    try {
      const {data} = await axios(`https://dummyjson.com/products/search?q=${search}`)
      console.log(data);
      setProducts(data.products);

    } catch (error) {
      console.log(error);
    }
    finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(); 

  },[search] );//her apiye isek atttığımda state değişecek get data fonksyou çalışıyor
  //search kısmı değiştikçe sen getdatayı çalıştır
// boş olsa componentDidMount olarak çalışır tek seffer  


  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <SearchInput search={search} setSearch={setSearch}/>
      <h2 className="text-2xl font-bold mt-8 tracking-tight text-rose-700">
        All Products 
        </h2>

        {
          true ?( 
          <Loading/> )
          :products.length ? 
          <div className="card-div">
            { products.map((item) => <ProductCard/>)} </div>: (
            <h2 className="text-center text-3lx text-red-600"> No Produckts</h2>
          )
        }
       
      </div>
  )
}

export default Products