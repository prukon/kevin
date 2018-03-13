<?php include_once $_SERVER['DOCUMENT_ROOT'] .
    '/chapter9(2)/includes/helpers.inc.php'; ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Авторизация</title>
  </head>
  <body>
    <h1>Авторизация</h1>
    <p>Пожалуйста введите логин и пароль</p>
    <?php if (isset($loginError)): ?>
      <p><?php htmlout($loginError); ?></p>
    <?php endif; ?>
    <form action="" method="post">
      <div>
        <label for="email">Email: <input type="text" name="email"
            id="email"></label>
      </div>
      <div>
        <label for="password">Пароль: <input type="password"
            name="password" id="password"></label>
      </div>
      <div>
        <input type="hidden" name="action" value="login">
        <input type="submit" value="Войти">
      </div>
    </form>
    <p><a href="/chapter9(2)/admin/">Назад</a></p>
  </body>
</html>
