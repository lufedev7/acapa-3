import {
  LightningBoltIcon,
  PhoneIcon,
  StarIcon,
  SunIcon,
  UserGroupIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

import SideBarMenuItems from "./SideBarMenuItems";
export default function SideBar() {
  return (
    <nav className=" ">
      <div className="flex">
        <Image
          src="/acapa.png"
          alt="Logo de la entidad"
          width={72}
          height={36}
          className=""
        ></Image>
        <div className="">
          <div className=" "></div>
          <div className="bg-red-300">
            <div className="  ">
              <SearchIcon className="" />
              <input className="" type="text" placeholder="Search Acapa " />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <SideBarMenuItems text="Iniciativas" Icon={StarIcon} active />
        <SideBarMenuItems text="Servicios" Icon={LightningBoltIcon} />
        <SideBarMenuItems text="Atractivos" Icon={SunIcon} />
        <SideBarMenuItems text="Sobre Nosotros" Icon={UserGroupIcon} />
        <SideBarMenuItems text="Contactos" Icon={PhoneIcon} />
      </div>

      <div className=" ">
        <div className="">
          <div className="">
            <Image
              src="https://img.a.transfermarkt.technology/portrait/big/39152-1622801006.jpg?lm=1"
              width={30}
              height={30}
              alt="Profile image"
              className="rounded-full"
            ></Image>
          </div>
          <div className="">
            <h4 className="">lufer_739@gmail</h4>
            <p className="">Fernando Angarita</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
