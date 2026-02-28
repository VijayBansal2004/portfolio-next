import { Block } from "@/components/block";
import { Heading } from "@/components/heading";
import { Para } from "@/components/para";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <Block className="mt-0 border-0 pt-0 shadow-[none] dark:shadow-[none]">
        <Heading>About Me</Heading>
        <Para className="max-w-lg pt-4 text-sm md:text-base">
          I am a Frontend developer with a passion for creating user-friendly
          interfaces and optimizing user experience.
        </Para>
      </Block>
    </div>
  );
};

export default AboutPage;
