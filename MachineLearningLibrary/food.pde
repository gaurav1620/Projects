class food{
  float x,y;
  food(){
    x = random(width -10);
    y = random(height -10);
    //show();
  }
  
  void show(){
    fill(0,200,0);
    ellipse(x,y,10,10);
  }
  
}
