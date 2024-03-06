import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="flex flex-col justify-between gap-20 md:gap-39">
        <div className="mt-12 mx-auto max-w-112 md:mt-26 ">
          <h5 className="uppercase font-primary-condensed text-center text-secondary md:tracking-md-h5 md:text-md-h5">So, you want to travel to</h5>
          <h1 className="uppercase text-center md:text-md-h1">Space</h1>
          <p className="text-center text-secondary md:max-w-103 md:mx-auto">Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll give you a truly out of this world experience!</p>
        </div>
        <Link to="/destination">
          <button
            className="uppercase h-mobile-button w-mobile-button md:h-tablet-button md:w-tablet-button bg-white rounded-full text-tertiary text-md-h5 tracking-wider block mx-auto mt-2 pt-2 md:mt-0 md:text-lg-h4"
          >
            Explore
          </button>
        </Link>
      </div>
    </>
  );
}

export default HomePage;