import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text, Button } from "../../components";

export default function PaginaPrincipalPage() {
  return (
    <>
      <Helmet>
        <title>Site ERAD-SP 2024</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full gap-[17px] bg-red-700">
            <header className="flex flex-row md:flex-col justify-between items-center w-[72%] ml-[157px] md:gap-10 md:ml-5">
              <div className="flex flex-col items-center justify-start p-1.5">
                <Img src="images/img_vector.svg" alt="vector_one" className="h-[11px]" />
                <Img
                  src="images/img_logo_sbc_1.png"
                  alt="logosbcone_one"
                  className="w-[52%] md:h-auto sm:w-full object-cover"
                  onClick="https://www.sbc.org.br"
                />
              </div>
              <div className="flex flex-row justify-start w-full py-[13px] mx-auto md:px-5 max-w-[659px]">
                <div className="flex flex-row md:flex-col justify-start items-center w-[98%] md:gap-5">
                  <div className="flex flex-row justify-start w-[28%] md:w-full">
                    <Heading size="2xl" as="h4" className="tracking-[0.10px]">
                      ERAD-SP 2024
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-center w-[22%] md:w-full">
                    <div className="flex flex-row justify-center w-[72%] p-0.5">
                    <a href="/" className="ml-[15px] md:ml-0">
                      <Heading as="p" className="mt-0.5 tracking-[0.20px] text-center">
                        Programação
                      </Heading>
                    </a>
                    </div>
                  </div>
                  <a href="/inscricao" className="ml-[15px] md:ml-0">
                    <Heading as="p" className="tracking-[0.20px] text-center" >
                      Inscrições
                    </Heading>
                  </a>
                  <div className="flex flex-row w-[32%] md:w-full ml-3.5 gap-px md:ml-0">
                    <div className="flex flex-row justify-center w-[50%]">
                      <div className="flex flex-row justify-center w-full p-[3px]">
                      <a href="/chamadadetrabalhos" className="ml-[15px] md:ml-0">
                        <Heading as="p" className="tracking-[0.20px] text-center">
                          Submissões
                        </Heading>
                      </a>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-[50%]">
                      <div className="flex flex-row justify-center w-full p-[3px]">
                      <a href="https://www.youtube.com/@eradsp/" className="ml-[15px] md:ml-0">
                        <Heading as="p" className="tracking-[0.20px] text-center">
                          ASSISTA
                        </Heading>
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="flex flex-row justify-start w-full mb-1.5">
              <div className="flex flex-row md:flex-col justify-end items-start w-full gap-11 p-3.5">
                <div className="flex flex-col items-start justify-start w-[41%] md:w-full gap-8 p-[30px] my-[60px] md:mt-0 sm:p-5">
                  <Heading size="md" as="h1" className="tracking-[0.10px]">
                    <span className="text-white-A700 text-2xl">15° EDIÇÃO</span>
                    <span className="text-white-A700"></span>
                  </Heading>
                  <Heading size="5xl" as="h2" className="w-[96%] tracking-[0.20px] !leading-[80px]">
                    <>
                      Escola Regional de
                      <br />
                      Alto Desempenho do
                      <br />
                      Estado de São Paulo
                    </>
                  </Heading>
                  <Heading size="xl" as="h3" className="tracking-[0.20px] !font-semibold">
                    16 a 18 de Maio, Rio Claro/SP
                  </Heading>
                  <div className="flex flex-row justify-start gap-2.5">
                    <a href="/inscricao" className="ml-[15px] md:ml-0">
                      <Button color="red_400" size="md" variant="fill" className="sm:px-5 tracking-[0.20px] font-bold min-w-[160px] rounded-[5px]">
                        Inscreva-se
                      </Button>
                    </a>
                    <Button color="red_700" size="md" className="sm:px-5 tracking-[0.20px] font-bold min-w-[154px] rounded-[5px]">
                      Saiba mais
                    </Button>
                  </div>
                </div>
                <Img
                  src="images/img_logoeradvetorizado.png"
                  alt="logoeradvetoriz"
                  className="w-[48%] md:w-full md:h-[452px] mt-[57px] md:mt-0 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end w-full py-3.5 bg-white-A700">
            <div className="flex flex-row md:flex-col justify-end items-start w-[89%] mt-[106px] md:gap-5">
              <div className="flex flex-col items-center justify-start w-[87%] md:w-full gap-[172px]">
                <div className="flex flex-row justify-center w-[95%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Heading as="h2" className="!text-red-400 tracking-[0.20px]">
                      Sobre
                    </Heading>
                    <Heading size="4xl" as="h3" className="mt-[17px] !text-blue_gray-900 tracking-[0.20px]">
                      Seja bem-vindo(a) à ERAD-SP 2024!
                    </Heading>
                    <Text size="md" as="p" className="mt-2 tracking-[0.20px] text-justify">
                      <>
                        A XV Escola Regional de Alto Desempenho de São Paulo (ERAD-SP 2024) será realizada entre os dias
                        16 e 18 de maio de 2024,
                        <br />
                        na Universidade Estadual Paulista “Júlio de Mesquita Filho” (Unesp), em Rio Claro/SP.
                        <br />A ERAD-SP é realizada anualmente pela Sociedade Brasileira de Computação (SBC) e pela
                        Comissão Regional de Alto Desempenho de São Paulo (CRAD/SP).
                        <br />
                        <br />O público alvo da ERAD-SP 2024 são alunos, profissionais e professores/pesquisadores que
                        atuam direta ou indiretamente na computação de alto <br />
                        desempenho e em áreas correlatas.
                        <br />
                        <br />
                        Os principais objetivos são:
                        <br />
                        -&gt; Qualificar os profissionais do sul do Brasil nas áreas que compõem o processamento de alto
                        desempenho;
                        <br />
                        -&gt; Prover um fórum regular onde possam ser apresentados os avanços recentes nessas áreas;
                        <br />
                        -&gt; Discutir formas de ensino de processamento de alto desempenho nas universidades.
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-[11px]">
                  <Heading size="4xl" as="h4" className="ml-7 md:ml-0 sm:ml-5 !text-blue_gray-900 tracking-[0.20px]">
                    Sobre a SBC
                  </Heading>
                  <Text size="md" as="p" className="w-[95%] ml-7 md:ml-0 sm:ml-5 tracking-[0.20px] text-justify">
  <span className="text-gray-900">
    <>
      A Sociedade Brasileira de Computação - SBC é uma Sociedade Científica sem fins lucrativos,
      fundada em julho de 1978, que reúne estudantes, professores, profissionais, pesquisadores e
      entusiastas da área da Computação e Informática de todo o país.
      <br />
      <br />A SBC tem como função fomentar o acesso à informação e cultura por meio da informática,
      promover a inclusão digital, incentivar a pesquisa e o ensino em computação no Brasil, e
      contribuir para a formação do profissional da computação com responsabilidade social.
      <br />
      <br />
      Para organização e divulgação de atividades, ações e eventos científicos, técnicos, educacionais
      e políticos, a SBC mantém uma estrutura de três tipos de Grupos Temáticos (GT), que são as
      Grandes Áreas (GA), as Comissões Especiais (CE) e os Grupos de Interesses (GI). Estes grupos
      reúnem associados com interesses comuns em subáreas da computação.
      <br />
      <br />
      Aqui você está acessando o site de uma das Comissões Especiais (CE) da SBC, que representa um
      grupo de associados da SBC que compartilham dos interesses e valores em determinada área da
      Computação. Associados vigentes podem se inscrever nas{" "}
    </>
  </span>
  <a href="https://www.sbc.org.br/403-comissoes-especiais" className="text-gray-900 inline">
    listas de e-mail das Comissões Especiais (CE)&nbsp; 
  </a>
  <span className="text-gray-900">
    da área que deseja acompanhar. Se você ainda não é um associado ou deseja renovar sua associação à
    nossa comunidade{" "}
  </span>
  <a href="https://centraldesistemas.sbc.org.br/mom" className="text-gray-900 inline">
    clique aqui&nbsp; 
  </a>
  <span className="text-gray-900">
    e venha fazer parte da maior e mais importante sociedade científica na área de computação da
    América Latina!
  </span>
</Text>


                </div>
              </div>
              <Img
                src="images/img_sbc_1.png"
                alt="sbcone_one"
                className="w-[14%] md:w-full md:h-[153px] mt-[359px] ml-[-10px] md:ml-0 md:mt-0 object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full mt-[35px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row justify-center w-full pb-[26px] sm:pb-5 z-[1] bg-white-A700">
                <div className="flex flex-col items-center justify-start w-full gap-5 py-[30px] md:px-5 sm:p-5 max-w-[1108px]">
                  <div className="flex flex-row justify-center w-full py-[30px] sm:py-5">
                    <div className="flex flex-col items-start justify-start w-full pt-1 px-1">
                      <Heading as="h2" className="ml-[25px] md:ml-0 sm:ml-5 !text-red-400 tracking-[0.20px]">
                        Programação
                      </Heading>
                      <Heading
                        size="4xl"
                        as="h3"
                        className="mt-4 ml-[25px] md:ml-0 sm:ml-5 !text-blue_gray-900 tracking-[0.20px]"
                      >
                        Programação do Evento (em construção)
                      </Heading>
                      <Text size="md" as="p" className="w-[96%] mt-2 ml-[25px] md:ml-0 sm:ml-5 tracking-[0.20px]">
                        O evento ocorrerá entre os dias 16 e 18 de maio, e contará com diversas palestras e minicursos,
                        dispostos de acordo com o seguinte cronograma
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-row md:flex-col justify-center w-full md:gap-5">
                      <div className="flex flex-col items-center justify-start w-[14%] md:w-full">
                        <div className="h-[50px] w-full bg-white-A700" />
                        <div className="flex flex-row justify-center w-full md:h-auto p-[22px] sm:p-5 bg-pink-900">
                          <Button
                            color="gray_200"
                            size="lg"
                            variant="fill"
                            shape="round"
                            className="tracking-[0.10px] font-bold min-w-[62px]"
                          >
                            08h
                          </Button>
                        </div>
                        <div className="flex flex-row justify-center w-full md:h-auto p-[22px] sm:p-5 bg-pink-900">
                          <Button
                            color="gray_200"
                            size="lg"
                            variant="fill"
                            shape="round"
                            className="tracking-[0.10px] font-bold min-w-[62px]"
                          >
                            09h
                          </Button>
                        </div>
                        <div className="flex flex-row justify-center w-full md:h-auto p-[22px] sm:p-5 bg-pink-900">
                          <Button
                            color="gray_200"
                            size="lg"
                            variant="fill"
                            shape="round"
                            className="tracking-[0.10px] font-bold min-w-[60px]"
                          >
                            10h
                          </Button>
                        </div>
                        <div className="flex flex-row justify-center w-full md:h-auto p-[9px] bg-pink-900">
                          <div className="flex flex-row justify-center w-[70%] p-4">
                            <Button
                              color="gray_200"
                              size="sm"
                              variant="fill"
                              className="w-full tracking-[0.10px] font-bold rounded-[25px]"
                            >
                              11h
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center w-full md:h-auto p-[22px] sm:p-5 bg-pink-900">
                          <Button
                            color="gray_200"
                            size="lg"
                            variant="fill"
                            shape="round"
                            className="tracking-[0.10px] font-bold min-w-[62px]"
                          >
                            08h
                          </Button>
                        </div>
                        <div className="flex flex-row justify-center w-full md:h-auto p-[22px] sm:p-5 bg-pink-900">
                          <Button
                            color="gray_200"
                            size="lg"
                            variant="fill"
                            shape="round"
                            className="tracking-[0.10px] font-bold min-w-[62px]"
                          >
                            08h
                          </Button>
                        </div>
                        <div className="flex flex-row justify-center w-full md:h-auto p-[22px] sm:p-5 bg-pink-900">
                          <Button
                            color="gray_200"
                            size="lg"
                            variant="fill"
                            shape="round"
                            className="tracking-[0.10px] font-bold min-w-[62px]"
                          >
                            08h
                          </Button>
                        </div>
                        <div className="flex flex-row justify-center w-full md:h-auto p-[22px] sm:p-5 bg-pink-900">
                          <Button
                            color="gray_200"
                            size="lg"
                            variant="fill"
                            shape="round"
                            className="tracking-[0.10px] font-bold min-w-[62px]"
                          >
                            08h
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-row md:flex-col w-[82%] md:w-full gap-px">
                        <div className="flex flex-col items-center justify-start w-[34%] md:w-full">
                          <Button
                            color="white_A700"
                            size="sm"
                            variant="fill"
                            shape="square"
                            className="w-full sm:px-5 tracking-[0.20px] font-bold"
                          >
                            Quinta-Feira, 16/05
                          </Button>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-red-400">
                            <div className="flex flex-row justify-start items-center w-[51%] gap-5">
                              <Heading
                                size="md"
                                as="h4"
                                className="flex justify-center items-center h-[50px] w-[50px] !text-red-600 tracking-[0.10px] bg-gray-200 text-center rounded-[50%]"
                              >
                                01
                              </Heading>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="h5" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[51%] gap-5">
                              <Heading
                                size="md"
                                as="h6"
                                className="flex justify-center items-center h-[50px] w-[50px] !text-red-600 tracking-[0.10px] bg-gray-200 text-center rounded-[50%]"
                              >
                                01
                              </Heading>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[51%] gap-5">
                              <Heading
                                size="md"
                                as="h6"
                                className="flex justify-center items-center h-[50px] w-[50px] !text-red-600 tracking-[0.10px] bg-gray-200 text-center rounded-[50%]"
                              >
                                01
                              </Heading>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[51%] gap-5">
                              <Heading
                                size="md"
                                as="h6"
                                className="flex justify-center items-center h-[50px] w-[50px] !text-red-600 tracking-[0.10px] bg-gray-200 text-center rounded-[50%]"
                              >
                                01
                              </Heading>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[51%] gap-5">
                              <Heading
                                size="md"
                                as="h6"
                                className="flex justify-center items-center h-[50px] w-[50px] !text-red-600 tracking-[0.10px] bg-gray-200 text-center rounded-[50%]"
                              >
                                01
                              </Heading>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[51%] gap-5">
                              <Heading
                                size="md"
                                as="h6"
                                className="flex justify-center items-center h-[50px] w-[50px] !text-red-600 tracking-[0.10px] bg-gray-200 text-center rounded-[50%]"
                              >
                                01
                              </Heading>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[52%] gap-5">
                              <Button
                                color="gray_200"
                                size="sm"
                                variant="fill"
                                className="tracking-[0.10px] font-bold min-w-[51px] rounded-[25px]"
                              >
                                02
                              </Button>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[52%] gap-5">
                              <Button
                                color="gray_200"
                                size="sm"
                                variant="fill"
                                className="tracking-[0.10px] font-bold min-w-[51px] rounded-[25px]"
                              >
                                03
                              </Button>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[34%] md:w-full">
                          <Button
                            color="white_A700"
                            size="sm"
                            variant="fill"
                            shape="square"
                            className="w-full sm:px-5 tracking-[0.20px] font-bold"
                          >
                            Sexta-Feira, 17/05
                          </Button>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[52%] gap-5">
                              <Heading
                                size="md"
                                as="h6"
                                className="flex justify-center items-center h-[50px] w-[50px] !text-red-600 tracking-[0.10px] bg-gray-200 text-center rounded-[50%]"
                              >
                                01
                              </Heading>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[52%] gap-5">
                              <Button
                                color="gray_200"
                                size="sm"
                                variant="fill"
                                className="tracking-[0.10px] font-bold min-w-[51px] rounded-[25px]"
                              >
                                02
                              </Button>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[52%] gap-5">
                              <Button
                                color="gray_200"
                                size="sm"
                                variant="fill"
                                className="tracking-[0.10px] font-bold min-w-[51px] rounded-[25px]"
                              >
                                03
                              </Button>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[51%] gap-5">
                              <Heading
                                size="md"
                                as="h6"
                                className="flex justify-center items-center h-[50px] w-[50px] !text-red-600 tracking-[0.10px] bg-gray-200 text-center rounded-[50%]"
                              >
                                01
                              </Heading>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[51%] gap-5">
                              <Heading
                                size="md"
                                as="h6"
                                className="flex justify-center items-center h-[50px] w-[50px] !text-red-600 tracking-[0.10px] bg-gray-200 text-center rounded-[50%]"
                              >
                                01
                              </Heading>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[51%] gap-5">
                              <Heading
                                size="md"
                                as="h6"
                                className="flex justify-center items-center h-[50px] w-[50px] !text-red-600 tracking-[0.10px] bg-gray-200 text-center rounded-[50%]"
                              >
                                01
                              </Heading>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[51%] gap-5">
                              <Heading
                                size="md"
                                as="h6"
                                className="flex justify-center items-center h-[50px] w-[50px] !text-red-600 tracking-[0.10px] bg-gray-200 text-center rounded-[50%]"
                              >
                                01
                              </Heading>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[51%] gap-5">
                              <Heading
                                size="md"
                                as="h6"
                                className="flex justify-center items-center h-[50px] w-[50px] !text-red-600 tracking-[0.10px] bg-gray-200 text-center rounded-[50%]"
                              >
                                01
                              </Heading>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[34%] md:w-full">
                          <Button
                            color="white_A700"
                            size="sm"
                            variant="fill"
                            shape="square"
                            className="w-full sm:px-5 tracking-[0.20px] font-bold"
                          >
                            Sábado, 18/05
                          </Button>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[52%] gap-5">
                              <Heading
                                size="md"
                                as="h6"
                                className="flex justify-center items-center h-[50px] w-[50px] !text-red-600 tracking-[0.10px] bg-gray-200 text-center rounded-[50%]"
                              >
                                01
                              </Heading>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[52%] gap-5">
                              <Button
                                color="gray_200"
                                size="sm"
                                variant="fill"
                                className="tracking-[0.10px] font-bold min-w-[51px] rounded-[25px]"
                              >
                                02
                              </Button>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[52%] gap-5">
                              <Button
                                color="gray_200"
                                size="sm"
                                variant="fill"
                                className="tracking-[0.10px] font-bold min-w-[51px] rounded-[25px]"
                              >
                                03
                              </Button>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[51%] gap-5">
                              <Heading
                                size="md"
                                as="h6"
                                className="flex justify-center items-center h-[50px] w-[50px] !text-red-600 tracking-[0.10px] bg-gray-200 text-center rounded-[50%]"
                              >
                                01
                              </Heading>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[51%] gap-5">
                              <Heading
                                size="md"
                                as="h6"
                                className="flex justify-center items-center h-[50px] w-[50px] !text-red-600 tracking-[0.10px] bg-gray-200 text-center rounded-[50%]"
                              >
                                01
                              </Heading>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[51%] gap-5">
                              <Heading
                                size="md"
                                as="h6"
                                className="flex justify-center items-center h-[50px] w-[50px] !text-red-600 tracking-[0.10px] bg-gray-200 text-center rounded-[50%]"
                              >
                                01
                              </Heading>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[51%] gap-5">
                              <Heading
                                size="md"
                                as="h6"
                                className="flex justify-center items-center h-[50px] w-[50px] !text-red-600 tracking-[0.10px] bg-gray-200 text-center rounded-[50%]"
                              >
                                01
                              </Heading>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start w-full p-[25px] sm:p-5 bg-white-A700">
                            <div className="flex flex-row justify-start items-center w-[51%] gap-5">
                              <Heading
                                size="md"
                                as="h6"
                                className="flex justify-center items-center h-[50px] w-[50px] !text-red-600 tracking-[0.10px] bg-gray-200 text-center rounded-[50%]"
                              >
                                01
                              </Heading>
                              <div className="flex flex-col items-start justify-start w-[45%] pt-[3px] gap-[9px]">
                                <Heading as="p" className="!text-gray-900 tracking-[0.20px]">
                                  Evento
                                </Heading>
                                <Text as="p" className="tracking-[0.20px]">
                                  Descrição
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-end w-full mt-[-19px] px-[21px] sm:px-5 bg-white-A700">
                <div className="flex flex-col items-start justify-center w-full gap-[100px] py-[30px] mx-auto md:px-5 sm:py-5 max-w-[1379px]">
                  <div className="flex flex-row justify-center w-[55%] md:w-full p-[30px] sm:p-5">
                    <div className="flex flex-col items-start justify-start w-full pt-[3px]">
                      <Heading as="p" className="!text-deep_orange-400 tracking-[0.20px]">
                        Contato
                      </Heading>
                      <Heading size="4xl" as="h1" className="mt-[18px] !text-blue_gray-900 tracking-[0.20px]">
                        Fique por dentro!{" "}
                      </Heading>
                      <Text size="md" as="p" className="w-[68%] mt-[7px] tracking-[0.20px]">
                        <>
                          Através dessa redes, entre em contato conosco,
                          <br />
                          conheça as novidades e participe da comunidade
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col items-center w-[95%] ml-[34px] gap-[39px] md:gap-[9.75px] md:ml-0 sm:ml-5">
                    <div className="flex flex-col items-start justify-center w-[18%] md:w-full mb-[72px] p-[25px] sm:p-5 bg-white-A700 shadow-xs">
                      <Button
                        color="red_700"
                        size="xl"
                        variant="fill"
                        className="w-[60px] mt-[9px] ml-3.5 md:ml-0 rounded-[10px]"
                      >
                        <Img src="images/img_mdi_instagram.svg" />
                      </Button>
                      <a
                        href="https://www.instagram.com/erad.sp"
                        target="_blank"
                        rel="noreferrer"
                        className="w-[47%] mt-5 ml-3.5 md:ml-0 !leading-6"
                      >
                        <Heading size="md" as="h6" className="!text-gray-900 tracking-[0.10px]">
                          <>
                            Instagram:
                            <br />
                            @erad.sp
                          </>
                        </Heading>
                      </a>
                      <Text size="s" as="p" className="mt-11 mb-[9px] ml-3.5 md:ml-0 tracking-[0.20px]">
                        Marque nos seus stories!
                      </Text>
                    </div>
                    <div className="w-[50px] h-[2px] bg-red-700" />
                    <div className="flex flex-col items-start justify-start w-[18%] md:w-full mt-12 mb-6 p-[35px] md:mt-0 sm:p-5 bg-white-A700 shadow-xs">
                      <Button
                        color="red_700"
                        size="xl"
                        variant="fill"
                        className="w-[60px] ml-[5px] md:ml-0 rounded-[10px]"
                      >
                        <Img src="images/img_ic_baseline_facebook.svg" />
                      </Button>
                      
                      <Heading
                        size="md"
                        as="h6"
                        className="w-[50%] mt-5 ml-[5px] md:ml-0 !text-gray-900 tracking-[0.10px] !leading-6"
                      >
                        <>
                          Facebook:
                          <br />
                          ERAD SP
                        </>
                      </Heading>
                      <Text size="s" as="p" className="mt-11 ml-[5px] md:ml-0 !text-gray-600_01 tracking-[0.20px]">
                        Siga nossa página!{" "}
                      </Text>
                    </div>
                    <div className="w-[50px] h-[2px] bg-red-700" />
                    <div className="flex flex-col items-start justify-start w-[18%] md:w-full mb-[72px] p-[35px] sm:p-5 bg-white-A700 shadow-xs">
                      <Button
                        color="red_700"
                        size="xl"
                        variant="fill"
                        className="w-[60px] ml-[5px] md:ml-0 rounded-[10px]"
                      >
                        <Img src="images/img_fluent_mdl2_website.svg" />
                      </Button>
                      <Heading
                        size="md"
                        as="h6"
                        className="w-[76%] mt-5 ml-[5px] md:ml-0 !text-gray-900 tracking-[0.10px] !leading-6"
                      >
                        <>
                          Site:
                          <br />
                          www.sbc.org.br
                        </>
                      </Heading>
                      <Text size="s" as="p" className="mt-11 ml-[5px] md:ml-0 tracking-[0.20px]">
                        Conheça o site da SBC!
                      </Text>
                    </div>
                    <div className="w-[50px] h-[2px] bg-red-700" />
                    <div className="flex flex-col items-start justify-center w-[18%] md:w-full mt-12 p-[13px] md:mt-0 bg-white-A700 shadow-xs">
                      <Button
                        color="red_700"
                        size="xl"
                        variant="fill"
                        className="w-[60px] mt-[21px] ml-[26px] md:ml-0 sm:ml-5 rounded-[10px]"
                      >
                        <Img src="images/img_bi_youtube.svg" />
                      </Button>
                      <Heading
                        size="md"
                        as="h6"
                        className="w-[79%] mt-5 ml-[26px] md:ml-0 sm:ml-5 !text-gray-900 tracking-[0.10px] !leading-6"
                      >
                        <>
                          Youtube:
                          <br />
                          Sociedade Brasileira
                          <br />
                          de Computação
                        </>
                      </Heading>
                      <Text size="s" as="p" className="mt-[43px] mb-[23px] ml-[26px] md:ml-0 sm:ml-5 tracking-[0.20px]">
                        Assista os vídeos do canal!
                      </Text>
                    </div>
                    <div className="w-[50px] h-[2px] bg-red-700" />
                    <div className="flex flex-col items-start justify-start w-[18%] md:w-full mb-[72px] p-[35px] sm:p-5 bg-white-A700 shadow-xs">
                      <Button
                        color="red_700"
                        size="xl"
                        variant="fill"
                        className="w-[60px] ml-[5px] md:ml-0 rounded-[10px]"
                      >
                        <Img src="images/img_bi_youtube.svg" />
                      </Button>
                      <Heading
                        size="md"
                        as="h6"
                        className="w-[44%] mt-5 ml-[5px] md:ml-0 !text-gray-900 tracking-[0.10px] !leading-6"
                      >
                        <>
                          Youtube:
                          <br />
                          @eradsp
                        </>
                      </Heading>
                      <Text size="s" as="p" className="mt-11 ml-[5px] md:ml-0 tracking-[0.20px]">
                        Acompanhe as lives!
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full mt-[33px] gap-10 p-10 sm:p-5">
            <div className="flex flex-col items-center justify-start w-full pb-0.5 gap-[33px] md:px-5 max-w-[1049px]">
              <div className="flex flex-row justify-start w-full">
                <div className="flex flex-row justify-start w-[67%] pt-[3px]">
                  <Heading size="2xl" as="h2" className="!text-blue_gray-900 tracking-[0.10px]">
                    Realização
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
            <div className="flex flex-col items-center justify-start w-full pb-[34px] gap-[33px] md:px-5 sm:pb-5 max-w-[1049px]">
              <div className="flex flex-row justify-start w-full">
                <div className="flex flex-row justify-start w-[67%] pt-[3px]">
                  <Heading size="2xl" as="h3" className="!text-gray-900 tracking-[0.10px]">
                    Organização
                  </Heading>
                </div>
              </div>
              <div className="flex flex-row md:flex-col w-full gap-[30px]">
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
            <div className="flex flex-col w-full mb-11 gap-[33px] md:px-5 max-w-[1049px]">
              <div className="flex flex-col items-start justify-start w-full gap-[33px]">
                <div className="flex flex-col items-start justify-center ml-0.5 gap-3.5 md:ml-0">
                  <Heading as="h4" className="mt-px !text-red-400 tracking-[0.20px]">
                    Patrocinadores
                  </Heading>
                  <Heading size="2xl" as="h5" className="!text-blue_gray-900 tracking-[0.10px]">
                    Ouro
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
                  <Heading as="h6" className="mt-px !text-red-400 tracking-[0.20px]">
                    Patrocinadores
                  </Heading>
                  <Heading size="2xl" as="h4" className="!text-blue_gray-900 tracking-[0.10px]">
                    Prata
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
              <div className="flex flex-col items-start justify-start w-full gap-[33px]">
                <div className="flex flex-col items-start justify-center ml-0.5 gap-3.5 md:ml-0">
                  <Heading as="p" className="mt-px !text-red-400 tracking-[0.20px]">
                    Patrocinadores
                  </Heading>
                  <Heading size="2xl" as="h4" className="!text-blue_gray-900 tracking-[0.10px]">
                    Bronze
                  </Heading>
                </div>
                <div className="flex flex-row md:flex-col w-full gap-[30px]">
                  <div className="flex flex-row justify-center w-[23%] md:w-full">
                    <Img src="images/img_logo_1.png" alt="bronze_one" className="w-[200px] md:h-auto object-cover" />
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
          </div>
          <footer className="flex justify-center items-center w-full px-14 py-[78px] md:p-5 bg-gray-900">
            <div className="flex flex-col items-center justify-center w-[24%] mt-[5px] gap-[22px]">
              <Heading size="md" as="h6" className="tracking-[0.10px] text-center">
                Contato
              </Heading>
              <div className="flex flex-col items-center justify-start w-full gap-2.5">
                <div className="flex flex-row justify-start items-center w-full gap-2.5">
                  <Img src="images/img_vector_white_a700.svg" alt="vector_three" className="h-[30px]" />
                  <Heading as="p" className="tracking-[0.20px]">
                    Av. 24 A, 1515 - Bela Vista, Rio Claro - SP
                  </Heading>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-2.5 md:px-5 max-w-[217px]">
                  <Img src="images/img_carbon_send_alt.svg" alt="carbonsendalt" className="h-[26px]" />
                  <Heading as="p" className="tracking-[0.20px]">
                    erad.saopaulo@gmail.com
                  </Heading>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
