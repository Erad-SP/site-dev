import React from "react";
import { Heading, Img } from "./..";

export default function InscriOFooter({
  h3sectionone = "Realização",
  h3section = "Organização",
  h6sectiontag = "Patrocinadores",
  h3section1 = "Ouro",
  h6sectiontag1 = "Patrocinadores",
  h3section2 = "Prata",
  h6sectiontag2 = "Patrocinadores",
  h3sectiontwo = "Bronze",
  h5sec = "Contato",
  h6 = "Av. 24 A, 1515 - Bela Vista, Rio Claro - SP",
  email = "erad.saopaulo@gmail.com",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full gap-[33px] p-10 sm:p-5 bg-white-A700">
        <div className="flex flex-col items-start justify-start w-full gap-[33px] md:px-5 max-w-[1049px]">
          <div className="flex flex-col items-center justify-start w-full pb-0.5 gap-[33px]">
            <div className="flex flex-row justify-start w-full">
              <div className="flex flex-row justify-start w-[67%] pt-[3px]">
                <Heading size="2xl" as="h1" className="!text-blue_gray-900 tracking-[0.10px]">
                  {h3sectionone}
                </Heading>
              </div>
            </div>
            <div className="flex flex-row justify-center w-[53%] md:w-full mb-[31px]">
              <div className="flex flex-row sm:flex-col justify-center items-center w-full sm:gap-5">
                <Img src="images/img_col_md_3.svg" alt="colmdthree_one" className="h-[200px]" />
                <div className="flex flex-row justify-center w-[60%] sm:w-full ml-[-12px] sm:ml-0">
                  <Img
                    src="images/img_ce_acpad_1.png"
                    alt="ceacpadone_one"
                    className="w-full md:h-auto sm:w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-[33px]">
            <div className="flex flex-col items-center justify-start w-full pb-[34px] gap-[33px] sm:pb-5">
              <div className="flex flex-row justify-start w-full">
                <div className="flex flex-row justify-start w-[67%] pt-[3px]">
                  <Heading size="2xl" as="h2" className="!text-gray-900 tracking-[0.10px]">
                    {h3section}
                  </Heading>
                </div>
              </div>
              <div className="flex flex-row md:flex-col w-full gap-[30px]">
                <div className="flex flex-row justify-center w-[23%] md:w-full">
                  <Img src="images/img_logo_1.png" alt="organização_one" className="w-[200px] md:h-auto object-cover" />
                </div>
                <div className="flex flex-row justify-center w-[23%] md:w-full">
                  <Img src="images/img_logo_1.png" alt="logoone_one" className="w-[200px] md:h-auto object-cover" />
                </div>
                <div className="flex flex-row justify-center w-[23%] md:w-full">
                  <Img src="images/img_logo_1.png" alt="logoone_one" className="w-[200px] md:h-auto object-cover" />
                </div>
                <div className="flex flex-row justify-center w-[23%] md:w-full">
                  <Img src="images/img_logo_1.png" alt="logoone_one" className="w-[200px] md:h-auto object-cover" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-[33px]">
              <div className="flex flex-col items-start justify-center ml-0.5 gap-3.5 md:ml-0">
                <Heading as="h3" className="mt-px !text-red-400 tracking-[0.20px]">
                  {h6sectiontag}
                </Heading>
                <Heading size="2xl" as="h4" className="!text-blue_gray-900 tracking-[0.10px]">
                  {h3section1}
                </Heading>
              </div>
              <div className="flex flex-row md:flex-col w-full gap-[30px]">
                <div className="flex flex-row justify-center w-[23%] md:w-full">
                  <Img src="images/img_logo_1.png" alt="ouro_one" className="w-[200px] md:h-auto object-cover" />
                </div>
                <div className="flex flex-row justify-center w-[23%] md:w-full">
                  <Img src="images/img_logo_1.png" alt="logoone_one" className="w-[200px] md:h-auto object-cover" />
                </div>
                <div className="flex flex-row justify-center w-[23%] md:w-full">
                  <Img src="images/img_logo_1.png" alt="logoone_one" className="w-[200px] md:h-auto object-cover" />
                </div>
                <div className="flex flex-row justify-center w-[23%] md:w-full">
                  <Img src="images/img_logo_1.png" alt="logoone_one" className="w-[200px] md:h-auto object-cover" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-[33px]">
              <div className="flex flex-col items-start justify-center ml-0.5 gap-3.5 md:ml-0">
                <Heading as="h5" className="mt-px !text-red-400 tracking-[0.20px]">
                  {h6sectiontag1}
                </Heading>
                <Heading size="2xl" as="h6" className="!text-blue_gray-900 tracking-[0.10px]">
                  {h3section2}
                </Heading>
              </div>
              <div className="flex flex-row md:flex-col w-full gap-[30px]">
                <div className="flex flex-row justify-center w-[23%] md:w-full">
                  <Img src="images/img_logo_1.png" alt="prata_one" className="w-[200px] md:h-auto object-cover" />
                </div>
                <div className="flex flex-row justify-center w-[23%] md:w-full">
                  <Img src="images/img_logo_1.png" alt="logoone_one" className="w-[200px] md:h-auto object-cover" />
                </div>
                <div className="flex flex-row justify-center w-[23%] md:w-full">
                  <Img src="images/img_logo_1.png" alt="logoone_one" className="w-[200px] md:h-auto object-cover" />
                </div>
                <div className="flex flex-row justify-center w-[23%] md:w-full">
                  <Img src="images/img_logo_1.png" alt="logoone_one" className="w-[200px] md:h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center ml-0.5 gap-3.5 md:ml-0">
            <Heading as="p" className="mt-px !text-red-400 tracking-[0.20px]">
              {h6sectiontag2}
            </Heading>
            <Heading size="2xl" as="h4" className="!text-blue_gray-900 tracking-[0.10px]">
              {h3sectiontwo}
            </Heading>
          </div>
        </div>
        <div className="flex flex-row md:flex-col w-full mb-[33px] gap-[30px] md:px-5 max-w-[1049px]">
          <div className="flex flex-row justify-center w-[23%] md:w-full">
            <Img src="images/img_logo_1.png" alt="logoone_one" className="w-[200px] md:h-auto object-cover" />
          </div>
          <div className="flex flex-row justify-center w-[23%] md:w-full">
            <Img src="images/img_logo_1.png" alt="logoone_one" className="w-[200px] md:h-auto object-cover" />
          </div>
          <div className="flex flex-row justify-center w-[23%] md:w-full">
            <Img src="images/img_logo_1.png" alt="logoone_one" className="w-[200px] md:h-auto object-cover" />
          </div>
          <div className="flex flex-row justify-center w-[23%] md:w-full">
            <Img src="images/img_logo_1.png" alt="logoone_one" className="w-[200px] md:h-auto object-cover" />
          </div>
        </div>
      </div>
      <footer className="flex justify-center items-center w-full bg-gray-50">
        <div className="flex flex-row justify-center w-full p-[31px] sm:p-5 bg-gray-900">
          <div className="flex flex-row justify-center w-[24%] py-[50px] md:py-5">
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-col items-center justify-center w-full pt-0.5 gap-[22px] px-0.5">
                <Heading size="md" as="h6" className="tracking-[0.10px] text-center">
                  {h5sec}
                </Heading>
                <div className="flex flex-col items-center justify-start w-full gap-2.5 md:px-5 max-w-[306px]">
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_vector.svg" alt="vector_one" className="h-[30px]" />
                    <Heading as="p" className="tracking-[0.20px]">
                      {h6}
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-start items-center w-[71%] md:w-full gap-2.5">
                    <Img src="images/img_carbon_send_alt.svg" alt="carbonsendalt" className="h-[26px]" />
                    <Heading as="p" className="tracking-[0.20px]">
                      {email}
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
