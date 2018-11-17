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
    var Card = antd.Card;
    var Meta = Card.Meta;
    var Icon = antd.Icon; 
    var Avatar = antd.Avatar;
    var Progress= antd.Progress;
    var loadingimg = '../static/loading.gif';
    var boximg = '../static/box.jpg';
    var headerimg = '../static/name.png';
    const boxstyle = {
      height: '650px',
      background: 'url(' + boximg + ') center no-repeat',
      
    }; 
    const boxindexStyle = {
      height: '100%',
      width: '100%',
      backgroundColor:'rgba(0,0,0,0.5)',
      color: '#fff',
      fontFamily: "'Trebuchet MS',Arial, Helvetica, sans-serif",
      position: 'relative',
    } 

    const Search = antd.Input.Search;
    class Box extends React.Component {
      
      render() {
        return (
        <div style = {boxstyle}>
          <div style = {boxindexStyle}>
              <div style={{fontSize: '1.3em',padding: '3% 4%', height: '50px',lineHeight:'50px'}}>
                <div style={{float: 'left'}}><strong>Site of Day </strong> &nbsp;&nbsp;September 22, 2018</div>
                <div style={{float: 'right'}}><Avatar size="large"style={{ verticalAlign: 'middle' }} src="../static/touxaing.jpg" /></div>
                
              </div>
              <div style={{textAlign:'center',width:'100%',marginTop: '100px'}}>
                  <img src = '../static/movies.png'/>
                  <div>
                    <Search  style={{width:'25%',marginTop: '20px', marginleft:'35%',}}
                    placeholder="输入你想要的电影"
                    size="large"
                    onSearch={value => console.log(value)}
                    
                    />
                  </div>
                  
                  <div style={{color: '#4F86C6',fontSize: '1.2em',marginTop:'20px' }}><strong>你可以在这儿寻找电影资源...</strong></div>
              </div>
              <div style={{ position: 'absolute', bottom: '6%', left:'4%'}}> 
                <Button  ghost type="primary" >Visit me</Button>
              </div>
          </div>
        </div>
        );
      }
    }

    const TabPane = antd.Tabs.TabPane;
    const Tabs = antd.Tabs;

    class Downtab extends React.Component {
      constructor(props) {
        super(props);   
      }
      render() {
        return (
          <div className="card-container">
          <Tabs value={'small' } defaultActiveKey="1" > 
          <TabPane tab={<span style={{fontSize:'1.3em'}}><Icon type="paper-clip" theme="outlined" /> </span>} key="1">
           <div>
           <a href={this.props.data.xunlei}>Copy Link</a>
           <span style={{float: 'right'}}><antd.Tag color="#EC7357">{this.props.data.size}</antd.Tag><antd.Tag color="#a3daff">{this.props.data.hd}</antd.Tag></span>
           </div>
          </TabPane>
          <TabPane tab={<span style={{fontSize:'1.3em'}}><Icon type="cloud" theme="outlined" /></span>} key="2">
          <div style={{paddingRight:'10px'}}>
            &nbsp;<img src='../static/daiduyun.png' /> &nbsp;
          <a href={this.props.data.wangpan} target="view_window">百度网盘</a>

          <span style={{float: 'right'}}><img src='../static/password.png' height='17px' />&nbsp; {this.props.data.password} </span>
          
          </div>
          </TabPane>
         
        </Tabs>
        </div>
        
        );
      }
    }
    class Movie extends React.Component {
      constructor(props) {
        super(props);
      
      }
      render() {
        return (
        
            <Card
              hoverable
              style={{ width: 290 ,fontFamily: "'Trebuchet MS',Arial, Helvetica, sans-serif"}}
              cover={<img alt="example" src={this.props.data.img} height={400} />}
            >
              <Meta
                title={ <div>
                  <strong>{this.props.data.name}</strong><Button style={{float: 'right'}} type="primary"  shape="circle" icon="bars"></Button>
                  <p style={{fontSize:'0.7em',color:'#566270',}}>
                    {this.props.data.cate} &nbsp; &nbsp;{this.props.data.time}
                    <br></br>
                    <div style={{fontSize:'0.7em',color:'#c9d6de',}}><Icon type="calendar" theme="outlined" /> {this.props.data.date}</div>
                    {/* <antd.Rate disabled defaultValue={2} /> */}
                    <Downtab data={this.props.data}/>
                  </p>
                   
                </div>}
              />
            </Card>
        
        );
      }
    }
    class Movies extends React.Component {
      constructor(props) {
        super(props);
        this.page = 2;
        this.state = {
          current: 0,
          data:[],
         
          };
        this.next = this.next.bind(this)
      }
      componentWillMount(){
        
        console.log(1)
        fetch('http://127.0.0.1:5000/')
        .then(
            (res) => {
                return res.json()
            }
        ).then(
            (data) => {
                console.log(data);
                this.data=data;
                
                this.setState({
                  current:1,
                  data:this.data,
                });
                
             }
          )
      }
      next(){
        fetch('http://127.0.0.1:5000/page?p='+this.page)
        .then(
            (res) => {
                return res.json()
            }
        ).then(
            (data) => {
               
                console.log(this.page);
                this.page=this.page+1;
                
                this.setState({
                  current:1,
                  data:data,
                });
                
             }
          )
      }
      render() {
        const { current } = this.state;
        return (

          <div>
          <div style= {{fontSize: '1.5em',}}><img src = '../static/movieicon.png' style={{marginBottom:'10px'}} height={'35px'}/><strong>&nbsp;&nbsp;&nbsp;Lastest of The Day:</strong>&nbsp;&nbsp; Movies <span style={{float: 'right',margin:'0 65px'}}>
                <Button type="primary" ghost>
                    <Icon type="left" />    
                </Button>
                &nbsp;&nbsp;
                <Button type="primary" onClick={this.next}>
                  <Icon type="right" />    
                </Button>
          </span></div>
          {
                current == 1&&
            <div style={{marginTop: '40px'}}>
            <div>
              <Row type="flex" justify="space-between" gutter={16}>
                <Col span={6}>
                  <Movie data={this.state.data[0]}/>
                </Col>
                <Col span={6}>
                < Movie data={this.state.data[1]}/>
                </Col>
                <Col span={6}>
                  <Movie data={this.state.data[2]}/>
                </Col>
                <Col  span={6}>
                  <Movie data={this.state.data[3]}/>
                </Col>
              </Row>
            </div>
            </div>
          }
        </div>
        );
      }
    }
    const divStyle = {
      backgroundColor: '#f4f7f7',
    };
    const headerStyle = {
      backgroundColor: '#f4f7f7',
      width: '100%',
      height: '60px',
      textAlign: 'center',
      boxShadow:'3px 3px #dddfe6',
      lineHeight: '50px',
    
    };

    ReactDOM.render(<div className="layout"  style={divStyle}>
                    <div style = {headerStyle} ><img  src = {headerimg} /></div>
                    <Box />
                    <div style = {{padding:'4% 5% 4% 7%',fontFamily: "'Trebuchet MS',Arial, Helvetica, sans-serif", marginBottom: '70px'}} >
                    
                    <Movies />
                    
                    </div>
                    </div>,
                 document.body,
            function(){
                console.log('渲染完成啦！！');
            });