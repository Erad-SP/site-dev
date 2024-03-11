import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Heading, Img, Text } from "../../components";

export default function ChamadadeTrabalhosPage() {
  return (
    <>
      <Helmet>
        <title>Site ERAD-SP 2024</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full pb-[29px] sm:pb-5 bg-red-700 shadow-sm">
          <div className="flex flex-col items-end justify-start w-full gap-px md:px-5 max-w-[1343px]">
            <header className="flex justify-center items-center w-full">
              <div className="flex flex-row md:flex-col justify-between items-center w-[78%] mr-[149px] md:gap-10 md:mr-5">
                <div className="flex flex-col items-center justify-start p-1.5">
                  <Img src="images/img_vector.svg" alt="vector_one" className="h-[11px]" />
                  <Img
                    src="images/img_logo_sbc_1.png"
                    alt="logosbcone_one"
                    className="w-[52%] md:h-auto sm:w-full object-cover"
                  />
                </div>
                <div className="flex flex-row justify-start w-[64%] md:w-full py-[13px]">
                  <div className="flex flex-row md:flex-col justify-start items-center w-[98%] md:gap-5">
                    <div className="flex flex-row justify-start w-[28%] md:w-full">
                      <Heading size="2xl" as="h4" className="tracking-[0.10px]">
                        ERAD-SP 2024
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-center w-[22%] md:w-full">
                      <div className="flex flex-row justify-center w-[72%] p-0.5">
                      <Link to="/">
                        <Heading as="p" className="mt-0.5 tracking-[0.20px] text-center" scrollOffset={1900}>
                          Programação
                        </Heading>
                      </Link>
                      </div>
                    </div>
                    <Link to="/inscricao">
                      <Heading as="p" className="tracking-[0.20px] text-center">
                        Inscrições
                      </Heading>
                    </Link>
                    <div className="flex flex-row w-[32%] md:w-full ml-3.5 gap-px md:ml-0">
                      <div className="flex flex-row justify-center w-[50%]">
                        <div className="flex flex-row justify-center w-full p-[3px]">
                          <Heading as="p" className="tracking-[0.20px] text-center">
                            Submissões
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-[50%]">
                        <div className="flex flex-row justify-center w-full p-[3px]">
                        <a href="https://youtube.com/@eradsp/" className="ml-[15px] md:ml-0">
                          <Heading as="p" className="tracking-[0.20px] text-center">
                            ASSISTA
                          </Heading>
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="flex flex-col items-start justify-start w-[92%] md:w-full mr-[9px] p-5">
              <div className="flex flex-row md:flex-col justify-between items-center w-[97%] md:w-full ml-5 md:gap-10 md:ml-0">
                <div className="flex flex-row justify-center p-[11px]">
                  <Heading size="5xl" as="h1" className="tracking-[0.20px] text-center">
                    Chamada de Trabalhos
                  </Heading>
                </div>
                <div className="flex flex-row justify-center">
                  <Img
                    src="images/img_logoeradvetorizado.png"
                    alt="logoeradvetoriz"
                    className="w-[83%] md:h-auto sm:w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-center ml-5 md:ml-0">
                <Heading size="3xl" as="h2" className="w-[92%] tracking-[0.20px]">
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
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-[15px] gap-[42px] p-5 md:px-5 max-w-[1431px]">
          <div className="flex flex-row justify-center w-[96%] md:w-full p-[33px] sm:p-5">
            <Heading
              size="md"
              as="h2"
              className="w-[97%] !text-black-900 tracking-[0.20px] text-justify !leading-[50px]"
            >
              <span className="text-black-900 text-xl font-normal">
                <>
                  A ERAD-SP é um evento anual promovido pela Sociedade Brasileira de Computação (SBC) e pela Comissão
                  Regional de Alto Desempenho de São Paulo (CRAD-SP), sendo que neste ano comemoramos a sua 15a edição..
                  O público-alvo é composto por alunos de graduação e de pós-graduação, profissionais e
                  professores/pesquisadores que atuam direta ou indiretamente em processamento de alto desempenho,
                  arquitetura de computadores, sistemas paralelos e distribuídos bem como em suas aplicações em áreas
                  como biologia, física, matemática, química, engenharias, medicina, ciência da computação, agricultura,
                  mercado financeiro, óleo e gás, entre outras.
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
          <div className="flex flex-col items-center justify-start w-[88%] md:w-full gap-[50px]">
            <Heading size="5xl" as="h2" className="!text-black-900 tracking-[0.20px] text-center">
              Tópicos de Interesse
            </Heading>
            <Text size="md" as="p" className="!text-black-900 tracking-[0.20px] text-justify !leading-[30px]">
              <>
                Por meio desta chamada de trabalhos, alunos de pós-graduação e de iniciação científica são convidados a
                submeter os resultados de seus trabalhos de pesquisa científica ou tecnológica. Por sua vez, a
                organização da ERAD-SP através de seu comitê de programa, analisará os trabalhos recebidos e fornecerá
                um ‘feedback’ aos autores, buscando assim contribuir para o bom andamento de suas atividades acadêmicas.
                <br />A ERAD-SP convida autores de trabalhos em nível de pós-graduação e de iniciação científica
                relacionados à computação de alto desempenho, arquitetura de computadores, sistemas distribuídos,
                processamento paralelo e suas aplicações.
              </>
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-[91px] gap-11 md:px-5 max-w-[1144px]">
          <Heading size="3xl" as="h2" className="!text-black-900 tracking-[0.20px] text-center">
            Tópicos de interesse incluem, mas não se limitam à:
          </Heading>
          <div className="flex flex-row md:flex-col w-full gap-[29px]">
            <div className="flex flex-col items-center justify-center w-[49%] sm:w-full p-8 sm:p-5 bg-red-700 rounded-[90px]">
              <Text
                size="md"
                as="p"
                className="mt-1 mb-[3px] !text-white-A700 tracking-[0.20px] text-justify !leading-[30px]"
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
            </div>
            <div className="flex flex-col items-center justify-start w-[49%] sm:w-full p-8 my-[5px] md:mt-0 sm:p-5 bg-red-700 rounded-[90px]">
              <Text size="md" as="p" className="my-1.5 !text-white-A700 tracking-[0.20px] text-justify !leading-[30px]">
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
        <div className="flex flex-col items-center justify-start w-full mt-[54px] gap-[33px] md:px-5 max-w-[1323px]">
          <Heading size="5xl" as="h2" className="!text-black-900 tracking-[0.20px] text-center">
            Submissão de Trabalhos
          </Heading>
          <div className="flex flex-row justify-center w-full p-[33px] sm:p-5">
            <Heading
              size="xl"
              as="h2"
              className="w-[97%] !text-black-900 tracking-[0.20px] text-justify !leading-[30px]"
            >
              <span className="text-black-900 font-normal">
                A submissão deverá ser feita por meio do sistema JEMS (colocar link). Os autores são convidados a
                submeter resumos expandidos com até 4 páginas, usando o formato da SBC. O modelo pode ser obtido em: 
              </span>
              <a href="https://www.sbc.org.br/documentos-da-sbc/summary/169-templates-para-artigos-e-capitulos-de-livros/878-modelosparapublicaodeartigos" className="text-black-900 font-normal underline">
                <>
                  https://www.sbc.org.br/documentos-da-sbc/summary/169-templates-para-artigos-e-capitulos-de-livros/878-modelosparapublicaodeartigos
                  <br />
                </>
              </a>
              <span className="text-black-900 font-normal">
                <>
                  Os autores que tiverem seus artigos aceitos na ERAD-SP 2024 deverão preencher, assinar e enviar via
                  JEMS o contrato de cessão de direitos autorais da SBC, além de se comprometer a sanar os problemas
                  apontados pelos revisores que forem julgados como essenciais pelos coordenadores de programa a fim de
                  terem os artigos publicados nos anais.
                  <br />
                  <br />
                </>
              </span>
            </Heading>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-[19px] gap-[37px] md:px-5 max-w-[1323px]">
          <Heading size="5xl" as="h2" className="w-[99%] !text-black-900 tracking-[0.20px] text-center !leading-none">
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
              as="h2"
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
              <a href="http://www.sbc.org.br/documentos-da-sbc/summary/169-templates-para-artigos-e-capitulos-de-livros/878-modelosparapublicaodeartigos" className="text-black-900 font-normal underline">
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
                  Para o PDF do artigo, é solicitada a escrita de resumo e abstract apenas para os textos escritos em
                  português. Artigos em inglês deverão apresentar apenas abstract. Nos dois casos, o resumo e
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
        <div className="flex flex-col items-center justify-start w-full mt-[73px]">
          <div className="flex flex-col items-center justify-start w-full gap-10 p-10 sm:p-5">
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
