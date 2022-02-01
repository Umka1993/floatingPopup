import React from 'react';
import './assets/style/main.scss';
import {Layout} from './ui/Lauout/Layout';
import {Table} from './pages/Table/Table';


const App = () => {
  return (
    <>

      <Layout>
        <Table/>
      </Layout>
    </>

  );
};

export default App;
