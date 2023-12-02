
 import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { TiArrowSortedDown } from "react-icons/ti";
import { BiSolidRightArrow } from "react-icons/bi";


const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Blockchain',
      children: [{
        key: '1-2',
        label: 'NFT',
          children:[
              {
                key: '1-3-1',
              label: 'NFT Development',
              },
              {
                key: '1-3-2',
              label: 'NFT Marketplace Development',
              }
          ]

      },
        {
          key: '2-1',
          label: 'DeFI',
        },
        {
          key: '2-2',
          label: 'Cryptocurrency Exchange',
        },
        {
          key: '2-3',
          label: 'Token Development',
        },
      ],
    },
      {
        key: '2',
        label: 'Web application',
      },
      {
        key: '3',
        label: 'E-commerce solution',
      },
 

];

const DropDown: React.FC = () => (
  <Dropdown menu={{ items }} className='text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px]'>
    <a onClick={(e) => e.preventDefault()} >
      <Space className='text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px]'>
        Services
        <TiArrowSortedDown className='font-extrabold text-sky-600  text-[20px]'/>
      </Space>
    </a>
  </Dropdown>
);

export default DropDown;