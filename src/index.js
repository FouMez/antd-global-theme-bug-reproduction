import React from "react";
import ReactDOM from "react-dom";
import { Button, ConfigProvider, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import "./index.css";

const colors = {
  primaryColor: '#601baf',
  errorColor: '#ff4d4f',
  warningColor: '#faad14',
  successColor: '#52c41a',
  infoColor: '#1890ff',

}

const MyComponent = () => {
    React.useEffect(() => {
        ConfigProvider.config(colors)
    }, [])

    return (
        <div className="App">
        <h1>antd version: {version}</h1>
        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
      </div>
    )
}

ReactDOM.render(<MyComponent />,
  document.getElementById("root")
);
