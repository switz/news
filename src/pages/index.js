import React from 'react';
import { useQuery } from 'react-query';
import Interweave from 'interweave';
import { UrlMatcher } from 'interweave-autolink';

import Box from '../Box';
import Flex from '../Flex';

export default function Home() {
  const [year, month, day] = new Date().toISOString().replace(/T.*/, '').split('-');
  const { isLoading, isError, data, error } = useQuery('wiki', () =>
    fetch(
      `https://api.wikimedia.org/feed/v1/wikipedia/en/featured/${year}/${month}/${day}?origin=*`
    ).then((res) => res.json())
  );
  console.log(data, isLoading, isError, error);
  if (!data) return null;

  return (
    <Box mx={24}>
      <h2>
        {month}/{day}/{year}
      </h2>
      <Flex gap={24} flexWrap="wrap">
        {data.news.map((news) => (
          <Box key={news.story} width={320}>
            <h3>
              <Interweave
                content={news.story.replace(/href="\.\//g, 'href="https://en.wikipedia.org/wiki/')}
                matchers={[new UrlMatcher('url')]}
              />
            </h3>
            {news.links[0] && (
              <>
                {news.links[0].originalimage && (
                  <img src={news.links[0].originalimage.source} width="100%" />
                )}
                <Interweave content={news.links[0].extract_html} />
              </>
            )}
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
