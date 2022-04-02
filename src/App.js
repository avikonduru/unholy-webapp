import React from 'react';
import './App.css';
import { motion } from "framer-motion";

// antd
import { Typography, Button, Layout, Row, Col, Image } from 'antd';

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const App = () => (
  <div className="App">
    <Layout style={{backgroundColor: 'black', color: 'white', height: '100vh'}}>
      <Header style={{backgroundColor: 'black', alignItems: 'center', justifyContent: 'center'}}>
        <motion.div
          animate={{
            x: 0,
            y: 10,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2
          }}
        >
          <span style={{fontWeight: 'bold', fontSize: 35, color: 'white'}}>UnHoly</span>
        </motion.div>
      </Header>
      <Content style={{
        backgroundColor: 'black',
        height: '80%',
        textAlign: 'center',
        backgroundImage: 'url(https://cdn.discordapp.com/attachments/956320023692079134/959553259192868924/fina_l_wizard.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center',
        }}>
          <div style={{marginTop: 520}}>
            <Row>
              <Col span={12}>
                <motion.button
                  class="option_1_button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Option 1
                </motion.button>
              </Col>
              <Col span={12}>
                <motion.button
                  class="option_2_button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Option 2
                </motion.button>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <motion.button
                  class="mint_button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  MINT
                </motion.button>
              </Col>
            </Row>
          </div>
      </Content>
      <Footer style={{backgroundColor: 'black', color: 'white', textAlign: 'center'}}>And I saw when the Lamb opened one of the seals, and I heard, as it were the noise of thunder, one of the four beasts saying, Come and see.</Footer>
    </Layout>
  </div>
);

export default App;
