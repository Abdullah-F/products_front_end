import React, { useState, useEffect } from "react";
import Classes from "./Products.module.css";
import Filter from "../../components/Products/Filter/Filter";
import axios from "../../axios_base_url";
import ProductsList from "../../components/Products/ProductsList/ProductsList";
import ReactPaginate from "react-paginate";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [perPage] = useState(10);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [filterParameters, setFilterParameters] = useState({});

  const handlePageClick = data => {
    let selected = data.selected;
    let page = Math.ceil(selected + 1);
    setPage(page);
  };

  const onApplyFilter = filterParams => {
    setFilterParameters(filterParams);
  };

  useEffect(() => {
    const queryParams = { page: page, per_page: perPage, ...filterParameters };
    let queryString = "";
    for (const key in queryParams) {
      queryString += `&${key}=${queryParams[key]}`;
    }

    queryString = queryString.slice(1, queryString.length);

    const headers = {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    };
    axios
      .get(`/products.json?${queryString}`, {
        headers: headers
      })
      .then(response => {
        setProducts(response.data["products"]);
        setPageCount(response.data["totalNumberOfPages"]);
      })
      .then(error => console.log(error));
  }, [page, perPage, filterParameters]);

  return (
    <div className={Classes.Products}>
      <Filter onApplyFilter={onApplyFilter} />
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
