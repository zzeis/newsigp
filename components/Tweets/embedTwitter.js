import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function TweetsEmbed() {
  return (
    <div>
      <h2>Tweets</h2>
      <TwitterTimelineEmbed
        sourceType="search"
        screenName="twitter"
        options={{ height: 500, }}
        theme="dark"
        noHeader
        noFooter
        noBorders
        noScrollbar
        autoHeight
        tweetLimit={10}
        dataSource={{
          q: 'iguape'
        }}
      />
    </div>
  );
}

export default TweetsEmbed;
