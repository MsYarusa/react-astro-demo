import React from "react";

interface Props {
  platform: string;
  username: string;
}

const Social = ({ platform, username }: Props) => {
  return <a href={`https://www.${platform}.com/${username}`}>{platform}</a>;
};

export default Social;
