"use client";
import React, { useState } from "react";;
import PreviewCard from "./cards";

const Projects = () => {

    const FrontendData = [
        {
name:"Environemt Web Design",
image:"/public/frontends/environment.png",
metadata:"Static Landing Page Environment Themed"
    }
];
    return (<>{
        FrontendData.map((curr)=>{
            return(<PreviewCard name={curr.name} image={curr.image} metadata={curr.metadata}/>)
        })
    }
    </>
  );
};

export default Projects;
