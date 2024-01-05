import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../features/products/productsSlice";
import { Table } from "antd";


const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `$${price.toFixed(2)}`,
    },
  ];

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const data = products.map((product) => ({
    key: product.id,
    title: product.title,
    category: product.category,
    price: product.price,
  }));

  return <Table columns={columns} dataSource={data} />;
};

export default Products;
