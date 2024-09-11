import React from 'react';
import HeroLeft from '../heros/HeroLeft';
import EditorLeft from '../editors/EditorLeft';
import Sponsor from '../editors/Sponsor';
import Tranding from '../trendings/Tranding';
import { Inspiration } from '../inspirations/Inspiration';
import LatestLeft from '../latests/LatestLeft';

const LeftPart = () => {
  return (
    <div className='flex flex-col gap-5 w-full'>
      <HeroLeft />
      <EditorLeft />
      <Sponsor />
      <Tranding />
      <Inspiration />
      <LatestLeft />
    </div>
  );
};

export default LeftPart;
