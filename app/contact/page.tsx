import { Block } from "@/components/block";
import { Heading } from "@/components/heading";
import { Para } from "@/components/para";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <Block className="mt-0 border-0 pt-0 shadow-[none] dark:shadow-[none]">
        <Heading>Contact Me</Heading>
        <Para className="max-w-lg pt-4 text-sm md:text-base">
          If you have any questions or inquiries, please feel free to contact
          me.
        </Para>
      </Block>
    </div>
  );
};

export default ContactPage;
