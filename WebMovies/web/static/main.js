var Button = antd.Button;
var Layout = antd.Layout;
var Menu = antd.Menu;
var Header = Layout.Header;
var Content = Layout.Content;
var Footer = Layout.Footer;
var Breadcrumb = antd.Breadcrumb;
var Steps = antd.Steps;
var Step = Steps.Step;
var Col = antd.Col;
var Row = antd.Row;
var Progress= antd.Progress;
var imgUrl = '../static/back.jpg';
var loadingimg = '../static/loading.gif';
const divStyle = {
color: 'blue',
backgroundImage: 'url(' + imgUrl + ')',
height: '100%',
};

ReactDOM.render(<Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                  <div className="logo" />
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                  >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                  </Menu>
                </Header>
                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                  </Breadcrumb>
                  <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                  Ant Design ©2018 Created by Ant UED
                </Footer>
              </Layout>,
             document.body,
        function(){
            console.log('渲染完成啦！！');
        });