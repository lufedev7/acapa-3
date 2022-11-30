export default function SideBarMenuItems({ text, Icon, state }) {
  return (
    <div
      className="flex
        items-center
        justify-center
        transition duration-500 ease-out
        sm:pl-2
        text-green-700
        sm:justify-start
        text-2xl
        lg:text-xl 
        xl:text-2xl
        px-2
        space-x-3
        cursor-pointer
        hover:bg-green-50
        hover:scale-110
        hover:brightness-125
        rounded-full 
        w-[50px]
        h-[50px]
        lg:w-auto"
    >
      <Icon className="h-9 " />
      <span className={` ${state && "font-bold"} hidden  lg:inline lg:pl-3`}>
        {text}
      </span>
    </div>
  );
}
