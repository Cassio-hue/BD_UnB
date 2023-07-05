import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex.raw(`DELETE FROM discipline CASCADE;`);

  // Inserts seed entries
  await knex.raw(`
  -- Popula a tabela de disciplinas com dados relativos a Universidade de Brasília

  INSERT INTO discipline (code, discipline_name, department_code, teacher_id)
  VALUES 
  ('CIC0002', 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO' , 508),
  ('CIC0003', 'INTRODUÇÃO AOS SISTEMAS COMPUTACIONAIS' , 508),
  ('CIC0004', 'ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES' , 508),
  ('CIC0005', 'FORMAÇÃO DOCENTE EM COMPUTAÇÃO' , 508),
  ('CIC0007', 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO' , 508),
  ('CIC0087', 'TOPICOS AVANCADOS EM COMPUTADORES' , 508),
  ('CIC0090', 'ESTRUTURAS DE DADOS' , 508),
  ('CIC0093', 'LINGUAGENS DE PROGRAMACAO' , 508),
  ('CIC0095', 'TEORIA DA COMPUTACAO' , 508),
  ('CIC0097', 'BANCOS DE DADOS' , 508),
  ('CIC0099', 'ORGANIZAÇÃO E ARQUITETURA DE COMPUTADORES' , 508),
  ('CIC0101', 'SISTEMAS DE INFORMACAO' , 508),
  ('CIC0104', 'SOFTWARE BASICO' , 508),
  ('CIC0105', 'ENGENHARIA DE SOFTWARE' , 508),
  ('CIC0108', 'SISTEMAS OPERACIONAIS' , 508),
  ('CIC0124', 'REDES DE COMPUTADORES' , 508),
  ('CIC0135', 'INTRODUCAO A INTELIGENCIA ARTIFICIAL' , 508),
  ('CIC0142', 'INFORMATICA E SOCIEDADE' , 508),
  ('CIC0152', 'INTRODUCAO A MICROINFORMATICA' , 508),
  ('CIC0158', 'INFORMATICA APLICADA A EDUCACAO' , 508),
  ('CIC0161', 'AUTÔMATOS E COMPUTABILIDADE' , 508),
  ('CIC0169', 'PROGRAMAÇÃO COMPETITIVA' , 508),
  ('CIC0176', 'INTRODUCAO AO PROCESSAMENTO DE IMAGENS' , 508),
  ('CIC0177', 'ARQUITETURA DE PROCESSADORES DIGITAIS' , 508),
  ('CIC0182', 'LÓGICA COMPUTACIONAL 1' , 508),
  ('CIC0186', 'SISTEMAS DIGITAIS INTEGRADOS' , 508),
  ('CIC0188', 'INTRODUÇÃO À ENGENHARIA DE COMPUTAÇÃO' , 508),
  ('CIC0189', 'PROJETO E ANÁLISE DE ALGORITMOS' , 508),
  ('CIC0191', 'INTRODUÇÃO AO DESENVOLVIMENTO DE JOGOS' , 508),
  ('CIC0197', 'TECNICAS DE PROGRAMAÇÃO 1' , 508),
  ('CIC0198', 'TECNICAS DE PROGRAMAÇÃO 2' , 508),
  ('CIC0199', 'TEORIA E APLICAÇÃO DE GRAFOS' , 508),
  ('CIC0200', 'METODOLOGIA CIENTÍFICA' , 508),
  ('CIC0201', 'SEGURANÇA COMPUTACIONAL' , 508),
  ('CIC0202', 'PROGRAMAÇÃO CONCORRENTE' , 508),
  ('CIC0203', 'COMPUTAÇÃO EXPERIMENTAL' , 508),
  ('CIC0204', 'COMPILADORES' , 508),
  ('CIC0205', 'FUNDAMENTOS DE SISTEMAS OPERACIONAIS' , 508),
  ('CIC0206', 'MÉTODOS DE PESQUISA NA LICENCIATURA EM COMPUTAÇÃO' , 508),
  ('CIC0207', 'PROJETO INTERDISCIPLINAR DE LICENCIATURA EM COMPUTAÇÃO' , 508),
  ('CIC0208', 'PRODUÇÃO DE MATERIAL DIDÁTICO' , 508),
  ('CIC0209', 'SUPERVISÃO DE PRODUÇÃO DE MATERIAL DIDÁTICO' , 508),
  ('CIC0212', 'SUPERVISÃO DE PRÁTICA PEDAGÓGICA EM COMPUTAÇÃO 1' , 508),
  ('CIC0213', 'SUPERVISÃO DE PRÁTICA PEDAGÓGICA EM COMPUTAÇÃO 2' , 508),
  ('CIC0218', 'SUPERVISÃO DE ESTÁGIO EM LICENCIATURA EM COMPUTAÇÃO 1' , 508),
  ('CIC0220', 'SUPERVISÃO DE ESTÁGIO  EM LICENCIATURA EM COMPUTAÇÃO 2' , 508),
  ('CIC0222', 'SUPERVISÃO DE ESTÁGIO  EM LICENCIATURA EM COMPUTAÇÃO 3' , 508),
  ('CIC0225', 'INTRODUÇÃO A SISTEMAS OPERACIONAIS' , 508),
  ('CIC0226', 'DESENVOLVIMENTO DE APLICATIVOS' , 508),
  ('CIC0229', 'CIRCUITOS LÓGICOS' , 508),
  ('CIC0231', 'LABORATÓRIO DE CIRCUITOS LÓGICOS' , 508),
  ('CIC0234', 'MÉTODOS DE PROGRAMAÇÃO' , 508),
  ('CIC0235', 'TELEINFORMÁTICA E REDES 1' , 508),
  ('CIC0236', 'TELEINFORMÁTICA E REDES 2' , 508),
  ('CIC0247', 'INTRODUÇÃO AO AMBIENTE UNIVERSITÁRIO NA COMPUTAÇÃO' , 508),
  ('CIC0248', 'SISTEMAS DE TEMPO REAL' , 508),
  ('CIC0256', 'PRÁTICA EXTENSIONISTA EM COMPUTAÇÃO A' , 508),
  ('CIC0258', 'TÓPICOS ESPECIAIS EM PROGRAMAÇÃO COMPETITIVA' , 508);
  `);
}
