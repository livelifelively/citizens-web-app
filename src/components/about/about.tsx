'use client';

import {
  Container,
  Text,
  Group,
  rem,
  Card,
  Title,
  Button,
  SimpleGrid,
  useMantineTheme,
} from '@mantine/core';
import { IconUsers, IconScale, IconBuildingBank } from '@tabler/icons-react';
// import { NoSideBarsAppShell } from '@/qbeela/ui';
import classes from './about.module.css';

const featuresData = [
  {
    title: 'Non-Partisan Institutional Information',
    description:
      'Institutions centric information that is beyond political headlines. Enables citizens to focus on governance and social impact.',
    icon: IconScale,
  },
  {
    title: 'Citizens and Community Centric',
    description:
      'We empower citizens with actionable citizen centric information. We are building systems to enable citizens to have collaboration with other citizens, governments and other stakeholders',
    icon: IconUsers,
  },
  {
    title: 'Covers Governments at All Levels',
    description:
      'Know what is happening in your local government, state and national governments. Understand how government organisations work on their own and in collaboration with other departments',
    icon: IconBuildingBank,
  },
];

export function About() {
  const theme = useMantineTheme();

  const features = featuresData.map((feature: any) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={rem(50)} stroke={2} color={theme.colors.yellow[8]} />
      <Title order={2} fz="lg" fw={600} className={classes.cardTitle} mt="md">
        {feature.title}
      </Title>
      <Text fz="sm" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    // <NoSideBarsAppShell title="About Us - Qbeela">
    <>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          Geo-enabled digital platform for{' '}
          <Text component="span" variant="text" color="brandBlue" inherit>
            Citizen Collaboration
          </Text>
        </h1>

        <Text className={classes.description} color="dimmed">
          Delivers apolitical and institutional information. Provides tools for meaningful and
          impact oriented collaboration among citizens. Aims for being instrumental in bringing
          greater accountibility, transparency and citizen participation in governance.
        </Text>

        <Group className={classes.controls}>
          <Button size="lg">Get Started</Button>
        </Group>
      </Container>
      <Container>
        <SimpleGrid cols={{ base: 1, lg: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    </>
    // </NoSideBarsAppShell>
  );
}

export default About;
