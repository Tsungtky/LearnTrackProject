import { Col,Row,Card } from 'antd'
import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import PhoneSearch from '@/phone/PhoneSearch'


export default function PhoneList() {
  return (
    <div>
      <PhoneSearch/>
      <Scrollbars
      style={{width: "100%", height: "100vh"}}
      renderTrackVertical={(style,...props)=>(
        <div {...props} style={{...style,left:0,right:"right"}} />
      )}
      >
        <Row>
          <Col style={{padding:"20px"}} className="gutter-row" xs={24} sm={24} md={6}>
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <p>This is title</p>
              <p>This is intro</p>
            </Card>
          </Col>
          <Col style={{padding:"20px"}} className="gutter-row" xs={24} sm={24} md={6}>
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <p>This is title</p>
              <p>This is intro</p>
            </Card>
          </Col>
          <Col style={{padding:"20px"}} className="gutter-row" xs={24} sm={24} md={6}>
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <p>This is title</p>
              <p>This is intro</p>
            </Card>
          </Col>
          <Col style={{padding:"20px"}} className="gutter-row" xs={24} sm={24} md={6}>
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <p>This is title</p>
              <p>This is intro</p>
            </Card>
          </Col>
          <Col style={{padding:"20px"}} className="gutter-row" xs={24} sm={24} md={6}>
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <p>This is title</p>
              <p>This is intro</p>
            </Card>
          </Col>
          <Col style={{padding:"20px"}} className="gutter-row" xs={24} sm={24} md={6}>
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <p>This is title</p>
              <p>This is intro</p>
            </Card>
          </Col>
          <Col style={{padding:"20px"}} className="gutter-row" xs={24} sm={24} md={6}>
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <p>This is title</p>
              <p>This is intro</p>
            </Card>
          </Col>
          <Col style={{padding:"20px"}} className="gutter-row" xs={24} sm={24} md={6}>
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <p>This is title</p>
              <p>This is intro</p>
            </Card>
          </Col>
          <Col style={{padding:"20px"}} className="gutter-row" xs={24} sm={24} md={6}>
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <p>This is title</p>
              <p>This is intro</p>
            </Card>
          </Col>
          <Col style={{padding:"20px"}} className="gutter-row" xs={24} sm={24} md={6}>
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <p>This is title</p>
              <p>This is intro</p>
            </Card>
          </Col>
          <Col style={{padding:"20px"}} className="gutter-row" xs={24} sm={24} md={6}>
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <p>This is title</p>
              <p>This is intro</p>
            </Card>
          </Col>
          <Col style={{padding:"20px"}} className="gutter-row" xs={24} sm={24} md={6}>
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <p>This is title</p>
              <p>This is intro</p>
            </Card>
          </Col>
        </Row>
      </Scrollbars>
    </div>
  )
}
