let p = document.createElement("div");

var nav = `
<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="./index.html"><img id="logo" src="logos/JoshuaTullyLogo2.png" alt="JoshuaTullyLogo"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="websiteInfo.html">Website Info</a>
          <!-- <a class="nav-link" href="https://github.com/jtully97">GitHub</a> -->
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            My Work
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="articles.html">Articles</a> 
            <a class="dropdown-item" href="tutorials.html">Tutorials</a>
            <a class="dropdown-item" href="classLessons.html">Class Lessons</a>
            <a class="dropdown-item" href="objects.html">Object Talk</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="personal.html">Personal</a>
          <!-- <a class="nav-link" href="https://www.linkedin.com/in/joshua-tully/">LinkedIn</a> -->
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0" method="GET" action="http://www.google.com/search">      
        <input class="form-control mr-sm-2" type="text" name="q" placeholder="Search Google" aria-label="Go!">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
`;

p.innerHTML = nav;


document.body.appendChild(p);