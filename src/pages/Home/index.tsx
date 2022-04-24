import React from 'react';
import TimeInfo from './components/TimeInfo';
import { Card, Col, Row } from 'antd';

const Home: React.FC = () => {
  return (
    <div>
      <TimeInfo />
      <div style={{ height: 30 }} />
      <div className="site-card-wrapper">
        <Row gutter={48}>
          <Col span={8}>
            <Card title="时间戳" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="日期计算" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="保留项目" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
        <Row gutter={48} style={{ marginTop: 36 }}>
          <Col span={12}>
            <Card title="数据格式化" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={12}>
            <Card title="数据加解密" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
