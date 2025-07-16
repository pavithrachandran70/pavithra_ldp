<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ page isELIgnored="false" %>
<html>
<head><title>Login</title></head>
<body>
    <h2>Login Page</h2>
      <c:if test="${param.error != null}">
            <p style="color:red;">Invalid username or password!</p>
        </c:if>
    <form action="${pageContext.request.contextPath}/login" method="post">
        Username: <input type="text" name="username"/> <br/>
        Password: <input type="password" name="password"/> <br/>
        <input type="submit" value="Login"/>
    </form>
</body>
</html>
