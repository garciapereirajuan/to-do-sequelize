import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Layout, Menu, Form, Input } from 'antd'

import 'antd/dist/antd.min.css'
import './App.css'
import './pages/Home/Home.scss'
import './layouts/LayoutHome/LayoutHome.scss'
import './components/MenuTop/MenuTop.scss'
import './components/Home/LoginForm/LoginForm.scss'

import ToDoLogo from './assets/img/png/to-do-logo.png'

function App() {
  return (
    <div className="App">
      <Router>
        <LayoutHome />
      </Router>
    </div>
  )
}

const Home = () => {
  return (
    <div className="home">
      <LoginForm />
      <img width={400} src={ToDoLogo} alt="Logo-to-do-list" />
    </div>
  )
}

const LoginForm = () => {
  return (
    <div className="login-form-div">
      <Form className="login-form">
        <Form.Item>
          <Input placeholder="Nombre de usuario" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Contraseña" />
        </Form.Item>
      </Form>
    </div>
  )
}

const LayoutHome = () => {
  const { Header, Content, Footer } = Layout
  return (
    <Layout className="layout-home">
      <Header className="layout-home__header">
        <MenuTop />
      </Header>
      <Content className="layout-home__content">
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Content>
      <Footer className="layout-home__footer">Juan - 2022</Footer>
    </Layout>
  )
}

const MenuTop = () => {
  return (
    <Menu
      className="menu-top"
      mode="horizontal"
      theme="dark"
      defaultSelectedKeys={['/home']}
    >
      <Menu.Item key="/home">
        <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item key="/tasks">
        <Link to="/tasks">Todas las tareas</Link>
      </Menu.Item>
      <Menu.Item key="/categories">
        <Link to="/categories">Todas las categorías</Link>
      </Menu.Item>
      <Menu.Item key="/task">
        <Link to="/task">Nueva tarea</Link>
      </Menu.Item>
      <Menu.Item key="/category">
        <Link to="/category">Nueva categoría</Link>
      </Menu.Item>
    </Menu>
  )
}

export default App
