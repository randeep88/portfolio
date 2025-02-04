import { cn } from "../lib/utils";
import React from "react";
const cardContent = {
  description:
    "Hi, I’m Randeep Singh, a passionate MERN Stack Developer who loves crafting beautiful, high-performing websites and web applications. With expertise in MongoDB, Express.js, React, and Node.js, I specialize in building seamless user experiences and scalable solutions. I enjoy turning ideas into reality with clean, efficient code and intuitive design. Whether it's front-end magic or back-end logic, I thrive on the creative process of web development. Constantly learning and evolving, I stay updated with the latest trends to deliver modern innovative digital solutions. Let's create something amazing together!",
};
const CardBody = ({ className = "p-4" }) => (
  <div className={cn("text-start", className)}>
    <p className="text-gray-700 dark:text-gray-300 text-justify text-xl">
      {cardContent.description}
    </p>
  </div>
);
//======================================
export const SimpleCard_V2 = () => {
  const Line = ({ className = "" }) => (
    <div
      className={cn(
        "h-px w-full via-zinc-400 from-[1%] from-zinc-200 to-zinc-600 absolute -z-0 dark:via-zinc-700 dark:from-zinc-900 dark:to-zinc-500",
        className
      )}
    />
  );
  const Container = ({ children }) => (
    <div className="relative mx-auto w-full px-4 sm:px-6 md:px-8">
      <Line className="bg-gradient-to-l left-0 top-2 sm:top-4 md:top-6" />
      <Line className="bg-gradient-to-r bottom-2 sm:bottom-4 md:bottom-6 left-0" />

      <Line className="w-px bg-gradient-to-t right-2 sm:right-4 md:right-6 h-full inset-y-0" />
      <Line className="w-px bg-gradient-to-t left-2 sm:left-4 md:left-6 h-full inset-y-0" />
      <div className="relative z-20 mx-auto py-8">{children}</div>
    </div>
  );
  return (
    <Container>
      <div className="w-full center">
        <CardBody />
      </div>
    </Container>
  );
};
