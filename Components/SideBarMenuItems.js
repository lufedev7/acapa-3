export default function SideBarMenuItems({ text, Icon, state }) {
  return (
    <div className="bg-red-300">
      <Icon className="h-9 " />
      <span className={` ${state && "font-bold"} `}>{text}</span>
    </div>
  );
}
