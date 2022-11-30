export default function SideBarMenuItems({ text, Icon, state }) {
  return (
    <div className="">
      <Icon className="h-9 " />
      <span className={` ${state && "font-bold"} `}>{text}</span>
    </div>
  );
}
