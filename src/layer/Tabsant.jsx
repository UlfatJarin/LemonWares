import React from 'react';
import { Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Hosting',
    children: 'Premium Web Hosting for Your Website',
  },
  {
    key: '2',
    label: 'Domain',
    children: 'Premium Web Domain for Your Website',
  },
  {
    key: '3',
    label: 'SEO',
    children: 'Premium Web SEO for Your Website',
  },
  {
    key: '4',
    label: 'Email',
    children: 'Premium Web Email for Your Website',
  },
];
const Tabsant = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default Tabsant;