import React, { useEffect, useState } from "react";

import "./styles.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(0);

  const getAPIData = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
      );

      const data = await response.json();

      console.log("data", data);

      if (data && data?.products) {
        setProducts(data?.products);
        setTotalPages(data?.total / 10);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getAPIData();
  }, [page]);

  const handlePageinationClick = (idx) => {
    // if (idx >= 1 && idx <= products.length / 10 && idx !== page) {
    if (idx >= 1 && idx <= totalPages && idx !== page) {
      setPage(idx);
    }
  };

  return (
    <div>
      {products?.length > 0 && (
        <div className="products">
          {/* {products?.slice(page * 10 - 10, page * 10)?.map((item) => { */}
          {products?.map((item) => {
            return (
              <span className="products__single" key={item?.id}>
                <img src={item.thumbnail} alt={item.title} />
                <span>{item?.title}</span>
              </span>
            );
          })}
        </div>
      )}

      {products.length > 0 && (
        <div className="pagination">
          <span
            className={page > 1 ? "" : "pagination_disable"}
            onClick={() => handlePageinationClick(page - 1)}
          >
            ◀️
          </span>

          {/* {[...Array(products.length / 10)].map((_, i) => { */}
          {[...Array(totalPages)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => handlePageinationClick(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}

          <span
            // className={page < products.length / 10 ? "" : "pagination_disable"}
            className={page < totalPages ? "" : "pagination_disable"}
            onClick={() => handlePageinationClick(page + 1)}
          >
            ▶️
          </span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
