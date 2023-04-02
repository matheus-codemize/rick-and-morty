import React, { useEffect, useState, useMemo, useContext } from 'react';

import { GetServerSideProps } from 'next';
import router from 'next/router';

import styles from './_styles';

import characterService, {
  RequestCharacter,
  ResponseCharacter,
} from '@/api/character';
import {
  Character,
  CharacterGenderEnum,
  CharacterStatusEnum,
} from '@/api/character/model';
import { ResponseInfo } from '@/api/types';
import Button from '@/components/Button';
import FloatingInput from '@/components/FloatingInput';
import Icon from '@/components/Icon';
import { Layout } from '@/components/Layout';
import Text from '@/components/Text';
import { ScreenContext } from '@/contexts/screen';
import { useMyFavoriteCharactersStorage } from '@/storage/characters';

type CharacterProps = {
  info: ResponseInfo;
  results: Array<Character>;
  query?: { name: string };
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let response: ResponseCharacter;

  try {
    response = await characterService.getAll({ ...query, page: 1 });
  } catch (err) {
    response = { info: {} as ResponseInfo, results: [] };
    console.log(err);
  }

  return {
    props: {
      query,
      info: response?.info,
      results: response?.results || [],
    },
  };
};

const Characters = ({ info, results, query }: CharacterProps) => {
  // hook to storage from characters favorite
  const [myFavorites, setMyFavorites] = useMyFavoriteCharactersStorage();

  const { isMobile, ...screenContext } = useContext(ScreenContext);

  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [reverseCards, setReverseCards] = useState<Array<number>>([]);
  const [characters, setCharacters] = useState<Array<Character>>(results);
  const [pagination, setPagination] = useState<ResponseInfo | null>(info);
  const [filter, setFilter] = useState<RequestCharacter>({
    page: 1,
    name: query?.name || '',
    type: '',
    species: '',
    status: '',
  });

  useEffect(() => {
    if (filter.status !== undefined) {
      searchByFilter();
    }
  }, [filter.status]);

  const handleShowFilter = () => {
    setShowFilter(prevValue => !prevValue);
  };

  const handleCard = (id: number) => {
    setReverseCards(prevValue => {
      const exist = prevValue.find(exist => exist === id);

      if (!exist) {
        return [...prevValue, id];
      }

      return prevValue.filter(cardId => cardId !== id);
    });
  };

  const handleFavorite = (id: number) => {
    if (!myFavorites) return;

    if (myFavorites.includes(id)) {
      setMyFavorites(myFavorites.filter(i => i !== id));
    } else {
      setMyFavorites([...myFavorites, id]);
    }
  };

  const checkIsFavorite = (id: number): boolean => {
    return !!myFavorites && myFavorites.includes(id);
  };

  const handleFilter = (key: keyof typeof filter, value: any) => {
    setFilter(prevFilter => ({ ...prevFilter, [key]: value }));
  };

  const searchByFilter = async (page = 1) => {
    let results: Array<Character> = [];
    let info: ResponseInfo | null = null;

    try {
      setShowFilter(false);

      const response = await characterService.getAll({ ...filter, page });

      info = response.info;
      results = response.results;
    } catch (err) {
      console.log(err);
    } finally {
      setPagination(info);
      setCharacters(results);
      setFilter(prevFilter => ({ ...prevFilter, page }));
    }
  };

  const pages: Array<number> = useMemo(() => {
    const pages: Array<number> = [],
      maxPage = pagination?.pages as number;

    for (
      let i = filter.page - 2;
      i <= filter.page + 3 && pages.length < 4;
      i++
    ) {
      if (i >= 1 && i <= maxPage) {
        pages.push(i);
      }
    }

    return pages;
  }, [filter.page, pagination]);

  return (
    <Layout {...screenContext} backgroundUrl="/characters.png">
      <style jsx>{styles}</style>
      <div className={`container ${isMobile ? 'mobile' : 'desktop'}`}>
        <div className={`header${showFilter ? ' active' : ''}`}>
          <form
            onSubmit={event => {
              event.preventDefault();
              searchByFilter();
            }}
            onKeyDown={event => {
              if (event.key === 'Enter') {
                searchByFilter();
              }
            }}>
            <FloatingInput
              startFullHeight
              label="Name"
              value={filter.name as string}
              onChange={value => handleFilter('name', value)}
            />
            <FloatingInput
              startFullHeight
              label="Type"
              value={filter.type as string}
              onChange={value => handleFilter('type', value)}
            />
            <FloatingInput
              startFullHeight
              label="Species"
              value={filter.species as string}
              onChange={value => handleFilter('species', value)}
            />
            <FloatingInput
              startFullHeight
              label="Status"
              value={filter.status as string}
              onChange={value => handleFilter('status', value)}
              options={Object.entries(CharacterStatusEnum).map(
                ([key, value]) => ({
                  label: `${key.charAt(0).toUpperCase()}${key.slice(1)}`,
                  value,
                }),
              )}
            />
          </form>
          <button onClick={handleShowFilter}>
            <Text>Filter options</Text>
            <Icon name={showFilter ? 'filter-off' : 'filter'} />
          </button>
        </div>
        <div className={`body${!characters.length ? ' empty' : ''}`}>
          {characters.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCard(item.id)}
              className={`profile${
                reverseCards.includes(item.id) ? ' flipped' : ''
              }`}>
              <div
                className="front"
                style={{ backgroundImage: `url(${item.image})` }}>
                <div className="profile-name">
                  <Text>{item.name}</Text>
                </div>
                <div
                  className={`profile-species ${item.species.toLowerCase()}`}>
                  <Text size="sm" weight="600">
                    {item.species}
                  </Text>
                </div>
              </div>
              <div
                className="back"
                style={{ backgroundImage: `url(${item.image})` }}>
                <div className="title">
                  <Text noBreakLine align="left">
                    {item.name}
                  </Text>
                  <div
                    className="favorite"
                    onClick={event => {
                      event.stopPropagation();
                      handleFavorite(item.id);
                    }}
                    title={
                      checkIsFavorite(item.id)
                        ? `Click to remove ${item.name} from your favorites`
                        : `Click to add ${item.name} to your favorites`
                    }>
                    <Icon
                      size={24}
                      color="#b60000"
                      name={
                        checkIsFavorite(item.id) ? 'heart' : 'heart-outline'
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className="row">
                    <Text size="sm" weight="600">
                      SPECIES:
                    </Text>
                    <Text size="md" align="right">
                      {item.species}
                    </Text>
                  </div>
                  <div className="row">
                    <Text size="sm" weight="600">
                      TYPE:
                    </Text>
                    <Text noBreakLine size="md" align="right">
                      {item.type ? item.type : '-'}
                    </Text>
                  </div>
                  <div className="row">
                    <Text size="sm" weight="600">
                      STATUS:
                    </Text>
                    <Text size="md" align="right">
                      {item.status === CharacterStatusEnum.unknown
                        ? '-'
                        : item.status}
                    </Text>
                  </div>
                  <div className="row">
                    <Text size="sm" weight="600">
                      GENDER:
                    </Text>
                    <Text size="md" align="right">
                      {item.gender === CharacterGenderEnum.unknown
                        ? '-'
                        : item.gender}
                    </Text>
                  </div>
                  <div className="row">
                    <Text size="sm" weight="600">
                      ORIGIN:
                    </Text>
                    <Text noBreakLine size="md" align="right">
                      {item.origin.name === 'unknown' ? '-' : item.origin.name}
                    </Text>
                  </div>
                  <div className="row">
                    <Text size="sm" weight="600">
                      LOCATION:
                    </Text>
                    <Text noBreakLine size="md" align="right">
                      {item.location.name === 'unknown'
                        ? '-'
                        : item.location.name}
                    </Text>
                  </div>
                  <div className="row">
                    <Text size="sm" weight="600">
                      PARTICIPATION:
                    </Text>
                    <Text
                      size="md"
                      align="right">{`${item.episode.length} episodes`}</Text>
                  </div>
                </div>
                <Button
                  block
                  color="accent"
                  shape="rounded"
                  onClick={() => router.push(item.url)}>
                  More
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className={`footer${!characters.length ? ' empty' : ''}`}>
          <Text size="md">{`${pagination?.count} characters`}</Text>
          <div className="pagination">
            <button
              disabled={!pagination?.prev}
              onClick={() => searchByFilter(filter.page - 1)}>
              <Icon size={32} name="left" />
            </button>
            <ul>
              {!pages.includes(1) &&
                pages.includes(pagination?.pages as number) && (
                  <li
                    className="fixed"
                    onClick={() => searchByFilter(pagination?.pages)}>
                    1
                  </li>
                )}
              {pages.map(page => (
                <li
                  key={page}
                  onClick={() => searchByFilter(page)}
                  className={page === filter.page ? 'selected' : ''}>
                  {page}
                </li>
              ))}
              {!pages.includes(pagination?.pages as number) && (
                <li
                  className="fixed"
                  onClick={() => searchByFilter(pagination?.pages)}>
                  {pagination?.pages}
                </li>
              )}
            </ul>
            <button
              disabled={!pagination?.next}
              onClick={() => searchByFilter(filter.page + 1)}>
              <Icon size={32} name="right" />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Characters;
