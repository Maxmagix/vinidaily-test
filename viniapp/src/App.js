import { useContext } from 'react';
import './App.css';
import {SearchView} from './views/SearchView.tsx';
import {WineObject} from './views/WineObject.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import {WineContext} from './contexts/WineContext.tsx';

function App() {

  const {wines} = useContext(WineContext);

  return (
    <div className = "App" >
      <Container className = "App-content">
        <SearchView />
        <div className="fit-screen">
          <Row md={5}>
            {wines && wines?.map((wine, index) =>
              <WineObject key={index} wine={wine} />
              )
            }
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;