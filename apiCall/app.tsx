import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRandomUser,
  selectorList,
  selectorLoading,
  selectorError,
} from "./slices/ApiSlice";

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
      list &&
      list.map((lists: any) => (
        <div key={lists.id} className="tile">
          <h2>{lists.title}</h2>
        </div>
      ))
    );
  };

  return (
    <section>
      <h1>ARTICLES</h1>
      <div className="content">{renderList()}</div>
    </section>
  );
};

export default App;
