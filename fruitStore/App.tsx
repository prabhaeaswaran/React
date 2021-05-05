import { useEffect} from "react";
import { Input } from "antd";
import { PlusCircleFilled, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  pickFruits,
  deleteFruits,
  selectorSelect,
  displayFruit,
  deleteAllFruits,
  findFruits,
  dispFruit,
  deleteEach,
} from "./Action/fruits";
import "antd/dist/antd.css";
import { AudioOutlined } from '@ant-design/icons'
import './App.css';
const { Search } = Input;

const App = () => {
  const dispatch = useDispatch();
  const chose: Array<any> = useSelector(selectorSelect);
  const fruits = useSelector(displayFruit);

  useEffect(() => {
    console.log(chose);
  }, [chose]);

  useEffect(() => {
    console.log(fruits);
  }, [fruits]);

  const handleClick = (e: any) => {
    deleteFruits(dispatch, e);
  };

  const handleChange = (e: any) => {
    pickFruits(dispatch, e);
  };

  const handleClickAll = (e: any) => {
    deleteAllFruits(dispatch, e);
  };

  const searchData = (e: any) => {
    findFruits(dispatch, e);
  };

  const goBack = () => {
    dispFruit(dispatch);
  };

  const handleDeleteEach = (e: any) => {
    deleteEach(dispatch, e);
  };
  return (
    <section >
      <div id="image" style={{width:1500,height:300}}><h1>GROCERY SHOP</h1>
      </div>
      <br></br>
      <br></br>
      <div id="list">
        <Search style={{width:500,float:"left",border:"1px solid black"
       }}onSearch={(e) => searchData(e)} onChange={goBack}></Search>
     
        <br></br>
        <br></br>
        <h1>LIST</h1>
        {fruits.map((fruit: any) => (
          <p
            onClick={() => {
              handleChange(fruit);
            }}
          >  
           <li><PlusCircleFilled />{fruit.name}</li> 
          </p>
        ))}
      </div>
      <div id="basket">
        <h1>BASKET  <DeleteOutlined onClick={handleClickAll} /></h1>
        {chose.map((fruit) => (
          <p onClick={() => handleClick(fruit)}>
            <DeleteOutlined onClick={() => handleDeleteEach(fruit)} />
           <li> {fruit.name} ({fruit.count})</li>
          </p>
        ))}
      </div>
      
      
    </section>
  );
};
export default App;
