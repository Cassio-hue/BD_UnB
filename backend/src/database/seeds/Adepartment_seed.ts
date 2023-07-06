import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex.raw('DELETE FROM department CASCADE;');

  // Inserts seed entries
  await knex.raw(`
-- Popula a tabela de departamento com dados relativos a Universidade de Brasília
INSERT INTO department (department_code, department_name)
VALUES
(508,'DEPTO CIÊNCIAS DA COMPUTAÇÃO - BRASÍLIA'),
(466,'DEPTO CIÊNCIAS FISIOLÓGICAS - BRASÍLIA'),
(337,'DEPTO CIÊNCIAS INFORMAÇÃO DOCUMENTAÇÃO - BRASÍLIA'),
(467,'DEPTO ECOLOGIA - BRASÍLIA'),
(548,'DEPTO ECONOMIA - BRASÍLIA'),
(422,'DEPTO ENFERMAGEM - BRASÍLIA'),
(437,'DEPTO ENGENHARIA CIVIL E AMBIENTAL - BRASÍLIA'),
(760,'DEPTO ENGENHARIA DE PRODUCAO - BRASÍLIA'),
(443,'DEPTO ENGENHARIA ELETRICA - BRASÍLIA'),
(433,'DEPTO ENGENHARIA FLORESTAL - BRASÍLIA'),
(514,'DEPTO ESTATÍSTICA - BRASÍLIA'),
(552,'DEPTO FILOSOFIA - BRASÍLIA'),
(469,'DEPTO FITOPATOLOGIA - BRASÍLIA'),
(471,'DEPTO GENÉTICA E MORFOLOGIA - BRASÍLIA'),
(555,'DEPTO GEOGRAFIA - BRASÍLIA'),
(539,'DEPTO GEOLOGIA GERAL APLICADA - BRASÍLIA'),
(472,'DEPTO ZOOLOGIA - BRASÍLIA'),
(410,'FACULDADE DE  CIÊNCIAS DA SAÚDE - BRASÍLIA'),
(363,'FACULDADE DE AGRONOMIA E MEDICINA VETERINÁRIA - BRASÍLIA'),
(353,'FACULDADE DE ARQUITETURA E URBANISMO - BRASÍLIA'),
(672,'FACULDADE DE CEILÂNDIA - BRASÍLIA'),
(674,'FACULDADE DE CIÊNCIA DA INFORMAÇÃO - BRASÍLIA'),
(343,'FACULDADE DE COMUNICAÇÃO - BRASÍLIA'),
(370,'FACULDADE DE DIREITO - BRASÍLIA'),
(381,'FACULDADE DE EDUCAÇÃO - BRASÍLIA'),
(393,'FACULDADE DE EDUCAÇÃO FÍSICA - BRASÍLIA'),
(402,'FACULDADE DE MEDICINA - BRASÍLIA'),
(666,'FACULDADE DE PLANALTINA - BRASÍLIA'),
(429,'FACULDADE DE TECNOLOGIA - BRASÍLIA'),
(673,'FACULDADE DO GAMA - BRASÍLIA'),
(323,'FACULDADE ECONOMIA,  ADMINISTRAÇÃO,  CONTABILIDADE E  GEST POL PÚBLICAS - BRASÍLIA'),
(1201,'GRADUAÇÃO EM ADMINISTRAÇÃO - BACHARELADO - BRASÍLIA'),
(288,'HOSP-HOSPITAL UNIVERSITÁRIO DE BRASÍLIA - BRASÍLIA'),
(485,'INSTITUTO DE ARTES - BRASÍLIA'),
(668,'INSTITUTO DE CIÊNCIA POLÍTICA - BRASÍLIA'),
(455,'INSTITUTO DE CIÊNCIAS BIOLÓGICAS - BRASÍLIA'),
(504,'INSTITUTO DE CIÊNCIAS EXATAS - BRASÍLIA');
  `);
}