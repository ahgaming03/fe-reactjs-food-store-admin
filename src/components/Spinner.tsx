import { GiChickenLeg } from "react-icons/gi";

export const Spinner = () => {
  return (
    <>
      <div className="animate-pulse px-6 py-3 text-center text-5xl">
        <div className="animate-bounce">
          <GiChickenLeg className="animate-spin" />
        </div>
      </div>
    </>
  );
};
