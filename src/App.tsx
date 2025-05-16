import { useState } from 'react';
import {
  Button,
  Card,
  Group,
  Paper,
  Progress,
  ScrollArea,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';
import { INSTALLATION_STEPS } from './consts';
import Header from './components/Header';

export default function App() {
  const [active, setActive] = useState(0);
  const theme = useMantineTheme();
  const progress = Math.round((active / INSTALLATION_STEPS.length) * 100);

  return (
    <Stack py={10} px={20} justify='start' align='center' bg='gray.0'>
      <div
        id='google_translate_element'
        style={{
          position: 'fixed',
          top: 10,
          right: 10,
          zIndex: 1000,
        }}
      />

      <Stack
        w={{ base: '100%', md: '30rem' }}
        justify='center'
        h='100%'
        gap='xs'
      >
        <Group>
          <Header />
          <Progress
            w={'100%'}
            value={progress}
            size='md'
            radius='xl'
            color={active === INSTALLATION_STEPS.length ? 'green' : 'blue'}
          />
        </Group>

        <Card shadow='md' radius='lg' p='xl' withBorder style={{ flex: 1 }}>
          {active < INSTALLATION_STEPS.length ? (
            <Stack gap='xl'>
              <Group justify='start'>
                <ThemeIcon
                  size={52}
                  radius='xl'
                  color={INSTALLATION_STEPS[active].color}
                  variant='light'
                >
                  {INSTALLATION_STEPS[active].icon}
                </ThemeIcon>
                <Stack gap={0}>
                  <Text
                    size='xl'
                    fw={700}
                  >{`${INSTALLATION_STEPS[active].label}`}</Text>
                  <Text size='sm' c='dimmed'>{`${active + 1} of ${
                    INSTALLATION_STEPS.length
                  }`}</Text>
                </Stack>
              </Group>

              <Paper withBorder p='lg' radius='md' bg='gray.0'>
                <ScrollArea h={90} offsetScrollbars>
                  <Text size='md' lh={1.6}>
                    {INSTALLATION_STEPS[active].description}
                  </Text>
                </ScrollArea>
              </Paper>

              <Button
                component='a'
                href={INSTALLATION_STEPS[active].buttonLink}
                target='_blank'
                size='lg'
                radius='xl'
                leftSection={INSTALLATION_STEPS[active].icon}
                rightSection={<FaArrowRight size={16} />}
                color={INSTALLATION_STEPS[active].color}
                variant='light'
                fullWidth
                styles={{
                  root: {
                    boxShadow: `0 4px 14px 0 ${
                      theme.colors[INSTALLATION_STEPS[active].color][1]
                    }`,
                  },
                }}
              >
                {INSTALLATION_STEPS[active].buttonText}
              </Button>
            </Stack>
          ) : (
            <Stack align='center' gap='xl' py='lg'>
              <ThemeIcon size={100} radius={100} color='green' variant='light'>
                <MdCelebration size={60} />
              </ThemeIcon>

              <Stack align='center' gap='xs'>
                <Title order={2} ta='center'>
                  All Set!
                </Title>
                <Text ta='center' size='lg' c='dimmed' maw={400}>
                  Congratulations! You've installed all the necessary tools.
                  You're ready to begin your coding journey.
                </Text>
              </Stack>
            </Stack>
          )}
        </Card>

        {/* Navigation */}
        <Card withBorder shadow='md' radius={'xl'}>
          <Group justify='center'>
            <Button
              variant='subtle'
              color='gray'
              disabled={active === 0}
              onClick={() => setActive((prev) => Math.max(prev - 1, 0))}
              leftSection={<FaArrowLeft size={16} />}
              radius='md'
            >
              Back
            </Button>

            {active < INSTALLATION_STEPS.length && (
              <Button
                onClick={() =>
                  setActive((prev) =>
                    Math.min(prev + 1, INSTALLATION_STEPS.length)
                  )
                }
                leftSection={<FaArrowRight size={16} />}
                radius='md'
                color='indigo'
                variant={
                  active === INSTALLATION_STEPS.length - 1
                    ? 'gradient'
                    : 'filled'
                }
                gradient={
                  active === INSTALLATION_STEPS.length - 1
                    ? { from: 'indigo', to: 'cyan' }
                    : undefined
                }
              >
                {active === INSTALLATION_STEPS.length - 1
                  ? 'Finish'
                  : 'Next Step'}
              </Button>
            )}
          </Group>
        </Card>
      </Stack>
    </Stack>
  );
}
