import React, { useState, useCallback, useEffect } from "react";
import Classes from "./Products.module.css";
import Filter from "../../components/Products/Filter/Filter";
import axios from "../../axios_base_url";
import ProductsList from "../../components/Products/ProductsList/ProductsList";
import ReactPaginate from "react-paginate";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [offset, setOffset] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * perPage);

    setOffset(offset);
  };

  const loadProducts = useCallback(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    };

    axios
      .get(`/products.json?per_page=${perPage}&page=${offset}`, {
        headers: headers
      })
      .then(response => {
        console.log(response);
        setProducts(response.data["products"]);
        setPageCount(response.data["totalNumberOfPages"]);
      })
      .then(error => console.log(error));
  }, []);

  useEffect(loadProducts, []);

  return (
    <div className={Classes.Products}>
      <Filter />
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
      <ProductsList products={products} />
    </div>
  );
};

export default Products;
