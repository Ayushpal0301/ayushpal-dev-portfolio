import LeftsideMenu from "./LeftsideMenu/page";
import RightsideMenu from "./RightsideMenu/page";
import MainMenu from "./MainMenu/page";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#eef0f7] text-black">
      <div className="mx-auto flex gap-6 px-6 py-10">
        <LeftsideMenu />
        <MainMenu />
        <RightsideMenu />
      </div>
    </div>
  );
}
