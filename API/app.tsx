import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRandomUser,
  selectorList,
  selectorLoading,
  selectorError,
} from "./Action/slices";


const App = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectorList);
  const loading = useSelector(selectorLoading);
  const errors = useSelector(selectorError);

  useEffect(() => {
    fetchRandomUser(dispatch);
  }, [dispatch]);
  const renderList = () => {
    if (loading) return <p>Loading..</p>;
    if (errors) return <p>Error in displaying</p>;
    return (
      
      list.map((lists: any) => (
        <div key={lists.id} className="tile">
         <h3> {lists.title}</h3>
         <h3>{lists.body}</h3>
        </div>
      ))
    );
  };

  return (
    <section>
      <h1>ARTICLES</h1>

      <div className="content">
        <table>
          <thead>
            <tr>
              <th>ID </th>
              <th>TITLE</th>
            </tr>
          </thead>
          <tbody>
            <td>{renderList()}</td>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default App;
