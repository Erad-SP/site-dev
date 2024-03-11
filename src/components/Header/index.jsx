import React from "react";
import { Img, Text, Heading } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex flex-row justify-center w-full mx-auto md:px-5 max-w-[1015px]">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-start justify-start w-full gap-[3px]">
            <Heading size="xs" as="p" className="tracking-[0.20px]">
              Realização
            </Heading>
            <div className="flex flex-row md:flex-col justify-between items-center w-full ml-[5px] md:gap-10 md:ml-0">
              <div className="flex flex-row md:flex-col justify-center items-center w-[71%] md:w-full md:gap-5">
                <div className="h-[80px] w-[8%] bg-white-A700" />
                <Heading size="2xl" as="h4" className="ml-[87px] md:ml-5 tracking-[0.10px]">
                  ERAD-SP 2024
                </Heading>
                <div className="flex flex-row sm:flex-col justify-center w-[41%] md:w-full ml-[121px] md:ml-5 sm:gap-5">
                  <Heading as="p" className="tracking-[0.20px] text-center">
                    Programação
                  </Heading>
                  <Heading as="p" className="ml-[18px] sm:ml-0 tracking-[0.20px] text-center">
                    Inscrições
                  </Heading>
                  <Heading as="p" className="ml-[23px] sm:ml-5 tracking-[0.20px] text-center">
                    Submissões
                  </Heading>
                </div>
              </div>
                <Text />
            </div>
          </div>
        </div>
      </div>
      <Img src="images/img_sbc_2.png" alt="sbctwo_one" className="w-[11%] md:h-auto sm:w-full object-cover" />
    </header>
  );
}
