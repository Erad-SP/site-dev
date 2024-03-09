import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text, Button } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
  {
    rowcategoria: "Estudante associado à SBC com anuidade vigente",
    faixadeinscri: "R$ 20,00",
    faixadeinscri1: "R$ 25,00",
  },
  {
    rowcategoria:
      "Estudante associado à SBC com anuidade vencendo em até 90 dias (COMBO: inscrição no evento + renovação da associação à SBC)",
    faixadeinscri: "R$ 20,00",
    faixadeinscri1: "R$ 25,00",
    rowanuidade: "R$ 31,00",
  },
  {
    rowcategoria:
      "Estudante não associado ou com associação não vigente à SBC (COMBO: inscrição no evento + associação à SBC)",
    faixadeinscri: "R$ 20,00",
    faixadeinscri1: "R$ 25,00",
    rowanuidade: "R$ 31,00",
  },
  {
    rowcategoria: "Estudante não associado à SBC (Somente inscrição no evento)",
    faixadeinscri: "R$ 53,00",
    faixadeinscri1: "R$ 59,00",
  },
  {
    rowcategoria: "Estudante de pós-graduação associado à SBC com anuidade vigente",
    faixadeinscri: "R$ 40,00",
    faixadeinscri1: "R$ 50,00",
  },
  {
    rowcategoria:
      "Estudante de pós-graduação associado à SBC com anuidade vencendo em até 90 dias (COMBO: inscrição no evento + renovação da associação à SBC)",
    faixadeinscri: "R$ 40,00",
    faixadeinscri1: "R$ 50,00",
    rowanuidade: "R$ 125,00",
  },
  {
    rowcategoria:
      "Estudante de pós-graduação não associado ou com associação não vigente à SBC (COMBO: inscrição no evente + associação à SBC) ",
    faixadeinscri: "R$ 40,00",
    faixadeinscri1: "R$ 50,00",
    rowanuidade: "R$ 125,00",
  },
  {
    rowcategoria: "Estudante de pós-graduação não associado à SBC (Somente inscrição no evento)",
    faixadeinscri: "R$ 169,00",
    faixadeinscri1: "R$ 180,00",
  },
  {
    rowcategoria: "Professor de educação básica associado à SBC com anuidade vie",
    faixadeinscri: "R$ 40,00",
    faixadeinscri1: "R$ 50,00",
  },
  {
    rowcategoria:
      "Professor de educação básica associado à SBC com anuidade vencendo em até 90 dias (COMBO: inscrição no evento + renovação da associação à SBC)",
    faixadeinscri: "R$ 40,00",
    faixadeinscri1: "R$ 50,00",
    rowanuidade: "R$ 125,00",
  },
  {
    rowcategoria:
      "Professor de educação básica não associado ou com associação não vigente à SBC (COMBO: inscrição no evento + associação à SBC)",
    faixadeinscri: "R$ 40,00",
    faixadeinscri1: "R$ 50,00",
    rowanuidade: "R$ 125,00",
  },
  {
    rowcategoria: "Professor de educação básica não associado à SBC (Somente inscrição no evento)",
    faixadeinscri: "R$ 169,00",
    faixadeinscri1: "R$ 180,00",
  },
  {
    rowcategoria: "Profissional associado à SBC com anuidade vigente",
    faixadeinscri: "R$ 60,00",
    faixadeinscri1: "R$ 80,00",
  },
  {
    rowcategoria:
      "Profissional associado à SBC com anuidade vencendo em até 90 dias (COMBO: inscrição no evento + renovação da associação à SBC)",
    faixadeinscri: "R$ 60,00",
    faixadeinscri1: "R$ 80,00",
    rowanuidade: "R$ 356,00",
  },
  {
    rowcategoria:
      "Profissional não associado ou com associação não vigente à SBC (COMBO: inscrição no evento + associação à SBC)",
    faixadeinscri: "R$ 60,00",
    faixadeinscri1: "R$ 80,00",
    rowanuidade: "R$ 356,00",
  },
  {
    rowcategoria: "Profissional não associado à SBC (Somente inscrição no evento)",
    faixadeinscri: "R$ 442,00",
    faixadeinscri1: "R$ 444,00",
  },
];

