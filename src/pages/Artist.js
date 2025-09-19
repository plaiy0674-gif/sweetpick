import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import "../App.css";

const Artist = () => {

  const TabListStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    gap: "15px"
  }
  const tabStyle = {
    background: "rgba(255, 255, 255, 0.7)",
    padding: "8px 15px",
    width: "calc(100% - 15px)",
    borderRadius: "10px 10px 0 0",
    fontSize: "17px",
    cursor: "pointer",
    color: "#40454dff"
  }
  const TabPanelStyle = {
    width: "100%",
    height: "auto",
    background: "rgba(255, 255, 255, 0.7)",
    padding: "30px 0",
    boxSizing: "border-box"
  }
  const TabImgStyle = {
    width: "50%",
    height: "auto",
    margin: "0 auto"
  }
  const TabPanelDivStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    marginBottom: "30px"
  }
  const divStyle = {
    width: "50%"
  }
  const TabPanelh2Style = {
    marginBottom: "8px"
  }
  const TabPanelPStyle = {
    color: "rgba(0, 0, 0, 0.65)",
    marginBottom: "16px"
  }
  const TabPanelButtonStyle = {
    background: "#6b7280",
    padding: "10px",
    borderRadius: "10px",
    color: "#fff",
    fontSize: "16px",
    margin: "0 auto"
  }


  return (
    <div className='conatainer'>
      <h2 style={{ margin: "50px 0 30px", color: "#6b7280" }}><span style={{ color: "#a1acc2ff", marginRight: "15px" }}>SolSweet's Playlist</span>와 관련된 아티스트 &gt; </h2>

      <Tabs>
        <TabList style={TabListStyle}>
          <Tab style={tabStyle}>Tyler, the Creater</Tab>
          <Tab style={tabStyle}>Doja Cat</Tab>
          <Tab style={tabStyle}>Sexy Red</Tab>
        </TabList>


        <TabPanel style={TabPanelStyle}>
          <div style={TabPanelDivStyle}>
            <img src="https://numero.com/wp-content/uploads/2020/09/thumb-tyler-the-creator-numero-magazine.png" alt="Tyler The Creator" style={TabImgStyle} />
            <div style={divStyle}>
              <h2 style={TabPanelh2Style}>Tyler The Creator</h2>
              <p style={TabPanelPStyle}>아티스트</p>
          <button style={TabPanelButtonStyle}>아티스트 앨범 보러가기 &gt; </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel style={TabPanelStyle}>
          <div style={TabPanelDivStyle}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Doja_Cat_x_Amazon1.1_%28cropped%29.jpg" alt="Tyler The Creator" style={TabImgStyle} />
            <div style={divStyle}>
              <h2 style={TabPanelh2Style}>Doja Cat</h2>
              <p style={TabPanelPStyle}>아티스트</p>
          <button style={TabPanelButtonStyle}>아티스트 앨범 보러가기 &gt; </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel style={TabPanelStyle}>
          <div style={TabPanelDivStyle}>
            <img src="https://rollingout.com/wp-content/uploads/2023/05/IMG_6885-scaled-scaled.webp" alt="Tyler The Creator" style={TabImgStyle} />
            <div style={divStyle}>
              <h2 style={TabPanelh2Style}>Sexy Red</h2>
              <p style={TabPanelPStyle}>아티스트</p>
          <button style={TabPanelButtonStyle}>아티스트 앨범 보러가기 &gt; </button>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Artist