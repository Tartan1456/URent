import React, { FunctionComponent } from 'react';

import { RouteComponentProps } from '@reach/router';

import { Input, Typography } from 'antd';
import 'antd/dist/antd.css';

import './index.scss';

const Home: FunctionComponent<RouteComponentProps> = () => {
  const { Search } = Input;
  const { Title } = Typography;

  return (
    <div className='hero'>
      <div className='hero__content'>
        <Title>Find your new home</Title>
        <Search
          placeholder="Where do you want to rent..."
          onSearch={value => console.log(value)}
          enterButton="Search"
        />
      </div>
  </div>
  )
}

export default Home;