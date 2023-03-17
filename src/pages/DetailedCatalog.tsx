import React from 'react';
import DetailInfo from '~/components/DetailInfo';
import MainLayout from '~/layout/MainLayout';

const DetailedMovie = () => {
  return (
    <MainLayout>
      <div>
        <DetailInfo />
      </div>
    </MainLayout>
  );
};

export default DetailedMovie;
