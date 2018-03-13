<h2>Print: 1</h2>
<?
if(func() || func2()){
  echo "1";
}
function func(){
  echo "2";
}
function func2(){
  echo "3";
}
?>
123


<h2>Print: 2</h2>
<?
if(func3() || func4()){
  echo "1";
  }
function func3(){
  echo "2";
  return "true";
}
function func4(){
  echo "3";
}
?>


<h2>Print: 3</h2>
<?
if(func5() || !func6()){
  echo "1";
}
function func5(){
  echo "2";
}
function func6(){
  echo "3";
}
?>


