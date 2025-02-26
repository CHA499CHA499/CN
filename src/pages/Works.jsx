import Gallery from '../components/Gallery/Gallery';
import { works } from '../data/sample-data'; // 准备作品数据

export default function Wirks() {
  return (
    <div className="content-layer">
      <section className="hero-section">
        <h1 className="title-glitch">交互艺术家作品集</h1>
        <p className="subtitle">探索数字与现实的交界</p>
      </section>

      <div className="grid-layout">
        <section className="featured-works">
          <h2>精选作品</h2>
          <Gallery works={works.slice(0, 3)} />
        </section>

        <aside className="artist-statement">
          <h3>创作理念</h3>
          <p>通过算法生成艺术探索人类感知的边界...</p>
          <div className="medium-tags">
            <span>#生成艺术</span>
            <span>#数据可视化</span>
            <span>#交互装置</span>
          </div>
        </aside>
      </div>
    </div>
  );
}