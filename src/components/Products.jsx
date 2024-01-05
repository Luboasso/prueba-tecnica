import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../features/products/productsSlice";
import { Table } from "antd";
const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    
    sorter: (a, b) => { return a.title.localeCompare(b.title)}
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    sorter: (a, b) => { return a.category.localeCompare(b.category)}
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (price) => `$${price.toFixed(2)}`,
    sorter: {
        compare: (a, b) => a.price - b.price
      },
  
  },
];
const onChange = (pagination, sorter) => {
  console.log(pagination, sorter);
};

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

  return <Table columns={columns} dataSource={data} onChange={onChange} />;
};

export default Products;
