import React, { useEffect, useState } from 'react';
import apiConfig from '~/api/apiConfig';
import tmdbApi, { Category } from '~/api/tmdbClient';
import { useGlobalContext } from '~/contexts/ModalContext';
import { TmdbMovie } from '~/utils/types/movieTypes';
import Button from './Button';
import VideoModal from './Modals/VideoModal';
interface Props {
  list: TmdbMovie;
  category: Category;
}
const HeroSlide = ({ list }: Props) => {
  const { modal, openModal } = useGlobalContext();
  const [video, setVideo] = useState<string>('');
  const bg = apiConfig.originalImage(list!.backdrop_path || (list!.poster_path as string));
  const poster = apiConfig.originalImage(list!.poster_path as string);
  console.log(video);
  useEffect(() => {
    const getVideo = async () => {
      try {
        const videos = await tmdbApi.getVideos(Category.MOVIE, list.id);
        // @ts-ignore
        const results = videos.results;
        if (results) {
          // @ts-ignore
          const videSrc = 'https://www.youtube.com/embed/' + videos?.results[0]?.key;
          if (videSrc) {
            setVideo(videSrc);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    getVideo();
  }, [modal]);
  const handleOpenModal = () => {
    openModal();
  };

  const checkTextLength = () => {
    if (list.overview.length < 155) {
      return list.overview;
    } else {
      return `${list.overview.slice(0, 155)} . . .`;
    }
  };
  const overview = checkTextLength();
  return (
    <div className='mb-40 z-40'>
      <div
        className=' fixed w-full h-screen bg-cover bg-center bg-no-repeat z-0 '
        style={{
          backgroundImage: `url(${bg})`
        }}
      ></div>
      <div className=' text-black pl-4 md:pl-12 pt-20 relative top-24 w-full h-96 z-20 flex  justify-center items-center gap-10'>
        <div className='md:w-2/4 flex flex-col gap-7'>
          <h2 className='text-white text-center md:text-left text-2xl md:text-4xl lg:text-6xl font-extrabold'>
            {list.original_title}
          </h2>
          <p className='text-white text-center md:text-left text-2xl font-semibold'>{overview}</p>
          <div className='flex gap-4'>
            <Button className='font-semibold text-2xl hover:smoky-btn hover:bg-red-600'>
              Watch Now
            </Button>
            <Button
              onClick={handleOpenModal}
              color='bg-transparent '
              className='outline outline-white hover:bg-white font-semibold text-2xl'
              hoverTextColor='text-hover'
            >
              Watch Trailer
            </Button>
          </div>
        </div>
        <div className='w-2/4 hidden md:block'>
          <img className='w-80 h-400px rounded-xl object-cover' src={poster} alt='' />
        </div>
        {modal === 'open' && <VideoModal video={video} />}
      </div>
    </div>
  );
};

export default HeroSlide;
