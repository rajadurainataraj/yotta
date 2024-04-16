import { useRecoilState } from "recoil";
import Buttons from "../Buttons";
import { count } from "../utils/globalState";

const ReferenceWebsite = () => {
  const [counts, setCounts] = useRecoilState(count);
  const nextPage = () => {
    setCounts(2);
  };
  return (
    <section>
      <section className="lato">
        Reference Sites (like you wanted to build website something you
        inspired)
      </section>
      <section>
        <input className="custom-reference-input" type="text" />
      </section>
      <section className="d-flex justify-content-center align-items-center ">
        <Buttons onClick={() => nextPage()} />
      </section>
    </section>
  );
};

export default ReferenceWebsite;
