import React, { useState, FormEvent, useContext } from 'react';

import router from 'next/router';

import Input from '@/components/Input';
import Layout from '@/components/Layout';
import Text from '@/components/Text';
import Title from '@/components/Title';
import { ScreenContext } from '@/contexts/screen';

import styles from './_styles';

export default function Home() {
  const [search, setSearch] = useState<string>('');

  const { isMobile, ...screenContext } = useContext(ScreenContext);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    event.stopPropagation();

    router.push(`/characters?name=${search}`);
  };

  return (
    <Layout {...screenContext} backgroundUrl="/background.jpg">
      <style jsx>{styles}</style>
      <div className={`container ${isMobile ? 'mobile' : 'desktop'}`}>
        <div className="title">
          <Title level={4} lineColor="primary">
            RICK AND MORTY
          </Title>
        </div>
        <form onSubmit={handleSubmit}>
          <Text>
            Explore the Rick and Morty universe with our character catalog! Meet
            your favorite characters, learn more about their stories and see
            their most memorable episodes. From members of the Smith family to
            the strangest aliens, our character catalog is the definitive source
            of information about the world of Rick and Morty.
          </Text>
          <div className="input">
            <Input value={search} label="Search" onChange={setSearch} />
          </div>
        </form>
      </div>
    </Layout>
  );
}
