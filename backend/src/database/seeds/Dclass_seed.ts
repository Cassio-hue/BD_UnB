import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex.raw(`DELETE FROM class CASCADE;`);

  // Inserts seed entries
  await knex.raw(`
  -- Popula a tabela de turmas com dados relativos a Universidade de Brasília

  INSERT INTO class (turma, period, schedule, local, discipline_id, teacher_id)
  VALUES
  (1, '2023.1', '24N34', 'PAT AT 029', 'CIC0002', 1),
  (1, '2023.1' , '35T23', 'PJC BT 068', 'CIC0003', 4),
  (4, '2023.1' , '3N12 4N34', 'ICC ANF.19', 'CIC0007', 21),
  (1, '2023.1' , '35T45', 'PAT AT 021' , 'CIC0097', 10),
  (1, '2023.1' , '24T23', 'PJC BT 053', 'CIC0135', 34);
  `);
}
