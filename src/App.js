import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import FormTabs from "./components/FormTabs";
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content><FormTabs/></Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
  );
}

export default App;
