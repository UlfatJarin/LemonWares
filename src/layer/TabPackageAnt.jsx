import React from 'react';
import { Tabs } from 'antd';
import PCard from './PCard';
import PCard2 from './PCard2';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Basic',
    children: <PCard/>,
  },
  {
    key: '2',
    label: 'Premium',
    children: <PCard2/>,
  },
];
const Tabsant = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default Tabsant;