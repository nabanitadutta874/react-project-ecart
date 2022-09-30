import React from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../actions/CartActions';

function Home() {
  const state = useSelector((state) => state);
  console.log('store', state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Welcome to the world of Geeks home!</h1>
      <Button
        variant="primary"
        onClick={() => {
          dispatch(addItem());
        }}
      >
        Primary
      </Button>
    </div>
  );
}

export default Home;
