import React, { Fragment, FunctionComponent } from 'react';

import { RouteComponentProps, navigate } from '@reach/router';

import { Input, Typography, Card } from 'antd';
import 'antd/dist/antd.css';

import './index.scss';

const Home: FunctionComponent<RouteComponentProps> = () => {
  const { Search } = Input;
  const { Title } = Typography;

  const onSearchClick = (value: string) => {
    navigate(`/search/${value.toLocaleLowerCase()}`);
  };

  return (
    <Fragment>
      <h1> Test</h1>
      <div className='hero' data-testid="home-hero">
        <div className='hero__content'>
          <Title>Find your new home</Title>
          <Search
            placeholder="Where do you want to rent..."
            onSearch={value => onSearchClick(value)}
            enterButton="Search"
          />
        </div>
      </div>
      <div className='homepage__cards'>
        <Card
          cover={
            <img
              alt='flat'
              src={require('../../images/flat.jpg')}
            />
          }
        >
          <p>Choose from a range of properties from flats to houses.</p>
        </Card>
        <Card
          cover={
            <img
              alt='house'
              src={require('../../images/house.jpg')}
            />
          }
        >
          <p>On URent there are never any admin fees. Ever. We take down listings as soon as they are let, so no more ghost adverts. And we'll protect your deposit and rent money.</p>
        </Card>
        <Card
          cover={
            <img
              alt='house'
              src={require('../../images/landlord_card.png')}
            />
          }
        >
          <p>We find you tenants and help with referencing, contracts and more if you need it.</p>
        </Card>
      </div>
    </Fragment>

  )
}

export default Home;