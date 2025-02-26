import ShapeBlur from '../components/ShapeBlur/ShapeBlur';
import '../assets/styles/Home.css'; // 导入样式文件
export default function Home() {
return (
  <div className="home-container" style={{ 
    backgroundColor: 'black', // 直接设置背景色
    minHeight: '100vh',       // 确保覆盖整个视口
    color: 'white',            // 设置文字颜色为白色（可选）
    paddingTop: '80px' // 为导航栏留出空间
  }}>
    {/* 主标题 */}
    <h1 className="main-title">
      权力意志与西西弗斯
    </h1>

    {/* 引语 */}
    <p className="quote">
      “设计不仅是视觉的表达，更是对问题的解答。”
    </p>

    {/* 分点内容 */}
    <div className="content-grid">
      <div className="card">
        <div className="card-icon">•</div>
        <h2>设计啊设计</h2>
        <p>
          设计是一种思维方式，通过简洁的视觉语言传达复杂的信息。
          它不仅仅是美学的追求，更是对用户需求的深刻理解。
        </p>
      </div>
      <div className="card">
        <div className="card-icon">•</div>
        <h2>成长路径</h2>
        <p>
          从模仿到创新，设计师的成长需要不断学习与实践。
          每一次失败都是通向成功的阶梯。
        </p>
      </div>
      <div className="card">
        <div className="card-icon">•</div>
        <h2>未来展望</h2>
        <p>
          随着科技的发展，设计师的角色将更加多元化。
          未来的设计将更加注重交互与体验。
        </p>
      </div>
    </div>

    {/* 其他内容保持不变 */}
    <div style={{
      position: 'relative',
      height: '500px',
      overflow: 'hidden',
      background: 'rgba(0,0,0,0.5)' // 为子容器添加半透明背景（可选）
    }}>
        <ShapeBlur
          variation={0}
          pixelRatioProp={window.devicePixelRatio || 4}
          shapeSize={1.2}
          roundness={0.4}
          borderSize={0.1}
          circleSize={0.3}
          circleEdge={1}
        />

      {/* 叠加的半透明文字 */}
  <div style={{
    position: 'absolute',
    top: '50%', // 垂直居中
    left: '50%', // 水平居中
    transform: 'translate(-50%, -50%)', // 精确居中
    fontSize: '6rem', // 文字大小
    fontWeight: 'bold', // 加粗
    color: 'rgba(255, 255, 255, 0.08)', // 半透明白色
    zIndex: 10, // 确保文字在ShapeBlur之上
    userSelect: 'none' // 防止文字被选中
  }}>
      Boredom Not 
      </div>
    </div>
  </div>
);
}