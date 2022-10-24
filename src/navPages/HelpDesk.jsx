import React from 'react'

const HelpDesk = () => {
  return (
    <>
    <section id="banner-section" class="inner-image">
		<div class="container">
			<div class="row banner-size">
				<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<div class="div-content">
						<h3 class="banner-heading-black">Help Desk</h3>
						<p class="banner-para-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section id="help-desk">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
					<ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
						<li class="nav-item" role="presentation">
							<button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#OpenTicket" type="button" role="tab" aria-controls="OpenTicket" aria-selected="true">Open New Support Ticket</button>
						</li>
						<li class="nav-item" role="presentation">
							<button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#trackticket" type="button" role="tab" aria-controls="trackticket" aria-selected="false">Track Existing Support Ticket</button>
						</li>
					</ul> 
					<div class="tab-content" id="myTabContent">
						<div class="tab-pane fade show active" id="OpenTicket" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
							<div class="row justify-content-center">
								<div class="col-lg-6 col-md-10 col-sm-12 col-xs-12">
									<form class="row g-3 py-3">
										<div class="col-md-12">
											<label class="form-label">Booking Reference No.</label>
											<input type="text" class="form-control" required /> </div>
										<div class="col-md-12">
											<label class="form-label">Full Name.</label>
											<input type="text" class="form-control" required /> </div>
										<div class="col-md-12">
											<label class="form-label">Email</label>
											<input type="email" class="form-control" required /> </div>
										<div class="col-md-12">
											<label class="form-label">Contact No.</label>
											<input type="text" class="form-control" required /> </div>
										<div class="col-md-12">
											<label class="form-label">Support Department</label>
											<select class="form-select">
												<option selected>Select From the Following</option>
												<option>Option 1</option>
												<option>Option 2</option>
											</select> <img src="./assets/images/icons/vector.png" class="img-fluid help-icon" alt="dropdown icon" /> 
										</div>
										<div class="col-md-12">
											<label class="form-label">Ticket Priority</label>
											<select class="form-select">
												<option selected>Select From the Following</option>
												<option>Option 1</option>
												<option>Option 2</option>
											</select> <img src="./assets/images/icons/vector.png" class="img-fluid help-icon" alt="dropdown icon" /> 
										</div>
										<div class="col-md-12">
											<label class="form-label">Ticket Subject</label>
											<input type="text" class="form-control" required /> 
										</div>
										<div class="col-md-12">
											<label class="form-label">Ticket Subject</label>
											<textarea class="form-control" rows="3"></textarea>
										</div>
										<div class="col-12">
											<div class="form-check">
												<input class="form-check-input" type="checkbox" />
												<label class="form-check-label"> I agree to the Airport Travel Plus LTD <strong>Support Policy & Terms of Service</strong> </label>
											</div>
										</div>
										<div class="col-md-12 bg-file">
											<input class="" type="file" placeholder="Upload Document" /> </div>
										<div class="col-12 mt-4">
											<button type="submit" class="btn btn-primary d-block m-auto">Create New Support Ticket</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div class="tab-pane fade" id="trackticket" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
							<div class="row justify-content-center">
								<div class="col-lg-6 col-md-10 col-sm-12 col-xs-12">
									<form class="row g-3">
										<div class="col-md-12">
											<label class="form-label">Email.</label>
											<input type="email" class="form-control" required /> </div>
										<div class="col-md-12">
											<label class="form-label">Ticket Refrence ID.</label>
											<input type="email" class="form-control" required /> </div>
										<div class="col-12 mt-4">
											<button type="submit" class="btn btn-primary d-block m-auto">Search</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    
    </>
  )
}

export default HelpDesk