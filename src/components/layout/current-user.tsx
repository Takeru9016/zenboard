import { Button, Popover } from "antd";

export default function CurrentUser() {
  return (
    <>
      <Popover
        placement="bottomRight"
        trigger="click"
        overlayInnerStyle={{ padding: 0 }}
      >
        <Button>Current User</Button>
      </Popover>
    </>
  );
}
