export function ClosingFooter() {
  return (
    <footer className="closing-footer">
      <div className="closing-footer__identity">
        <div>
          <p className="closing-footer__name">Harshdeep Singh</p>

          <p className="closing-footer__statement">
            Building software with curiosity, craft, and purpose.
          </p>
        </div>

        <p className="closing-footer__signature">
          <span aria-hidden="true">{"{"}</span>
          always learning · always building
          <span aria-hidden="true">{"}"}</span>
        </p>
      </div>

      <div className="closing-footer__bottom">
        <span>© {new Date().getFullYear()} Harshdeep Singh</span>
        <span>React · TypeScript · Built with intention</span>
      </div>
    </footer>
  );
}