import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import BundleCard from './components/BundleCard';

const App = () => (
  <div>
    <BundleCard 
      name="Bronze Duo"
      internet="150"
      tv="140+"
      voice={false}
      price="79.99"
      agreement="for 12 mo. with 2 yr. svc. agr. plus taxes and fees"
      discount="48"
      regularPrice="152.48"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
