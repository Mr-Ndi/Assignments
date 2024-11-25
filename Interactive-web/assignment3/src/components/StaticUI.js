import React from "react";

function StaticUI() {
  console.log("StaticUI component rendered!");
  return (
    <div className="comp">
      <h2>Static UI</h2>
      <p>
        This section contains content that does not depend on the live time.
      </p>
      <ul>
        <li>Never judge a book by its cover.</li>
        <li>She believed she could, so she did.</li>
        <li>All that glitters is not gold.</li>
      </ul>
    </div>
  );
}

export default React.memo(StaticUI);
