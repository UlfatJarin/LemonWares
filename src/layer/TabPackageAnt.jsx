import React from 'react';
import { Tabs } from 'antd';
import PakageCard from './PakageCard';
import PCard from './PCard';
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
    children: <PakageCard/>,
  },
];
const Tabsant = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default Tabsant;