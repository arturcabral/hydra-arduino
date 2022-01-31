# hydra-arduino

![Teste POT](/pot-test.gif)

Durante uma oficina de Hydra, surgiu a pergunta: - Como pegar dados do Arduino e passar como parâmetro no Hydra?

Estou documentando neste repositório as minhas tentativas em criar uma interface entre o arduino e a engine de síntese de vídeo Hydra-Synth.

### Solução I [Gambiarra]
* Arduino publica leitura porta(A0) na serial.
* Script Python publica valor do serial via websocket
* Javascript recebe o valor trata e armazena na variável vc [valor controle]

## Instruções mastigadas
  1. Grave o arquivo arduino-sketch.ino no arduino (Irá ler somente a porta A0)
   
   ```
   git clone https://github.com/eduardoboucas/eduardoboucas.github.io.git eduardoboucas.com
   cd eduardoboucas.com
   ```

1. Com o arduino espetado no computador execute o serial2wbsckt.py 

  ```
  python serial2wbsckt.py
  ```

1. Abra o index.html.
 

## Importante

* Neste exemplo a porta lida no Arduino é somente a **A0**.
* O Script serial2wbsckt.oy requer o Python 3 instalado e as libs _PySerial, websockets_
* A variável que recebe o valor do Arduino é a _var vc_. 
* No exemplo atribui ao offset no OSC.
    ```
  osc(10, 0.1, ()=>vc[0]).out()
  ```
  
