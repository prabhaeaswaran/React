import { useEffect, useState } from "react";
import {Input} from "antd"
import { PlusCircleFilled, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  pickFruits,
  deleteFruits,
  selectorSelect,
  displayFruit,
  deleteAllFruits,
  searchFruit
} from "./Action/fruits";

import "antd/dist/antd.css";
import _ from "lodash";
const{Search}=Input

const App = () => {
  const dispatch = useDispatch();
  const chose: Array<any> = useSelector(selectorSelect);

  const fruits = useSelector(displayFruit);

  useEffect(() => {
    console.log(chose);
  }, [chose]);
useEffect(()=>{
  console.log(fruits)
},[fruits])
  const handleClick = (e: any) => {
    deleteFruits(dispatch, e);
  };

  const handleChange = (e: any) => {
    pickFruits(dispatch, e);
  };

  const handleClickAll=(e:any)=>{
   deleteAllFruits(dispatch,e);
  }

  const handleSearch=(e:any)=>{
   console.log("search",e)
     searchFruit(dispatch,e)
  }
  return (
    <section>
      <div>
        <h1>LIST</h1>
        {fruits.map((fruit: any) => (
          <p
            onClick={() => {
              handleChange(fruit);
            }}
          >
            <PlusCircleFilled />
            {fruit.name}
          </p>
        ))}
      </div>
      <div>
        <h1>BASKET</h1>
        <DeleteOutlined onClick={handleClickAll} />
        {chose.map((fruit) => (
          <p onClick={() => handleClick(fruit)}>
            {fruit.name} ({fruit.count})
          </p>
        ))}
      </div>
      <div>
      <Search onSearch={handleSearch}></Search>
        {fruits.map((fruits:any)=>
        <p>{fruits.name}</p>)}
        
      </div>
    </section>
  )
};
export default App;
