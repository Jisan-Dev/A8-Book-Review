import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Button from '../components/ui/Button';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="font-workSans min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p className="font-semibold">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to={'/'}>
          <Button text={'Return Home'} />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
