import React from 'react';
import './assets/style/main.scss';
import {Layout} from './ui/Lauout/Layout';
import {Table} from './pages/Table/Table';
import {Tab} from './pages/Tab/Tab';


const App = () => {
  return (
    <>

      <Layout>
        <Tab/>
        <Table/>
      </Layout>
    </>

  );
};

export default App;
