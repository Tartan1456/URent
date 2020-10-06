import React, { FunctionComponent } from 'react';

import { Button, Typography } from 'antd';
import 'antd/dist/antd.css';

import './index.scss';

interface SearchResultProps {
  rental: {
    beds: number;
    address: string;
    rent: string;
    description: string;
    furnished: boolean;
    maximumTenants: number;
  }
}

const SearchResult: FunctionComponent<SearchResultProps> = ({rental}) => {
  const {beds, address, rent, description, furnished, maximumTenants} = rental;

  const {Text, Paragraph} = Typography

  return (
    <div className='searchResult'>
      <img className='searchResult__image' src={require('../../images/flat.jpg')} alt='property' />
      <div className='searchResult__content'>
        <Text>Rent: { rent }</Text>
        <Text>{beds} bed Flat, { address }</Text>
        <Paragraph ellipsis={{ rows: 2, expandable: false }}>{ description }</Paragraph>
        <Text>Furnished: { furnished ? 'Yes' : 'No'}</Text>
        <Text>Maximum Occupancy: { maximumTenants }</Text>
        <Button className='searchResult__more-btn' type="primary">See More Details</Button>
      </div>
    </div>
  )
}

export default SearchResult;