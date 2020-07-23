function nav(){
    return(
        <header>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Clinic Care</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        
        <li class="nav-item active">
          <a class="nav-link" href="#">Appointment<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html">Home</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link " href="doctor.html">Doctors</a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="#">Department</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">Contacts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">About</a>
          </li>
      </ul>
      
    </div>
  </nav>
  <img src="banner3.jpg" class="d-block w-100" alt="banner3.jpg" />
</header>
    )
}