
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta charset="utf-8">
</head>
<body>
    
<script>
     if(func() || func2()){
      console.log("1");
    }
    function func(){
      console.log("2");
    }
    function func2(){
      console.log("3");  
    }
</script>
<script> console.log("\n") </script>
<script>
        if(func() || !func2()){
      console.log("1");
    }
    function func(){
      console.log("2");
      return true;
    }
    function func2(){
      console.log("3");  
    }
</script>
<script> console.log("\n") </script>
<script>
      if(func() || !func2()){
      console.log("1");
    }
    function func(){
      console.log("2");
    }
    function func2(){
      console.log("3");  
    }
</script>
</body>
</html>