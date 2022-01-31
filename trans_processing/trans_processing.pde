 import websockets.*;

WebsocketServer ws;

void setup(){
  size(600,200);
  ws= new WebsocketServer(this,8025,"/");
  frameRate(10);
}

void draw(){
  ws.sendMessage("0,"+map(mouseX,0,width,0,1));
}

void webSocketServerEvent(String msg){
 println(msg);
}
