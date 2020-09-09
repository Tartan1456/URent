import React, { Fragment, FunctionComponent } from 'react';

import { RouteComponentProps } from '@reach/router';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// import { Input, Typography } from 'antd';
import 'antd/dist/antd.css';

import SearchResult from '../searchResult';

import './index.scss';

interface SearchResultsProps extends RouteComponentProps {
  searchLocation?: string;
}

const SearchResults: FunctionComponent<SearchResultsProps> = (props) => {
  const SEARCH_RESULTS = gql`
    {
      rentals(searchLocation: "${props.searchLocation}") {
        beds,
        address,
        rent,
        description,
        furnished,
        maximumTenants
      }
    }
  `;

  // const { Search } = Input;
  // const { Title } = Typography;
  const { loading, error, data } = useQuery(SEARCH_RESULTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <Fragment>
      {data.rentals.map((rental: any) => (
        <SearchResult rental={rental} />
      ))}
    </Fragment>
  )
}

export default SearchResults;