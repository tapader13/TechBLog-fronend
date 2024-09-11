import React from 'react';
import HeroRight from '../heros/HeroRight';
import EditorsRight from '../editors/EditorsRight';
import Popular from '../editors/Popular';
import Explore from '../trendings/Explore';
import NewsLetter from './../trendings/NewsLetter';
import { Celebration } from '../inspirations/Celebration';
import Sponsor from '../latests/latestright/Sponsor';
import Tags from '../latests/latestright/Tags';

const RightPart = () => {
  return (
    <div className='flex flex-col gap-5 w-full'>
      <HeroRight />
      <EditorsRight />
      <Popular />
      <Explore />
      <NewsLetter />
      <Celebration />
      <Sponsor />
      <Tags />
    </div>
  );
};

export default RightPart;
