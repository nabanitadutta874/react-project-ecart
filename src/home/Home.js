import React from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

function Home(props) {
  const state = useSelector((state) => state);
  console.log('store', state);

  const addToCart = () => {
    props.setCount(props.count + 1);
  };
  return (
    <div>
      <h1>Welcome to the world of Geeks home!</h1>
      <Button variant="primary" onClick={addToCart}>
        Primary
      </Button>
    </div>
  );
}

export default Home;
