import { GiChickenLeg } from "react-icons/gi";

export const Spinner = () => {
  return (
    <>
      <div className="animate-pulse px-6 py-3 text-5xl">
        <div className="flex animate-bounce items-center justify-center">
          <GiChickenLeg className="animate-spin" />
        </div>
      </div>
    </>
  );
};