export default function InscrioPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowcategoria", {
        cell: (info) => (
          <div className="flex flex-row justify-center border-gray-700 border-t border-l border-solid">
            <Text as="p" className="w-[99%] !text-black-900 !font-inter">
              {info?.getValue?.()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center">
            <Button
              color="white_A700_0c"
              size="sm"
              variant="fill"
              shape="square"
              className="w-full sm:px-5 font-inter font-semibold border-white-A700 border-t border-l border-solid"
            >
              CATEGORIA
            </Button>
          </div>
        ),
        meta: { width: "269px" },
      }),
      tableColumnHelper.accessor("faixadeinscri", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <Button size="sm" shape="square" className="w-full sm:px-5 font-inter">
              {info?.getValue?.()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Heading size="xs" as="h2" className="pl-3 py-2.5 !text-black-900 !font-inter text-center !leading-[130%]">
            <>
              1ª Faixa de Inscrição
              <br />
              (11/03/2024 - 22/04/2024)
            </>
          </Heading>
        ),
        meta: { width: "187px" },
      }),
      tableColumnHelper.accessor("faixadeinscri1", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <Button size="sm" shape="square" className="w-full sm:px-5 font-inter">
              {info?.getValue?.()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Heading size="xs" as="h3" className="pl-3 py-2.5 !text-black-900 !font-inter text-center !leading-[130%]">
            2ª Faixa de Inscrição (23/04/2024 - 18/05/2024
          </Heading>
        ),
        meta: { width: "187px" },
      }),
      tableColumnHelper.accessor("rowanuidade", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <div className="h-[52px] w-full border-gray-700 border-t border-l border-solid" />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center">
            <Button
              color="white_A700_0c"
              size="sm"
              variant="fill"
              shape="square"
              className="w-full sm:px-5 font-inter font-semibold border-gray-700 border-t border-l border-solid"
            >
              Anuidade
            </Button>
          </div>
        ),
        meta: { width: "152px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Site ERAD-SP 2024</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <div className="h-[800px] w-full pb-[130px] md:pb-5 bg-red-700 relative">
          <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
            <Img src="images/img_background_sec.svg" alt="backgroundsec" className="h-[400px]" />
            <div className="flex flex-row justify-center w-full mt-[-254px] md:px-5 max-w-[1288px]">
              <div className="flex flex-col items-center justify-start w-full gap-[59px]">
                <Heading size="5xl" as="h1" className="tracking-[0.20px] text-center">
                  Inscrições ERAD-SP 2024
                </Heading>
                <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
                  <Heading size="3xl" as="h2" className="w-[30%] mb-[87px] tracking-[0.20px] text-center">
                    <>
                      1ª faixa de inscrições:
                      <br />
                      11/03 - 22/04
                      <br />
                      2ª faixa de inscrições:
                      <br />
                      23/04 - 18/05
                    </>
                  </Heading>
                  <div className="flex flex-col items-start justify-start w-[58%] md:w-full mt-[134px] md:mt-0">
                    <Heading size="xl" as="h3" className="tracking-[0.20px]">
                      Promoções
                    </Heading>
                    <Heading size="4xl" as="h4" className="mt-[13px] tracking-[0.20px]">
                      Inscreva-se pelo COMBO SBC
                    </Heading>
                    <Heading size="lg" as="h5" className="mt-2 tracking-[0.20px]">
                      Pague menos adquirindo:
                    </Heading>
                    <div className="flex flex-row md:flex-col justify-center items-start mt-1.5 md:gap-5">
                      <Button
                        color="white_A700"
                        size="2xl"
                        variant="fill"
                        className="mt-[34px] md:mt-0 sm:px-5 !text-black-900 tracking-[0.20px] font-semibold leading-5 min-w-[142px] rounded-[36px]"
                      >
                        Inscrição no Evento
                      </Button>
                      <Text
                        size="lg"
                        as="p"
                        className="mt-0.5 mb-1.5 ml-7 md:ml-0 md:mt-0 sm:ml-5 !text-white-A700 tracking-[0.20px] text-center"
                      >
                        +
                      </Text>
                      <Button
                        color="white_A700"
                        size="2xl"
                        variant="fill"
                        className="mt-[34px] ml-7 md:ml-0 md:mt-0 sm:ml-5 sm:px-5 !text-black-900 tracking-[0.20px] font-semibold leading-5 min-w-[142px] rounded-[36px]"
                      >
                        Associação à SBC
                      </Button>
                      <Text
                        size="lg"
                        as="p"
                        className="ml-[19px] md:ml-0 !text-white-A700 tracking-[0.20px] text-center"
                      >
                        =
                      </Text>
                      <Heading
                        size="lg"
                        as="h6"
                        className="w-[36%] mt-[31px] ml-[19px] md:ml-0 md:mt-0 tracking-[0.20px]"
                      >
                        Aproveite os benefícios de Associado e continue obtendo descontos nos outros eventos da SBC
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img
            src="images/img_logoeradvetorizado.png"
            alt="logoeradvetoriz"
            className="h-[296px] w-[27%] sm:w-full right-[1%] top-[8%] m-auto object-cover absolute"
          />
          <header className="flex flex-col w-[71%] left-[4%] top-[1%] m-auto absolute">
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
            <Img src="images/img_sbc_2.png" alt="sbctwo_one" className="w-[11%] md:h-auto sm:w-full object-cover" />
          </header>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-2 p-[54px] md:p-5">
            <div className="flex flex-col items-start justify-start w-[91%] md:w-full mt-6 gap-[43px]">
              <Heading size="2xl" as="h2" className="!text-black-900 tracking-[0.20px]">
                <span className="text-black-900">
                  Para realizar sua inscrição na ERAD-SP 2024, acesse o formulário de inscrição on-line da SBC neste{" "}
                </span>
                <a href="#" className="text-light_blue_800 underline">
                  link
                </a>
                <span className="text-black-900">.</span>
              </Heading>
              <Heading size="4xl" as="h3" className="ml-[39px] md:ml-0 sm:ml-5 !text-blue_gray-900 tracking-[0.20px]">
                Inscrição Promocional
              </Heading>
            </div>
            <Text size="md" as="p" className="w-[79%] tracking-[0.20px] text-justify">
              <span className="text-black-900">
                <>
                  Participantes não associados à SBC ou associados com anuidade próxima do vencimento podem se associar
                  ou renovar a associação junto com a inscrição, escolhendo as categorias COMBO com um desconto no valor
                  da inscrição. As categorias COMBO são a opção mais vantajosa para os não associados à SBC, pois os
                  valores de inscrições são menores do que as categorias sem combo e incluem a associação à SBC.
                  <br />
                  <br />
                  Associar-se à SBC é uma forma de tornar a SBC ainda mais forte para representar a nossa área de
                  atuação junto aos diversos setores. Que tal fazer parte da nossa comunidade? Confira alguns benefícios
                  exclusivos de associado:
                  <br />
                  Acesso à rede sem fio Eduroam
                  <br />
                  Acesso às listas de discussão exclusivas para associados da SBC, com mais de 8 mil inscritos
                  <br />
                  Desconto em inscrições nos mais de 40 eventos realizados anualmente pela SBC
                  <br />
                  Valor de inscrição diferenciado no POSCOMP
                  <br />
                  Acesso aos estudos realizados pela SBC e destinados a órgãos públicos ou privados, expressando
                  posições políticas da sociedade
                  <br />
                  <br />
                  Acesse o{" "}
                </>
              </span>
              <a href="#" className="text-light_blue_800 underline">
                site da SBC
              </a>
              <span className="text-black-900">e veja porquê ser associado.</span>
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-3.5 pt-[15px] gap-[45px] px-[15px]">
          <Heading size="5xl" as="h2" className="!text-black-900 tracking-[0.20px] text-center">
            Valores de Inscrição
          </Heading>
          <ReactTable
            size="xs"
            bodyProps={{ className: "md:flex-col" }}
            headerProps={{
              className: "border-gray-700 border-t border-l border-solid bg-white-A700_0c md:flex-col md:gap-5",
            }}
            rowDataProps={{ className: "md:flex-col md:gap-5" }}
            className="w-[795px] bg-black-900"
            columns={tableColumns}
            data={tableData}
          />
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-[21px] gap-[75px] md:px-5 max-w-[1050px]">
          <div className="flex flex-row justify-center w-full mt-16">
            <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[7px]">
              <Heading size="4xl" as="h2" className="!text-blue_gray-900 tracking-[0.20px]">
                Formas de Pagamento
              </Heading>
              <Text size="md" as="p" className="tracking-[0.20px] text-justify">
                <span className="text-black-900">
                  <>
                    O pagamento de inscrições poderá ser realizado por meio de boleto bancário, cartão de crédito,
                    débito em conta do Banco do Brasil, nota de empenho ou faturamento.
                    <br />
                    <br />
                    As inscrições podem ser feitas até o último dia do evento, porém os pagamentos por débito e boleto
                    serão aceitos até o dia 15/05/2024.
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-bold">
                  <>
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-semibold">
                  <>
                    Inscrições por nota de empenho e faturamento
                    <br />
                  </>
                </span>
                <span className="text-black-900">
                  O participante deverá acessar o sistema de inscrições e realizar a inscrição, selecionando a forma de
                  pagamento &quot;nota de empenho&quot; ou &quot;faturamento&quot; e clicar em &quot;pagar&quot;. O
                  sistema fornecerá as informações necessárias para que a inscrição seja confirmada.
                </span>
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-full gap-[7px]">
            <Heading size="4xl" as="h2" className="mt-[3px] !text-blue_gray-900 tracking-[0.20px]">
              Inscrição para autores
            </Heading>
            <Text size="md" as="p" className="mb-0.5 !text-black-900 tracking-[0.20px] text-justify">
              Os autores de trabalhos aprovados na ERAD-SP 2024 devem realizar o registro no evento até o dia
              22/04/2024.
            </Text>
          </div>
          <div className="flex flex-row justify-center w-full mb-[86px]">
            <div className="flex flex-col items-start justify-start w-full gap-[11px]">
              <Heading size="4xl" as="h2" className="!text-blue_gray-900 tracking-[0.20px]">
                Política de cancelamento
              </Heading>
              <Text size="md" as="p" className="!text-black-900 tracking-[0.20px] text-justify">
                Até dia 09/05/2024 pode-se fazer uma devolução de 80% do valor pago pela inscrição na ERAD-SP 2024. Após
                esta data não haverá devolução de qualquer valor pago. A política se aplica tanto para o cancelamento da
                inscrição, quanto para o cancelamento de qualquer atividade adicional. Para solicitar o cancelamento,
                enviar a solicitação para faturamento@sbc.org.br.
              </Text>
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
                        <Img src="images/img_vector.svg" alt="vector_one" className="h-[30px]" />
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
    </>
  );
}
