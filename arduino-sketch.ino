float valor;

void setup() {
  Serial.begin(9600);

}

void loop() {
  valor = map(analogRead(A0),0, 1023,0,100);
  Serial.print("0,");
  Serial.println(valor/100.0);
  delay(2);

}
