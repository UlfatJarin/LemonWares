import React from 'react';
import { Card ,Button } from 'antd';
const PakageCard = ({tittle ,Price}) => (
  <Card
    style={{
      width: 300,
    }}
  >
        <div className='flex flex-col p-8'>
        <h5 className='h5 !text-[28px] '>{tittle}</h5>
        <p className='p mt-2.5 mb-7'>with all your customers via all conversation channels in one central dashboard.</p>
        <h2 className='h5 !text-[42px]'>{Price}</h2>
        <p className='p !font-light mt-2.5'>Per month</p>
        <Button className='my-9 !border-black !border-2'>Choose this Plan</Button>
        <div>
            <p className='pI'>2GB SSD</p>
            <p className='pI'>10GB Bandwidth</p>
            <p className='pI'>15 Email Accounts</p>
            <p className='pI'>Unlimited Database</p>
            <p className='pI'>4 Subdomains</p>
            <p className='pI'>1 Parked Domain</p>
            <p className='pI'>2 Websites</p>
            <p className='pI'>Free SSL</p>
            <p className='pI'>Softaculous</p>
        </div>
        </div>
    
   
   
  </Card>
);
export default PakageCard;