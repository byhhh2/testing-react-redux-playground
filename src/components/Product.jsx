import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Product = ({ p }) => {
  const { name, price, img } = p;
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleClick = () => {
    navigate('/cart');
    // dispatch({
    //   type: 'ADD_CART',
    //   payload: p,
    // });
  };

  return (
    <>
      <img src={img} alt="" />
      <p>{name}</p>
      <p>{price}</p>
      <button type="button" onClick={handleClick}>
        장바구니 담기
      </button>
    </>
  );
};

export default Product;
