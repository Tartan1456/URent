import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import SearchResults, {SEARCH_RESULTS} from '.';

const mocks = [
  {
    request: {
      query: SEARCH_RESULTS,
      variables: {
        searchLocation: 'manchester',
      },
    },
    result: {
      data: [{
        id: 1,
        beds: 2,
        address: "B314, Angel Gardens",
        rent: "£1600",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, urna in vehicula bibendum, mauris arcu ultrices lectus, eget varius orci nulla nec elit. Donec lacinia ipsum a risus aliquam egestas. Pellentesque placerat venenatis nunc vel venenatis. Fusce aliquet sollicitudin enim, consectetur rhoncus elit efficitur a. Sed egestas nulla vel nulla accumsan ullamcorper. Ut pretium libero eros, a viverra tortor tincidunt at. Mauris tincidunt convallis tempor. Donec egestas neque odio, a luctus felis semper eu. Suspendisse et est enim. In eleifend ligula id consequat pellentesque. Sed venenatis tellus vel vestibulum condimentum.",
        furnished: true,
        maximumTenants: 4
      },
      {
        id: 2,
        beds: 1,
        address: "C413, Angel Gardens",
        rent: "£1200",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, urna in vehicula bibendum.",
        furnished: true,
        maximumTenants: 2
      }],
    },
  },
];

test('renders Search Results component', async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <SearchResults />
    </MockedProvider>
  );

  await new Promise(resolve => setTimeout(resolve, 0));

  const linkElement = getByTestId('search-result-fragment');
  expect(linkElement).toBeInTheDocument();
});
