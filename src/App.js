import React from "react";
import { Routes, Route} from 'react-router-dom';

// import Nav Bar
import NavigationBar from './component/NavigationBar';

// import pages
import HomePages from './pages/home';
import LoginPages from './pages/login';
import RegisterPages from './pages/register';


class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/login" element={<LoginPages />} />
          <Route path="/register" element={<RegisterPages />} />
        </Routes>
      </div>
    );
  }
}

export default App;
