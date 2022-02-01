# hydra-arduino

![Teste POT](/pot-test.gif)

Durante uma oficina de Hydra, surgiu a pergunta: - Como pegar dados do Arduino e passar como parâmetro no Hydra? 🤔

Estou documentando neste repositório as minhas tentativas em criar uma interface entre o arduino e a engine de síntese de vídeo [Hydra-Synth](https://github.com/ojack/hydra-synth).

### Gambiarra I [Em andamento]
* Arduino publica leitura porta(A0) na serial.
* Script Python publica valor do serial via websocket
* Javascript recebe o valor trata e armazena na variável vc [valor controle]

## Instruções mastigadas
  1. Grave o arquivo arduino-sketch.ino no arduino (Irá ler somente a porta A0)
   
1. Com o arduino espetado no computador execute o serial2wbsckt.py 

  ```
  python serial2wbsckt.py
  ```

1. Abra o index.html.
 

## Importante

* Neste exemplo a porta lida no Arduino é somente a **A0**.
* O Script serial2wbsckt.oy requer o Python 3 instalado e as libs _PySerial, websockets_
* A variável que recebe o valor do Arduino é a _var vc_. 
* As instruções para o _hydra_ estão em _script-hydra.js_.
* No exemplo, atribuí a variável ao offset no OSC.
  ```
  osc(10, 0.1, ()=>vc[0]).out()
  ```
* No repositório há um sketch do [processing](https://processing.org/), originalmente desenvolvido pelo [@micuat](https://github.com/micuat), para testar o a comunicação via websocket (Porta 8025)

  ## Referências
  * <https://github.com/ojack/hydra-synth>
  * <https://github.com/ojack/hydra/issues/28>
