import React from 'react';
import './Mainc.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Mainc() {
  return (
    <>
      <div>
        <img className='p-5' src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/icc-cwc-banner-collection-202308220156.png" alt="" />
      </div>
      <Container className='icc p-5'>
        <Row className='justify-content-center mt-5 rounded'>
          <Col xs={12} md={6} lg={3} className='mb-4'>
            <Card>
              <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICAyMS4ySyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00370432-xebnbplscs-portrait.jpg" />
            </Card>
          </Col>
          {/* Repeat the Col component for other cards */}
          <Col xs={12} md={6} lg={3} className='mb-4'>
            <Card>
              <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-NS45LzEwICA2LjZLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365489-ccwqagabyn-portrait.jpg" />
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3} className='mb-4'>
            <Card>
              <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-NS41LzEwICAyMy44SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00341436-msmyjsjspw-portrait.jpg" />
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3} className='mb-4'>
            <Card>
              <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICA4MjIgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00370130-wbrwyhxmcu-portrait.jpg" />
            </Card>
          </Col>
        </Row>
      </Container>

      <div>
        <img className='p-5' src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png" alt="" />
      </div>

      <div className='p-5 bg-primary'>
        <h3 style={{ fontFamily: "serif", fontSize: "50px", color: "red", marginBottom: "10px" }}>PREMIERES</h3>
        <div className=' d-flex justify-content-evenly'>
          {/* Add your premiere content here */}
          <img className='image' src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00370688-nsmtlvagey-portrait.jpg" alt="" />
          <img className='image' src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/king-lear-et00370418-1695299200.jpg" alt="" />
          <img className='image' src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00331565-bhqnbdsyuc-portrait.jpg" alt="" />
          <img className='image' src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/scooby-doo-and-krypto-too-et00370703-1695644661.jpg" alt="" />
        </div>
      </div>

      <div className='p-5 '>
        <h3 style={{ fontFamily: "serif", fontSize: "50px", color: "yellow", marginBottom: "10px" }}>EXCLUSIVES</h3>
        <div className=' d-flex justify-content-evenly'>
          {/* Add your exclusive content here */}
          <img className='image' src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_exclusive_v1.png,oit-false,ofo-bottom_left:q-80/et00352516-kbulxsezxr-portrait.jpg" alt="" />
          <img className='image' src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_exclusive_v1.png,oit-false,ofo-bottom_left:q-80/et00363608-qrtlxkslbw-portrait.jpg" alt="" />
          <img className='image' src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_exclusive_v1.png,oit-false,ofo-bottom_left:q-80/et00363558-mxjnujaspx-portrait.jpg" alt="" />
          <img className='image' src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_exclusive_v1.png,oit-false,ofo-bottom_left:q-80/et00350287-muwvmwupbh-portrait.jpg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Mainc;
