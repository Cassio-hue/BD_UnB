import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex.raw(`
   DELETE FROM teacher CASCADE;
  `);

  // Inserts seed entries
  await knex.raw(`
  -- Popula a tabela de professores com dados relativos a Universidade de Brasília

  INSERT INTO teacher (name, department_code)
  VALUES
  ('THIAGO DE PAULO FALEIROS', 508),
  ('JORGE CARLOS LUCERO', 508),
  ('DANIEL DE PAULA PORTO', 508),
  ('MARCUS VINICIUS LAMAR', 508),
  ('VINICIUS RUELA PEREIRA BORGES', 508),
  ('ALINE BARROS DE SOUSA', 508),
  ('GUILHERME NOVAES RAMOS', 508),
  ('CARLA DENISE CASTANHO', 508),
  ('FRANK NED SANTA CRUZ DE OLIVEIRA', 508),
  ('PEDRO GARCIA FREITAS', 508),
  ('GABRIEL DE CARVALHO FERREIRA', 508),
  ('LUIS PAULO FAINA GARCIA', 508),
  ('EDISON ISHIKAWA', 508),
  ('GIOVANNI ALMEIDA SANTOS', 508),
  ('FABRICIO ATAIDES BRAZ', 508),
  ('DANIEL SUNDFELD LIMA', 508),
  ('ROSE YURI SHIMIZU', 508),
  ('NILTON CORREIA DA SILVA', 508),
  ('MARIA DE FATIMA RAMOS BRANDAO', 508),
  ('CAMILO CHANG DOREA', 508),
  ('ROBERTA BARBOSA OLIVEIRA', 508),
  ('ALETEIA PATRICIA FAVACHO DE ARAUJO VON PAUMGARTTEN', 508),
  ('EDUARDO ADILIO PELINSON ALCHIERI', 508),
  ('MARCOS FAGUNDES CAETANO', 508),
  ('VANDER RAMOS ALVES', 508),
  ('MARCELO LADEIRA', 508),
  ('FLAVIO DE BARROS VIDAL', 508),
  ('FERNANDA LIMA', 508),
  ('BRUNO LUIGGI MACCHIAVELLO ESPINOZA', 508),
  ('FERNANDO ANTONIO DE ARAUJO CHACON DE ALBUQUERQUE', 508),
  ('GENAINA NUNES RODRIGUES', 508),
  ('GABRIEL SIQUEIRA RODRIGUES', 508),
  ('PRISCILA AMERICA SOLIS MENDEZ BARRETO', 508),
  ('LI WEIGANG', 508),
  ('RODRIGO BONIFACIO DE ALMEIDA', 508),
  ('RICARDO LOPES DE QUEIROZ', 508),
  ('JOAO JOSE COSTA GONDIM', 508),
  ('EDNA DIAS CANEDO', 508),
  ('ALBA CRISTINA MAGALHAES ALVES DE MELO', 508),
  ('LIVIA SANTOS BRISOLLA', 508),
  ('LETICIA LOPES LEITE', 508),
  ('MARCELO ANTONIO MAROTTA', 508),
  ('CARLA MARIA CHAGAS E CAVALCANTE KOIKE', 508);  
  `);
}
