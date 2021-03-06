import React from "react";

interface Props {
  headerTitle: string;
}

function Header(props: Props) {
  return (
    <div>
      <h1 className="text-xl">{props.headerTitle}</h1>
    </div>
  );
}

export default Header;
