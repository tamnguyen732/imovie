import React from 'react';
import apiConfig from '~/api/apiConfig';
import Loading from './Loading';
import blankUser from '../assets/blank-profile.png';
import useGetMoviesById, { Args, dataType } from '~/hooks/useGetMoviesById';
import { Category } from '~/api/tmdbClient';
import { useParams } from 'react-router-dom';

const DetailInfo = () => {
  const { category, id } = useParams();
  const args: Args<Category> = {
    cate: category as Category,
    id: id ? Number(id) : undefined
  };
  const { data, loading } = useGetMoviesById({
    ...args,
    type: dataType.DETAIL,
    params: {}
  });

  const { cast } = useGetMoviesById({ ...args, type: dataType.CREDIT });
  const bg = apiConfig.originalImage(data?.poster_path || (data?.backdrop_path as string));

  return (
    <div className='z-20'>
      {!loading ? (
        <>
          <div className='flex flex-col pl-5 lg:flex-row md:flex-row mt-28 lg:ml-10 md:ml-10 justify-center items-start gap-6 z-20'>
            <img className='w-350px h-550px rounded-2xl mb-5  object-cover ' src={bg} alt='' />

            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-5'>
                <h2 className='text-white text-6xl font-bold'>{data?.title}</h2>
                <div className='flex gap-5 text-white '>
                  {data?.genres.map(({ name, id }) => {
                    return (
                      <span key={id} className='border px-3 py-1 bg-black rounded-lg'>
                        {name}
                      </span>
                    );
                  })}
                </div>
                <p className='text-white text-2xl'>{data?.overview}</p>
              </div>
              <div className='flex flex-col gap-1'>
                <h2 className='text-white text-lg font-bold'>Casts</h2>
                <div className='flex gap-1'>
                  {cast?.slice(0, 3)?.map(({ name, profile_path, id }) => {
                    const profile = apiConfig.w500Image(profile_path as string);
                    return (
                      <div key={id}>
                        <img
                          className='w-24 h-40 object-cover'
                          src={!profile.includes('null') ? profile : blankUser}
                          alt=''
                        />
                        <span className='text-white text-sm'>{name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default DetailInfo;
