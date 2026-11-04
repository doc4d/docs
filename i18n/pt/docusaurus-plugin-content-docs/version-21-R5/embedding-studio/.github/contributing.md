---
id: contributing
title: Contribuindo
---

# Contribuindo

Todos os colaboradores são bem-vindos a este projeto na forma de feedback, relatórios de bugs e ainda melhor - pull requests

## Issues

Issues são usadas para rastrear **bugs** e **solicitações de recursos**.

* Antes de relatar um bug ou solicitar um recurso, faça algumas pesquisas para
ver se uma issue semelhante já foi aberta e certifique-se de não estar enviando
um duplicado.

### Bugs

* Descreva os passos para reproduzir
* Mensagem de erro completa, se houver
* Seu código, se relevante

Claro que você pode propor uma correção usando pull request

## Diretrizes para Pull Request

* Abra um único Pull Request para cada assunto.
* Prefira desenvolver em um branch de tópico, não em `main` (feature/nome, fix/nome)
* Atualize a documentação quando aplicável.
* Se estiver relacionado a algum bug, adicione `#<id>` na mensagem do commit ou no pull request
* Teste seu código
* ⚠️ Você precisa assinar o [Acordo de Licença de Contribuição](cla/4DCLA.md) no primeiro pull request

### Propriedades dos métodos

* Métodos devem ser privados, ou seja, definidos como invisíveis por padrão, se não estiverem documentados e não forem acessados externamente.
* O método deve ser definido como preemptivo, se possível.

### Altere apenas os arquivos relevantes

* Certifique-se de que seu PR permaneça focado em um único recurso ou categoria.
* Não altere configurações do projeto ou quaisquer arquivos não relacionados ao assunto em que está trabalhando.
* Não reformate código que você não modificou.
