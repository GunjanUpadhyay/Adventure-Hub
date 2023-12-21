import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/p1.jpg';
import img2 from '../assets/p2.jpg';
import img3 from '../assets/p3.jpg';
import img4 from '../assets/p4.jpg';
import img7 from '../assets/p5.jpg';
import img5 from '../assets/p6.jpg';
import img6 from '../assets/p7.jpg';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img6} h={['40', '400']}  />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
           
Embarking on an adventure is like opening a book to the first page of an unknown story. It's a journey into the realms of uncertainty and excitement, where each step carries the promise of new experiences. Adventure is the whisper of the wind urging you to explore uncharted territories, the scent of the wild enticing you to leave the familiar behind. It's the taste of adrenaline in the air as you face challenges head-on, pushing boundaries and discovering the untapped reservoirs of courage within yourself. An adventure is not just a physical journey; it's a state of mind that fosters growth, resilience, and an unquenchable thirst for discovery. So, set sail into the unknown, traverse the winding paths, and let the adventure unfold, revealing the hidden landscapes of both the external world and the depths of your own soul.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img7} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
      Adventure awaits beyond fear
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
      Explore the unknown.
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
      Embrace the unexpected journey
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img5} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
      Dare to dream big
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.400'} color= {'black'} {...headingOptions}>
      Discover your own path
      </Heading>
    </Box>
   
  </Carousel>
);

export default Home;