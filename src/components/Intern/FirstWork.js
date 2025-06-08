import React from "react";
import { ImPointRight } from "react-icons/im";
import laptopImg from "../../Assets/about.png";
import spiritswap from "../../Assets/Projects/spiritswap.webp";

function FirstInternship() {
  return (
    <>
      <img
        src={spiritswap}
        style={{ width: 300, margin: "2em", float: "right" }}
        alt="about"
        className="img-fluid"
      />

      <blockquote className="blockquote mb-0">
        <h3 className="purple">
          <u className="white">Frontend Development Intern</u>{" "}
        </h3>
        <p style={{ textAlign: "justify" }}>
          <span className="purple">Time: </span> 12/21 - 03/22
          <br />
          <span className="purple">Organisation</span>Layer3 Organisation
          (Remote)
          <br />
          In the organisation I worked on 2 Projects
          <br />
          <br />
          <span className="purple">SpiritSwap: </span> Spiritswap is a
          decentralized exchange (DEX) built on the Fantom network. It allows
          users to trade various digital assets in a secure and decentralized
          manner.
          <br />
          <span className="purple">Role:</span>Bug fixing, feature Designing,and
          dynamic UI designing for the application, which was in production.
          <br />
          <br />
          <br />
          <span className="purple">NFTGarage: </span> NFTGarage is a
          decentralized marketplace that allows creators to mint, buy, and sell
          non-fungible tokens (NFTs) on the Binance Smart Chain. It provides a
          platform for artists, gamers, and collectors to showcase and trade
          their unique digital assets.
          <br />
          <span className="purple">Role:</span>I was a member of the initial
          development team for the project, where I played a key role in
          designing the initial UI and developing features such as
          auto-compression of image sizes and conversion of images into various
          formats.
          <br />
        </p>
        <br />
        <br />
        <br />
        <br />
      </blockquote>
    </>
  );
}

export default FirstInternship;
