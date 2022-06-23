export default function WebMaker() {
  return (
    <div id="WebMaker">
      {/* sidebar */}
      <div className="sidebar d-flex flex-column gap-3">
        {/* component navbar */}
        <div className="component component-navbar">
          <div className="d-flex align-items-center justify-content-center">
            <p className="mb-0 fw-bold fs-6">navbar</p>
          </div>
        </div>
        {/* component text */}
        <div className="component component-text">
          <div className="d-flex align-items-center justify-content-center">
            <p className="mb-0 fw-bold fs-6">text</p>
          </div>
        </div>
        {/* component footer */}
        <div className="component component-footer">
          <div className="d-flex align-items-center justify-content-center">
            <p className="mb-0 fw-bold fs-6">footer</p>
          </div>
        </div>
      </div>
      {/* main content */}
      <div className="main-content">
        <div className="canvas">
          <div className="placeholder d-flex align-items-center justify-content-center">
            <span class="iconify" data-icon="akar-icons:circle-plus-fill"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
