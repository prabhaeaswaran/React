import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRandomUser,
  selectorList,
  // selectorLoading,
  // selectorError,
} from "./Action/slices";
import { Drawer, Button, Form, Input } from "antd";
import { isEmptyBindingElement } from "typescript";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectorList);

  // const loading = useSelector(selectorLoading);
  // const errors = useSelector(selectorError);

  // useEffect(() => {
  //   fetchRandomUser(dispatch);
  // }, [dispatch]);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (user) {
      setVisible(false);
    }
  }, [user]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
    fetchRandomUser(dispatch, values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section>
      <h1>ARTICLES</h1>

      <button onClick={showDrawer}>Open</button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <input />
          </Form.Item>

          <Form.Item
            label="Body"
            name="body"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <input />
          </Form.Item>

          <Form.Item>
            <button type="submit">Submit</button>
          </Form.Item>
        </Form>
      </Drawer>
    </section>
  );
};

export default App;
