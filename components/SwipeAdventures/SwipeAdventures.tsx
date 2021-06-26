import { Box, Image } from '@chakra-ui/react';
import React, { useMemo, useState } from 'react';
import TinderCard from 'react-tinder-card'

const adventures = [{
  type: 'bandcamp',
  displayName: 'Summer Camps',
  description: '“That one time at band camp” became a cliche for a reason: because summer camp is the ultimate source of absurd and wonderful adventures. The campfire songs and s’mores at the end of each night are just the icing on the cake.'
}, {
  type: 'canoeing',
  displayName: 'Canoeing',
  description: 'Just because you’re not Ariel, doesn’t mean your adventure has to stop at the shore. Canoeing takes you where you’re legs cannot. Want to take your canoeing adventure to the next level?'
}, {
  type: 'hiking',
  displayName: 'Hiking',
  description: 'So much of this big, beautiful world can only be reached by mountain trails and rugged foot paths. Whether you’re an experienced climber or just dipping your toes in the water, breathtaking (literally) trails around the world are calling you to put boots to dirt and hit the road.'
}, {
  type: 'kayaking',
  displayName: 'Kayaking',
  description: 'If you fancy buff arms, fresh air, and some rhythm in your adventure, you’ll love kayaking. Catch gnarly waves in a sea kayak, dodge swirling eddies in a river kayak, or chill out in a kayak on the lake.'
}, {
  type: 'rockclimbing',
  displayName: 'Rock Climbing',
  description: 'It’s the new millennia, and humans can scale cliffs now. #EPIC! Rock climbing is a great way to meet likeminded people and spend a glorious day outdoors on your travels.'
}, {
  type: 'safari',
  displayName: 'Jungle Safari',
  description: 'Channel your inner Indiana Jones with an adventure travel program unlike anything you’ve ever done before. Safari travelers can expect plenty of hair-raising, tail-spinning sights in unlikely destinations.'
}, {
  type: 'yoga',
  displayName: 'Yoga',
  description: 'Greet the sun, breath deeply, reach your toes into the Earth, and bring yourself to heart center. Yoga adventure travel programs are a great way to get to know yourself and explore a foreign environment at the same time.'
}];

export default function SwipeAdventures() {
  const list = [];
  const childRefs = useMemo(() => Array(adventures.length).fill(0).map(i => React.createRef()), []);
  const [lastDirection, setLastDirection] = useState();
  const lovedBucket = [];
  const hatedBucket = [];

  const swiped = (direction: any, adventure: string) => {
    setLastDirection(direction);

    if (direction === 'left') {
      hatedBucket.push(adventure);
    } else {
      lovedBucket.push(adventure)
    }
  }

  for (let idx = 0; idx < adventures.length; idx++) {
    list.push(
      <TinderCard ref={childRefs[idx] as React.RefObject<any>} key={idx} onSwipe={(dir) => swiped(dir, adventures[idx].type)} preventSwipe={['up', 'down']}>
        <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" margin="1rem">
          <Image src={`/adventures/${adventures[idx].type}.png`} alt={`${adventures[idx].displayName}.png`} />
          <Box 
            p="6"
            mt="1"
            fontWeight="semibold"
            as="h2"
            lineHeight="tight"
            isTruncated
            textAlign="center">
            {`${adventures[idx].displayName}`}
          </Box>
          <Box 
            pl="6"
            pr="6"
            pb="6"
            fontWeight="thin"
            as="h6"
            lineHeight="tight"
            flexWrap="wrap"
            textAlign="center">
            {`${adventures[idx].description}`}
          </Box>
        </Box>
      </TinderCard>
    )
  }

  return (
    <div>
      {list}
    </div>
  )
};