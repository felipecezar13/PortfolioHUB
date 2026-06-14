# Guia de Contribuição e Segurança

Obrigado por contribuir com o PortfolioHUB. Este documento apresenta as práticas adotadas para manter o projeto seguro, organizado e alinhado aos padrões de desenvolvimento estabelecidos.

## 🔒 Regras de Segurança da Branch Principal

A branch **main** representa a versão oficial publicada do projeto e, por isso, possui mecanismos de proteção para evitar alterações indevidas.

* Não são permitidos envios diretos (push) para a branch **main**.
* Todas as modificações devem ser submetidas por meio de um **Pull Request (PR)**.
* Antes da integração, cada Pull Request deve passar por uma etapa de revisão e aprovação.
* Alterações somente serão incorporadas após a verificação de conformidade com os padrões do projeto.

## 🌱 Processo de Desenvolvimento

Para desenvolver novas funcionalidades ou corrigir problemas, siga o fluxo abaixo:

1. Atualize sua cópia local do repositório:

   ```bash
   git pull origin main
   ```

2. Crie uma nova branch baseada na main:

   * Funcionalidades:

     ```bash
     git checkout -b feature/nova-funcionalidade
     ```
   * Correções:

     ```bash
     git checkout -b fix/correcao-bug
     ```

3. Realize as alterações necessárias e faça os commits.

4. Envie sua branch para o GitHub:

   ```bash
   git push origin nome-da-branch
   ```

5. Abra um Pull Request descrevendo claramente as modificações realizadas e os objetivos da implementação.

## 💡 Boas Práticas de Código

* Utilize HTML semântico para manter a acessibilidade e a organização do projeto.
* Preserve o padrão de variáveis globais CSS definidas no `:root`, garantindo consistência visual.
* Certifique-se de que todas as alterações continuem compatíveis com dispositivos móveis e diferentes tamanhos de tela.
* Sempre que possível, valide soluções e boas práticas utilizando ferramentas de apoio, como o Google Gemini ou outras plataformas de análise de código.

## 👨‍💻 Controle de Acesso

As permissões do repositório são administradas pelo GitHub através do gerenciamento de colaboradores.

* Apenas usuários autorizados possuem acesso de escrita.
* A aprovação e o merge de Pull Requests são restritos aos mantenedores do projeto.
* Alterações em produção devem seguir obrigatoriamente o fluxo de revisão estabelecido.

Seguindo essas orientações, contribuímos para um ambiente de desenvolvimento mais seguro, organizado e eficiente para todos os participantes.
