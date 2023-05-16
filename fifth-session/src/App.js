// App.js
import Component from "./Component";
import styled from "./App.module.css";
import myPic from "./1.png";
import myPic2 from "./2.png"
import myPic3 from "./3.png"
import myPic4 from "./4.png"

function App() {
  return (
    <div className={styled.title}>
      <Component img={myPic} title="상하이, 중국" far="869km 거리" date="6월 8일~14일"price="$68,191 /박"/>
      <Component img={myPic2} title="상하이, 중국" far="870km 거리" date="6월 8일~13일"price="$177,052 /박"/>
      <Component img={myPic3} title="상하이, 중국" far="869km 거리" date="6월 8일~14일"price="$720,134 /박"/>
      <Component img={myPic4} title="상하이, 중국" far="869km 거리" date="6월 8일~14일"price="$2,599,280 /박"/>
    </div>
  );
}

export default App;
