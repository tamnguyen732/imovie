import React, { ChangeEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '~/components/Button';
import Card from '~/components/CardLists/Card';
import useGetLists from '~/hooks/useGetList';
import MainLayout from '~/layout/MainLayout';
import { v4 as uuidv4 } from 'uuid';
import { Category, MovieType, TvType } from '~/api/tmdbClient';

const Catalog = () => {
  const [value, setValue] = useState<string>('');
  const [query, setQuery] = useState<string>('');

  const navigate = useNavigate();
  const { category, keyword } = useParams();
  const { lists, setPage, searchMovies, setSearchMovies } = useGetLists<MovieType | TvType>({
    cate: category === 'movie' ? Category.MOVIE : Category.TV,
    type: category === 'movie' ? MovieType.UPCOMING : TvType.POPULAR,
    query,
    params: category as Category
  });
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };

  const searchMovie = async () => {
    navigate(`/${category}/search/${value}`);
    setQuery(value);
    setPage(1);
    setSearchMovies([]);
  };

  return (
    <MainLayout>
      <div className='w-full h-auto z-10 py-32 '>
        <div className='flex flex-col gap-10'>
          <h2 className='text-center text-white font-semibold text-2xl'>
            {`${category!.charAt(0).toUpperCase()}${category!.slice(1)}`}
          </h2>
          <div className='flex gap-2 pl-10'>
            <input
              placeholder='Enter Keyword'
              type='text'
              value={value}
              onChange={handleOnChange}
              className='w-72 h-6 text-white py-6 px-3 rounded-2xl bg-black outline-none'
            />
            <Button
              onClick={searchMovie}
              className='bg-hover text-xl px-11 py-2 rounded-r-2xl hover:bg-red-600'
            >
              Keyword
            </Button>
          </div>
          <div className='grid grid-cols-6 gap-y-5 px-3'>
            {keyword
              ? searchMovies?.map((movie) => {
                  return <Card key={uuidv4()} list={movie} />;
                })
              : lists?.map((list) => {
                  return <Card key={uuidv4()} list={list} />;
                })}
          </div>

          {searchMovies.length || lists.length ? (
            <Button
              onClick={() => setPage((prev) => prev + 1)}
              className='w-44 block ml-auto mr-auto hover:bg-red-600'
            >
              Load More
            </Button>
          ) : null}
        </div>
      </div>
    </MainLayout>
  );
};

export default Catalog;
