import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRandomUser,
  selectorList,
  selectorLoading,
  selectorError,
} from "./action/slices";
import { Drawer, Form} from 'antd';
import 'antd/dist/antd.css';

export const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectorList);
  // const loading = useSelector(selectorLoading);
  // const errors = useSelector(selectorError);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if(user){
      setVisible(false)
    }
    
  }, [user]);
 
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onFinish = (values: any) => {
    fetchRandomUser(dispatch,values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
  <div>
      <button onClick={showDrawer}>
        Open
      </button>
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="TITLE"
        name="title"
       
      >
        <input />
      </Form.Item>

      <Form.Item
        label="Body"
        name="body"
      >
       <input/>
      </Form.Item>
      <button type="submit">
          Submit
        </button>
      </Form>
     
       </Drawer>
      </div>
  )
}
export default App;
  
//   const renderList = () => {
//     if (loading) return <p>Loading..</p>;
//     if (errors) return <p>Error in displaying</p>;
//     return (

//       list.map((lists: any) => (
//         <div key={lists.id} className="tile">
//          <h3> {lists.title}</h3>
//          <h3>{lists.body}</h3>
//         </div>
//       ))
//     );
//   };

//   return (
//     <section>
//       <h1>ARTICLES</h1>

//       <div className="content">
//         <table>
//           <thead>
//             <tr>
//               <th>ID </th>
//               <th>TITLE</th>
//             </tr>
//           </thead>
//           <tbody>
//             <td>{renderList()}</td>
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

