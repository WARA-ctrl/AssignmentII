import { GoListUnordered, GoGraph } from "react-icons/go";
import Link from "next/link";

const LastNav = () => {
  return (
    <div>
      <nav className="blank-nav-last">
        <nav className="blank-nav-last-text">
          <Link legacyBehavior href="/En_Da">
            <h5>Daily</h5>
          </Link>
          <Link legacyBehavior href="/En_W_L">
            <h5>Weekly</h5>
          </Link>

          <h5>Monthly</h5>
        </nav>

        <div className="twosvg-in-blank-nav-last">
          <Link legacyBehavior href="/En_W_L">
            <GoGraph />
          </Link>
          <Link legacyBehavior href="/boxes">
            <GoListUnordered />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default LastNav;
