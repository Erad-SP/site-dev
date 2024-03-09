import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text } from "../../components";

export default function ChamadadeTrabalhosPage() {
  return (
    <>
      <Helmet>
        <title>Site ERAD-SP 2024</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full gap-14">
          <div className="flex flex-col items-center justify-start w-full gap-[35px]">
            <div className="flex flex-row justify-center w-full pb-[41px] md:pb-5 bg-red-700 shadow-sm">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-row justify-center w-full">
                    <div className="h-[759px] w-full pb-[11px] relative">
                      <div className="flex flex-col items-start justify-start w-[96%] top-[1%] right-0 left-0 m-auto absolute">
                        <div className="h-[352px] w-full z-[1] relative">
                          <Img
                            src="images/img_logoeradvetorizado.png"
                            alt="logoeradvetoriz"
                            className="h-[296px] w-[28%] sm:w-full bottom-0 right-0 m-auto object-cover absolute"
                          />
                          <Heading
                            size="5xl"
                            as="h1"
                            className="w-max bottom-[35%] right-0 left-0 m-auto tracking-[0.20px] text-center absolute"
                          >
                            Chamada de Trabalhos
                          </Heading>
                          <header className="flex flex-col w-[75%] left-0 top-0 m-auto absolute">
                            <div className="flex flex-row justify-center w-full ml-[7px] md:px-5 max-w-[1015px]">
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
                                    <a href="#">
                                      <Text />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Img
                              src="images/img_sbc_2.png"
                              alt="sbctwo_one"
                              className="w-[11%] md:h-auto sm:w-full object-cover"
                            />
                          </header>
                        </div>
                        <Heading size="3xl" as="h2" className="w-[65%] mt-[-11px] ml-[7px] md:ml-0 tracking-[0.20px]">
                          <span className="text-white-A700">
                            <>
                              Datas Importantes
                              <br />
                            </>
                          </span>
                          <span className="text-white-A700 text-[32px]">Submissão de trabalhos: </span>
                          <span className="text-white-A700 text-[32px]">
                            <>
                              25/03/2024
                              <br />
                              Resultado: 12/04/2024
                              <br />
                              Inscrições dos autores no evento:  21/04/2024
                              <br />
                              Submissão das versões finais dos artigos: 28/04/2024
                            </>
                          </span>
                        </Heading>
                      </div>
                      <Img
                        src="images/img_background_sec.svg"
                        alt="vector_one"
                        className="justify-center h-[748px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-[33px] md:px-5 max-w-[1328px]">
              <div className="h-[1601px] w-full relative">
                <Text
                  size="md"
                  as="p"
                  className="w-[38%] bottom-0 left-[3%] m-auto !text-white-A700 tracking-[0.20px] !leading-[30px] absolute"
                >
                  <>
                    Algoritmos Paralelos e Distribuídos;
                    <br />
                    Aplicações de Computação de Alto Desempenho em Ciências, Engenharias e outras (ex.: Agricultura,
                    Biologia, Engenharias, Física, Matemática, Ciência da Computação, Medicina, Mercado Financeiro,
                    Química, Nanociências e outras);
                    <br />
                    Aprendizado de Máquina (Machine Learning), Ciência de Dados (Data Science) e Computação de Alto
                    Desempenho;
                    <br />
                    Arquitetura de Computadores e Processadores;
                    <br />
                    Arquiteturas Avançadas, Dedicadas e Específicas (GPUs, FPGAs e outras);
                    <br />
                    Avaliação, Medição e Predição de Desempenho;
                    <br />
                    Big Data;
                    <br />
                    Computação de Alto Desempenho em Nuvem (Cloud), Grade (Grid), Aglomerado (Cluster) e P2P
                    (Peer-to-Peer);
                    <br />
                    Computação Heterogênea;
                    <br />
                    Depuração, Validação, Verificação e Teste de Aplicações Paralelas e Concorrentes;
                    <br />
                    Engenharia de Desempenho;
                    <br />
                    Escalonamento e Balanceamento de Carga;
                  </>
                </Text>
                <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <div className="flex flex-row justify-center w-full p-[33px] sm:p-5">
                    <Heading
                      size="md"
                      as="h3"
                      className="w-[97%] !text-black-900 tracking-[0.20px] text-justify !leading-[50px]"
                    >
                      <span className="text-black-900 text-xl font-normal">
                        <>
                          A ERAD-SP é um evento anual promovido pela Sociedade Brasileira de Computação (SBC) e pela
                          Comissão Regional de Alto Desempenho de São Paulo (CRAD-SP), sendo que neste ano comemoramos a
                          sua 15a edição.. O público-alvo é composto por alunos de graduação e de pós-graduação,
                          profissionais e professores/pesquisadores que atuam direta ou indiretamente em processamento
                          de alto desempenho, arquitetura de computadores, sistemas paralelos e distribuídos bem como em
                          suas aplicações em áreas como biologia, física, matemática, química, engenharias, medicina,
                          ciência da computação, agricultura, mercado financeiro, óleo e gás, entre outras.
                          <br />
                        </>
                      </span>
                      <span className="text-black-900 font-normal">
                        <>
                          <br />
                        </>
                      </span>
                    </Heading>
                  </div>
                  <Heading size="5xl" as="h4" className="mt-[46px] !text-black-900 tracking-[0.20px] text-center">
                    Tópicos de Interesse
                  </Heading>
                  <Text
                    size="md"
                    as="p"
                    className="w-[92%] mt-[47px] !text-black-900 tracking-[0.20px] text-justify !leading-[30px]"
                  >
                    <>
                      Por meio desta chamada de trabalhos, alunos de pós-graduação e de iniciação científica são
                      convidados a submeter os resultados de seus trabalhos de pesquisa científica ou tecnológica. Por
                      sua vez, a organização da ERAD-SP através de seu comitê de programa, analisará os trabalhos
                      recebidos e fornecerá um ‘feedback’ aos autores, buscando assim contribuir para o bom andamento de
                      suas atividades acadêmicas.
                      <br />A ERAD-SP convida autores de trabalhos em nível de pós-graduação e de iniciação científica
                      relacionados à computação de alto desempenho, arquitetura de computadores, sistemas distribuídos,
                      processamento paralelo e suas aplicações.
                    </>
                  </Text>
                  <Heading size="3xl" as="h5" className="mt-[102px] !text-black-900 tracking-[0.20px]">
                    Tópicos de interesse incluem, mas não se limitam à:
                  </Heading>
                  <div className="flex flex-row md:flex-col w-full mt-[45px] gap-[199px] md:gap-10">
                    <div className="h-[780px] w-[43%] bg-red-700 rounded-[90px]" />
                    <div className="flex flex-col items-center justify-start w-[43%] md:w-full p-8 sm:p-5 bg-red-700 rounded-[90px]">
                      <Text
                        size="md"
                        as="p"
                        className="mt-1.5 mb-[57px] !text-white-A700 tracking-[0.20px] !leading-[30px]"
                      >
                        <>
                          Internet das Coisas e Computação Móvel, Pervasiva e Embarcada;
                          <br />
                          Linguagens, Compiladores, Middlewares e Ferramentas para Alto Desempenho;
                          <br />
                          Modelagem e Simulação de Arquiteturas e Sistemas Paralelos e Distribuídos;
                          <br />
                          Modelos de Programação;
                          <br />
                          Redes e Protocolos de Comunicação de Alto Desempenho;
                          <br />
                          Sistemas de Arquivos e de Entrada e Saída de Alto Desempenho;
                          <br />
                          Sistemas de Banco de Dados Paralelos e Distribuídos;
                          <br />
                          Sistemas de Memória e Memória Compartilhada Distribuída (DSM);
                          <br />
                          Sistemas Distribuídos;
                          <br />
                          Sistemas Operacionais;
                          <br />
                          Sistemas Reconfiguráveis;
                          <br />
                          Software Básico para Computação Paralela e Distribuída;
                          <br />
                          Técnicas e Métodos de Extração de Paralelismo;
                          <br />
                          Tolerância a Falhas;
                          <br />
                          Virtualização de Sistemas.
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Heading size="5xl" as="h6" className="!text-black-900 tracking-[0.20px] text-center">
                Submissão de Trabalhos
              </Heading>
              <div className="flex flex-row justify-center w-full p-[33px] sm:p-5">
                <Heading
                  size="xl"
                  as="h5"
                  className="w-[97%] !text-black-900 tracking-[0.20px] text-justify !leading-[30px]"
                >
                  <span className="text-black-900 font-normal">
                    A submissão deverá ser feita por meio do sistema JEMS (colocar link). Os autores são convidados a
                    submeter resumos expandidos com até 4 páginas, usando o formato da SBC. O modelo pode ser obtido
                    em: 
                  </span>
                  <a href="#" className="text-black-900 font-normal underline">
                    <>
                      https://www.sbc.org.br/documentos-da-sbc/summary/169-templates-para-artigos-e-capitulos-de-livros/878-modelosparapublicaodeartigos
                      <br />
                    </>
                  </a>
                  <span className="text-black-900 font-normal">
                    <>
                      Os autores que tiverem seus artigos aceitos na ERAD-SP 2024 deverão preencher, assinar e enviar
                      via JEMS o contrato de cessão de direitos autorais da SBC, além de se comprometer a sanar os
                      problemas apontados pelos revisores que forem julgados como essenciais pelos coordenadores de
                      programa a fim de terem os artigos publicados nos anais.
                      <br />
                      <br />
                    </>
                  </span>
                </Heading>
              </div>
              <Heading
                size="5xl"
                as="h1"
                className="w-[99%] !text-black-900 tracking-[0.20px] text-center !leading-none"
              >
                <span className="text-black-900 font-normal">
                  <>
                    <br />
                    <br />
                    <br />
                  </>
                </span>
                <span className="text-black-900">Instruções para Preparação da Versão Final do Trabalho</span>
              </Heading>
              <div className="flex flex-row justify-center w-full p-[35px] sm:p-5">
                <Heading
                  size="xl"
                  as="h5"
                  className="w-[97%] !text-black-900 tracking-[0.20px] text-justify !leading-[30px]"
                >
                  <span className="text-black-900 font-normal">
                    <>
                      A versão final do trabalho aceito deve ser elaborada considerando os comentários e sugestões dos
                      revisores. Solicitamos atenção especial às seguintes instruções de formatação:
                      <br />O resumo expandido deve ter no máximo 4 páginas, incluindo referências;
                      <br />
                      Utilize o template em LaTeX da SBC para elaboração de artigos (disponível em: 
                    </>
                  </span>
                  <a href="#" className="text-black-900 font-normal underline">
                    http://www.sbc.org.br/documentos-da-sbc/summary/169-templates-para-artigos-e-capitulos-de-livros/878-modelosparapublicaodeartigos
                  </a>
                  <span className="text-black-900 font-normal">
                    <>
                      );
                      <br />
                      Verifique se o formato/estilo das citações está de acordo com o template da SBC;
                      <br />
                      Insira o e-mail de pelo menos um dos autores antes do resumo de acordo com o template da SBC;
                      <br />
                      Para o PDF do artigo, é solicitada a escrita de resumo e abstract apenas para os textos escritos
                      em português. Artigos em inglês deverão apresentar apenas abstract. Nos dois casos, o resumo e
                      o abstract não devem ultrapassar 10 linhas cada.
                      <br />
                      Não numere as páginas do texto.
                      <br />
                    </>
                  </span>
                  <span className="text-black-900 font-normal">
                    <>
                      <br />
                    </>
                  </span>
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full pb-[74px] md:pb-5">
            <div className="flex flex-col items-center justify-start w-full gap-[33px] p-10 sm:p-5 bg-white-A700">
              <div className="flex flex-col items-start justify-start w-full gap-[33px] md:px-5 max-w-[1049px]">
                <div className="flex flex-col items-center justify-start w-full pb-0.5 gap-[33px]">
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
                <div className="flex flex-col w-full gap-[33px]">
                  <div className="flex flex-col items-center justify-start w-full pb-[34px] gap-[33px] sm:pb-5">
                    <div className="flex flex-row justify-start w-full">
                      <div className="flex flex-row justify-start w-[67%] pt-[3px]">
                        <Heading size="2xl" as="h3" className="!text-gray-900 tracking-[0.10px]">
                          Organização
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-col w-full gap-[30px]">
                      <div className="flex flex-row justify-center w-[23%] md:w-full">
                        <Img
                          src="images/img_logo_1.png"
                          alt="organização_one"
                          className="w-[200px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-row justify-center w-[23%] md:w-full">
                        <Img
                          src="images/img_logo_1.png"
                          alt="logoone_one"
                          className="w-[200px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-row justify-center w-[23%] md:w-full">
                        <Img
                          src="images/img_logo_1.png"
                          alt="logoone_one"
                          className="w-[200px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-row justify-center w-[23%] md:w-full">
                        <Img
                          src="images/img_logo_1.png"
                          alt="logoone_one"
                          className="w-[200px] md:h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
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
                        <Img
                          src="images/img_logo_1.png"
                          alt="logoone_one"
                          className="w-[200px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-row justify-center w-[23%] md:w-full">
                        <Img
                          src="images/img_logo_1.png"
                          alt="logoone_one"
                          className="w-[200px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-row justify-center w-[23%] md:w-full">
                        <Img
                          src="images/img_logo_1.png"
                          alt="logoone_one"
                          className="w-[200px] md:h-auto object-cover"
                        />
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
                        <Img
                          src="images/img_logo_1.png"
                          alt="logoone_one"
                          className="w-[200px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-row justify-center w-[23%] md:w-full">
                        <Img
                          src="images/img_logo_1.png"
                          alt="logoone_one"
                          className="w-[200px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-row justify-center w-[23%] md:w-full">
                        <Img
                          src="images/img_logo_1.png"
                          alt="logoone_one"
                          className="w-[200px] md:h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center ml-0.5 gap-3.5 md:ml-0">
                  <Heading as="p" className="mt-px !text-red-400 tracking-[0.20px]">
                    Patrocinadores
                  </Heading>
                  <Heading size="2xl" as="h4" className="!text-blue_gray-900 tracking-[0.10px]">
                    Bronze
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
                        Contato
                      </Heading>
                      <div className="flex flex-col items-center justify-start w-full gap-2.5 md:px-5 max-w-[306px]">
                        <div className="flex flex-row justify-start items-center w-full gap-2.5">
                          <Img src="images/img_vector.svg" alt="vector_three" className="h-[30px]" />
                          <Heading as="p" className="tracking-[0.20px]">
                            Av. 24 A, 1515 - Bela Vista, Rio Claro - SP
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-start items-center w-[71%] md:w-full gap-2.5">
                          <Img src="images/img_carbon_send_alt.svg" alt="carbonsendalt" className="h-[26px]" />
                          <Heading as="p" className="tracking-[0.20px]">
                            erad.saopaulo@gmail.com
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
