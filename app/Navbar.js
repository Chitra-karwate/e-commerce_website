import Link from 'next/link';
const Navbar=()=>{
	return(
		<>
			<div class="row">
				<nav class="navbar bg-dark text-white" data-bs-theme="dark" >
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFQg-a06HyjCkdZIZc4CGawQocLSEhQPbAg&usqp=CAU" alt="logo" class="img-thumbnail" width="150px"/>
					<img src="https://icon-library.com/images/location-icon-white-png/location-icon-white-png-20.jpg" alt="logo" class="img-thumbnail" width="50px"/>
					<div class="col-6">
						<form class="d-flex" role="search">
		  					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
		  					<button class="btn btn-outline-success" type="submit">Search</button>
						</form>
					</div>
					<a href="/login">Login</a>
					<a href="/About">About us</a>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_pYUE1g2MHOK7zYL5Uc9iQd8y4HKsbqQaX0RG2jU2YhI1apkiRSyJEza5MKU07Gkbg8M&usqp=CAU" alt="logo" class="img-thumbnail" width="70px" height="30px"/>
					<a href="/cart">Cart</a>
											
				</nav>
			</div>
		</>			 
	)
}
export default Navbar;



