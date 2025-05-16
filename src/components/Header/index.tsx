import { Stack, Group, Title, Badge, Image, Text, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import LOGO from '../../assets/the-innovation-program-logo-transparent.png';

function Header() {
  const isMobile = useMediaQuery(`(max-width: ${em(600)})`);

  return (
    <Stack
      justify='center'
      align='center'
      gap='md'
      px={isMobile ? 'md' : 0}
      w='100%'
    >
      <Group
        grow={!isMobile}
        justify='center'
        align='center'
        wrap='wrap'
        gap={isMobile ? 'xs' : 'md'}
      >
        <Image src={LOGO} maw={'10rem'} alt='The Innovation Program Logo' />
        <Stack justify='center' gap='xs' align={isMobile ? 'center' : 'start'}>
          <Title
            order={2}
            ta={isMobile ? 'center' : { base: 'center', xs: 'start' }}
            c='dark.6'
            fw={700}
            fz={isMobile ? '1.5rem' : undefined}
          >
            The Innovation Program
          </Title>
          <Badge
            size='lg'
            variant='gradient'
            gradient={{ from: 'indigo', to: 'cyan' }}
          >
            Getting Started
          </Badge>
        </Stack>
      </Group>

      <Text
        ta='center'
        c='dimmed'
        size={isMobile ? 'md' : 'lg'}
        maw={isMobile ? 300 : 500}
        fw={500}
      >
        Welcome to your coding journey! Let's set up the tools you'll need.
      </Text>

      {isMobile && (
        <Badge size='md' color='red' variant='filled' radius='sm'>
          ! This is a Desktop only tutorial !
        </Badge>
      )}
    </Stack>
  );
}

export default Header;
