import logo from './logo.svg';
import './App.css';
import { Menu } from 'antd'

const { SubMenu } = Menu

function App() {
  function handleClick(e){
    console.log(e)
  }

  function getItem(){
    console.log(1)
  }

  return (
    <div className="App">
      <Menu 
        onClick={handleClick}
        style={{ width: 256 }}
        mode="inline"
      >
        <Menu.SubMenu key="sub1"  title="高中">
          <Menu.SubMenu key="sub5" title="Submenu">
            <Menu.Item key="1">Option 7</Menu.Item>
            <Menu.Item key="2">Option 8</Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <SubMenu key="sub2"  title="初中">
          <SubMenu key="sub6" title="Submenu">
            <Menu.Item key="3">Option 7</Menu.Item>
            <Menu.Item key="4">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub3"  title="小学">
          <SubMenu key="sub7" title="Submenu">
            <Menu.Item key="5" onClick={getItem}>Option 7</Menu.Item>
            <Menu.Item key="6">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default App;
