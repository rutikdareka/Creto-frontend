import React, { useState } from "react";

function RecentSearch() {
  const [recentsUser, setrecentsUser] = useState([]);

  return (
    <>
      {recentsUser[0] ? (
        ""
      ) : (
        <div className="recent_key">
          <span>Try searching for people, lists, or keywords</span>
        </div>
      )}
    </>
  );
}

export default RecentSearch;
