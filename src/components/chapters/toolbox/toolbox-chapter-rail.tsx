export function ToolboxChapterRail() {
  return (
    <aside className="toolbox-rail" aria-hidden="true">
      <span className="toolbox-rail__brand">HS</span>

      <div className="toolbox-rail__track">
        <span className="toolbox-rail__node" />
        <span className="toolbox-rail__line toolbox-rail__line--primary" />
      </div>

      <span className="toolbox-rail__label">Toolbox</span>
      <span className="toolbox-rail__chapter">04</span>

      <span className="toolbox-rail__connector" />

      <div className="toolbox-rail__scroll">
        <span className="toolbox-rail__scroll-text">Scroll</span>
        <span className="toolbox-rail__scroll-arrow">↓</span>
      </div>
    </aside>
  );
}