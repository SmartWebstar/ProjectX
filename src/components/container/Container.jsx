import React, { useState } from "react";
import Front from "../../assets/front.png"
import "./container.css";

const Container = () => {

  return (
		<div className="container">
			<h1 className="project-title">PROJECT X</h1>
			<img src={Front} alt="" />
			<h3 className="project-detail" >THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG</h3>
		</div>
  );
};

export default Container;
