import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

const Header = () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/"
         className="item">CrowdCoin
      </Link>
      <Menu.Menu position="right">
        <Link route="/"
           className="item">Campaigns
        </Link>

        <Link route="/campaigns/new"
           className="item"> +
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
