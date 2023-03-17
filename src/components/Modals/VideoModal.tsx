import React from 'react';
import ModalWrapper from './ModalWrapper';
interface Props {
  video: string;
}

const VideoModal = ({ video }: Props) => {
  return (
    <div>
      <ModalWrapper>
        <div className='relative z-50 w-600px h-400px bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle  animate-zoomIn'>
          <iframe className='z-50' width='600' height='400' src={video} />
        </div>
      </ModalWrapper>
    </div>
  );
};

export default VideoModal;
