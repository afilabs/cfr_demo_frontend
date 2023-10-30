import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const E404Page = () => (
  <Result
    status="info"
    title="Hi, You can see me in full action the upcoming version"
    extra={
      <Link to="/">
        <Button type="primary">Back Home</Button>
      </Link>
    }
  />
);

export default E404Page;
