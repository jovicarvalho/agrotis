# Desafio Técnico 🗓️ - Front End Pleno - Agrotis Agroinformática Ltda
<p  align="center">
  <img src="https://github.com/user-attachments/assets/a297342b-0889-4390-b2a3-49dd73884bde" alt="image" />

</p>
<p align="center"><strong> 👨‍💻Dev: João Vitor Nunes Carvalho</strong></p>



## Descrição
Esse projeto foi desenvolvido como parte do teste técnico para a posição de **Front End Pleno** na **Agrotis Agroinformática Ltda**. O desafio consistia na criação de um formulário para cadastro de agendamentos e uma tela de listagem, que fosse funcional e interativa. 

### Tecnologias Utilizadas 💻:
- **React** com **Vite** para otimização do build e rápido desenvolvimento.
- **Material-UI** para a construção de wrappers de componentes de interface (inputs, ícones, tabelas, etc.).
- **React Hook Form** integrado com **Zod** para validação de formulários.
- **Context API** para gerenciamento de estado global.
- **Styled-Components** para estilização.
- **TypeScript** para garantir a tipagem estática e maior segurança no desenvolvimento.

### Requisitos Atendidos ✅:
- Criação de um formulário funcional que alimenta uma lista de agendamentos com dados validados.
- Desenvolvimento de uma tela de listagem que exibe os dados salvos no formulário.
- Implementação de navegação entre o formulário e a tela de listagem.
- Consumo de endpoints para popular os dados de seleção (laboratórios e propriedades).
- Hook personalizado tanto para Context quanto para acessar promises dos Services.
- Utilização de Context para o gerenciamento do estado global dos formulários.
- Armazenamento local dos dados para persistência no navegador.
- Utilização de Toasty para confirmaçaõ

### Funcionalidades:
- O **formulário de cadastro** coleta informações sobre o agendamento, incluindo nome, data inicial e final, propriedades, laboratório e observações.
- Ao clicar em **salvar**, os dados são armazenados na lista local e consumidos pela tela de **listagem**, onde podem ser editados ou deletados.
- Utilização de **Modal** e **Popover** para interações adicionais, como edição e visualização das observações.
### Projeto
![image](https://github.com/user-attachments/assets/0f69f3d2-7aa3-4aeb-945d-55ed14739ba7)

### Estrutura do Projeto:
![image](https://github.com/user-attachments/assets/4ecd2dda-87ec-45ca-bf41-22a968f2c9ac)
