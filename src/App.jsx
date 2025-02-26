import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'; // 新增hooks引入
import Home from './pages/Home'; // 注意组件命名建议保持一致
import About from './pages/About'; 
import Works from './pages/Works'; 

export default function App() {
  const [hideNav, setHideNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 向下滚动超过50px且滚动方向向下时显示
      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setHideNav(false);
      } 
      // 向上滚动时隐藏
      else if (currentScrollY < lastScrollY) {
        setHideNav(true);
      }
      if (currentScrollY === 0) {
        setHideNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    // 添加防抖优化性能
    const debouncedScroll = debounce(handleScroll, 100);
    window.addEventListener('scroll', debouncedScroll);

    return () => window.removeEventListener('scroll', debouncedScroll);
  }, [lastScrollY]);

  return (
    <Router>
      <nav className="main-nav" style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.78)', // 改成半透明黑色背景
        position: 'fixed',
        top: hideNav ? '-20px' : '0', // 向上移动补偿空间
        width: '100%',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        padding: '1rem',
        transform: hideNav ? 
        'translateY(-100%) scale(0.9)' : // 收起时缩小
        'translateY(0) scale(1.2)', // 展开时恢复
      transition: 'all 0.3s ease-in-out',
        backdropFilter: 'blur(10px)' ,// 添加毛玻璃效果
      transformOrigin: 'top center' // 确保缩放方向正确
      }}>       
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>首页</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>关于</Link>
        <Link to="/works" style={{ color: 'white', textDecoration: 'none' }}>作品</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </Router>
  );

}
// 防抖函数
function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}