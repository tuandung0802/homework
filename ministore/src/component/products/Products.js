import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Product from "./Product";
const ProductStyles = styled.div`
  .products-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }

  .product {
    &-item {
    }
  }
`;
const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const sanphams = useSelector((state) => state.productsReducer.products);
  //   console.log(sanphams);
  const error = useSelector((state) => state.productsReducer.error);
  const loading = useSelector((state) => state.productsReducer.loading);

  useEffect(() => {
    // dispatch({
    //   type: Actions.LAY_DANH_SACH_SAN_PHAM,
    // });
    setProducts(sanphams);
  }, [dispatch, sanphams]);

  return (
    <ProductStyles>
      <div className="products-list">
        {products.loading && <p>Loading...</p>}
        {/* {products.length === 0 && !loading && <p>No sanphams available!</p>} */}
        {error && !loading && <p>{error}</p>}
        {products.length > 0 &&
          products.map((product, key) => (
            <div className="product-item">
              <Product key={key} product={product} />
            </div>
          ))}
      </div>
    </ProductStyles>
  );
};

export default Products;
