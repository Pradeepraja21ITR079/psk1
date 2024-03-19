import React, { useEffect, useState } from "react";
import { useProduct } from "../../Context/ProductContext";
import styles from "./styles.module.css";
import Spinner from "../../Components/Spinner";
import { Link } from "react-router-dom";
import Card from "../../Components/Card";
import axios from 'axios';

const Products = () => {
  const { setCategory, category, productList: initialProductList, loading: initialLoading } = useProduct();
  const [productList, setProductList] = useState(initialProductList);
  const [loading, setLoading] = useState(initialLoading);

  // Statically defining categories
  const categories = [ "Grains", "Dryfish", "Powder"];

  useEffect(() => {
    const getProductData = async () => {
      try {
        setLoading(true);
        let url = 'http://localhost:3030/products';
        if (category && category.length > 0) {
          url = `http://localhost:3030/products/category/${category}`;
        }
        const response = await axios.get(url);
        setProductList(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };
    getProductData();
  }, [category]);

  return (
    <>
      <div className="bg-zinc-900/10 mx-auto h-[1.1px] shadow-sm shadow-zinc-900/10 px-12"></div>
      <div className="bg-zinc-900/10 mx-auto h-[1px] shadow-sm shadow-zinc-900/10 px-12"></div>

      <div className={styles.cardGroup}>
        {!loading ? (
          productList.map((item, index) => (
            <Card key={`product-${index}`} item={item} />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default Products;
