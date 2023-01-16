import { useEffect } from 'react';

import { useAppDispatch } from '../hook/hook';
import Header from '../Header';
import Sider from '../Sider';
import FoundTickets from '../Found-tickets';
import { swapKey, error } from "../../state/reducer";
import Service from '../service';

import'./app.scss';

const service = new Service();

const App: React.FC = () => {
    const dispatch = useAppDispatch();
    
    const searchId = () => {
      service.searchId().then(
      (el) => {
        dispatch(swapKey(el.searchId));
      },
      )
      .catch (()=> dispatch(error()));
    }

   useEffect(() => {
    searchId();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
     <div className={'body'}>
        <Header />
       <div className={'main'}>
         <Sider />
         <FoundTickets />
       </div> 
     </div>
   );
 }
 
 export default App;