import React from 'react';
// import Datepicker from './Datepicker';
// import Datepickerend from './Datepickerend';


const Banner = () => {

	return (
		<>
			<section id="banner-section" class="new-Bnner">
				<div class="container">
					<div class="row">
						<div class="col-lg-7 col-md-10 col-sm-12 col-xs-12">
							<h1 class="banner-heading">Airport Travel Plus</h1>
							<p class="banner-para">Multiple Airport Parking / Hotels Choices On
								<br/>All Major UK Airports</p>
							<div class="mt-4">
								<ul class="nav nav-tabs" id="myTab" role="tablist">
									<li class="nav-item" role="presentation">
										<button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#airportparking" type="button" role="tab" aria-controls="airportparking" aria-selected="true">Airport Parking <i class="fa-solid fa-plane"></i></button>
									</li>
									<li class="nav-item" role="presentation">
										<button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#hotelreservation" type="button" role="tab" aria-controls="hotelreservation" aria-selected="false">Hotel <i class="fa-solid fa-hotel"></i></button>
									</li>
									<li class="nav-item" role="presentation">
										<button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#lounges" type="button" role="tab" aria-controls="lounges" aria-selected="false">Lounges <i class="fa-solid fa-couch"></i></button>
									</li>
								</ul>
								<div class="tab-content" id="myTabContent">
									<div class="tab-pane fade show active" id="airportparking" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
										<form class="row g-3 form-div">
											<div class="col-md-4">
												<label for="inputAddress" class="form-label">Airport Parking</label>
												<select id="inputState" class="form-select">
													<option value="">Select Airport </option>
													<option value="">Gatwick Airport </option>
													<option value="">Heathrow Airport </option>
													<option value="">Stansted Airport </option>
													<option value="">Birmingham Airport </option>
													<option value="">Edinburgh Airport </option>
													<option value="">Southampton Airport </option>
													<option value="">Liverpool Airport </option>
													<option value="">Luton Airport </option>
													<option value="">Manchester Airport </option>
												</select> <img src="./assets/images/icons/vector.png" class="img-fluid icon-position" alt="dropdown icon" /> </div>
											<div class="col-md-4">
												<label for="inputEmail4" class="form-label">Drop Off Date</label>
												<input type="text" class="text-field dpd1 form-control" id="startDate" name="dropoffdate" required placeholder="DD/MM/YYYY" /> <img src="./assets/images/icons/calender.png" class="img-fluid date-icon" alt="dropdown icon" /> </div>
													<div class="col-md-4">
														<label for="inputPassword4" class="form-label">Drop Off Time</label>
														<select id="inputState" class="form-select">
															<option value="00:00">00:00</option>
															<option value="00:15">00:15</option>
															<option value="00:30">00:30</option>
															<option value="00:45">00:45</option>
															<option value="01:00">01:00</option>
															<option value="01:15">01:15</option>
															<option value="01:30">01:30</option>
															<option value="01:45">01:45</option>
															<option value="02:00">02:00</option>
															<option value="02:15">02:15</option>
															<option value="02:30">02:30</option>
															<option value="02:45">02:45</option>
															<option value="03:00">03:00</option>
															<option value="03:15">03:15</option>
															<option value="03:30">03:30</option>
															<option value="03:45">03:45</option>
															<option value="04:00">04:00</option>
															<option value="04:15">04:15</option>
															<option value="04:30">04:30</option>
															<option value="04:45">04:45</option>
															<option value="05:00">05:00</option>
															<option value="05:15">05:15</option>
															<option value="05:30">05:30</option>
															<option value="05:45">05:45</option>
															<option value="06:00">06:00</option>
															<option value="06:15">06:15</option>
															<option value="06:30">06:30</option>
															<option value="06:45">06:45</option>
															<option value="07:00">07:00</option>
															<option value="07:15">07:15</option>
															<option value="07:30">07:30</option>
															<option value="07:45">07:45</option>
															<option value="08:00">08:00</option>
															<option value="08:15">08:15</option>
															<option value="08:30">08:30</option>
															<option value="08:45">08:45</option>
															<option selected value="09:00">09:00</option>
															<option value="09:15">09:15</option>
															<option value="09:30">09:30</option>
															<option value="09:45">09:45</option>
															<option value="10:00">10:00</option>
															<option value="10:15">10:15</option>
															<option value="10:30">10:30</option>
															<option value="10:45">10:45</option>
															<option value="11:00">11:00</option>
															<option value="11:15">11:15</option>
															<option value="11:30">11:30</option>
															<option value="11:45">11:45</option>
															<option value="12:00">12:00</option>
															<option value="12:15">12:15</option>
															<option value="12:30">12:30</option>
															<option value="12:45">12:45</option>
															<option value="13:00">13:00</option>
															<option value="13:15">13:15</option>
															<option value="13:30">13:30</option>
															<option value="13:45">13:45</option>
															<option value="14:00">14:00</option>
															<option value="14:15">14:15</option>
															<option value="14:30">14:30</option>
															<option value="14:45">14:45</option>
															<option value="15:00">15:00</option>
															<option value="15:15">15:15</option>
															<option value="15:30">15:30</option>
															<option value="15:45">15:45</option>
															<option value="16:00">16:00</option>
															<option value="16:15">16:15</option>
															<option value="16:30">16:30</option>
															<option value="16:45">16:45</option>
															<option value="17:00">17:00</option>
															<option value="17:15">17:15</option>
															<option value="17:30">17:30</option>
															<option value="17:45">17:45</option>
															<option value="18:00">18:00</option>
															<option value="18:15">18:15</option>
															<option value="18:30">18:30</option>
															<option value="18:45">18:45</option>
															<option value="19:00">19:00</option>
															<option value="19:15">19:15</option>
															<option value="19:30">19:30</option>
															<option value="19:45">19:45</option>
															<option value="20:00">20:00</option>
															<option value="20:15">20:15</option>
															<option value="20:30">20:30</option>
															<option value="20:45">20:45</option>
															<option value="21:00">21:00</option>
															<option value="21:15">21:15</option>
															<option value="21:30">21:30</option>
															<option value="21:45">21:45</option>
															<option value="22:00">22:00</option>
															<option value="22:15">22:15</option>
															<option value="22:30">22:30</option>
															<option value="22:45">22:45</option>
															<option value="23:00">23:00</option>
															<option value="23:15">23:15</option>
															<option value="23:30">23:30</option>
															<option value="23:45">23:45</option>
														</select> <img src="./assets/images/icons/clock.png" class="img-fluid time-icon" alt="dropdown icon" /> </div>
													<div class="col-md-4">
														<label for="inputEmail4" class="form-label">Pick Up Date</label>
														<input type="text" class="text-field dpd1 form-control" id="endDate" name="pickupdate" required placeholder="DD/MM/YYYY" /> <img src="./assets/images/icons/calender.png" class="img-fluid date-icon2" alt="dropdown icon" /> </div>
															<div class="col-md-4">
																<label for="inputPassword4" class="form-label">Drop Off Time</label>
																<select id="inputState" class="form-select">
																	<option value="00:00">00:00</option>
																	<option value="00:15">00:15</option>
																	<option value="00:30">00:30</option>
																	<option value="00:45">00:45</option>
																	<option value="01:00">01:00</option>
																	<option value="01:15">01:15</option>
																	<option value="01:30">01:30</option>
																	<option value="01:45">01:45</option>
																	<option value="02:00">02:00</option>
																	<option value="02:15">02:15</option>
																	<option value="02:30">02:30</option>
																	<option value="02:45">02:45</option>
																	<option value="03:00">03:00</option>
																	<option value="03:15">03:15</option>
																	<option value="03:30">03:30</option>
																	<option value="03:45">03:45</option>
																	<option value="04:00">04:00</option>
																	<option value="04:15">04:15</option>
																	<option value="04:30">04:30</option>
																	<option value="04:45">04:45</option>
																	<option value="05:00">05:00</option>
																	<option value="05:15">05:15</option>
																	<option value="05:30">05:30</option>
																	<option value="05:45">05:45</option>
																	<option value="06:00">06:00</option>
																	<option value="06:15">06:15</option>
																	<option value="06:30">06:30</option>
																	<option value="06:45">06:45</option>
																	<option value="07:00">07:00</option>
																	<option value="07:15">07:15</option>
																	<option value="07:30">07:30</option>
																	<option value="07:45">07:45</option>
																	<option value="08:00">08:00</option>
																	<option value="08:15">08:15</option>
																	<option value="08:30">08:30</option>
																	<option value="08:45">08:45</option>
																	<option selected value="09:00">09:00</option>
																	<option value="09:15">09:15</option>
																	<option value="09:30">09:30</option>
																	<option value="09:45">09:45</option>
																	<option value="10:00">10:00</option>
																	<option value="10:15">10:15</option>
																	<option value="10:30">10:30</option>
																	<option value="10:45">10:45</option>
																	<option value="11:00">11:00</option>
																	<option value="11:15">11:15</option>
																	<option value="11:30">11:30</option>
																	<option value="11:45">11:45</option>
																	<option value="12:00">12:00</option>
																	<option value="12:15">12:15</option>
																	<option value="12:30">12:30</option>
																	<option value="12:45">12:45</option>
																	<option value="13:00">13:00</option>
																	<option value="13:15">13:15</option>
																	<option value="13:30">13:30</option>
																	<option value="13:45">13:45</option>
																	<option value="14:00">14:00</option>
																	<option value="14:15">14:15</option>
																	<option value="14:30">14:30</option>
																	<option value="14:45">14:45</option>
																	<option value="15:00">15:00</option>
																	<option value="15:15">15:15</option>
																	<option value="15:30">15:30</option>
																	<option value="15:45">15:45</option>
																	<option value="16:00">16:00</option>
																	<option value="16:15">16:15</option>
																	<option value="16:30">16:30</option>
																	<option value="16:45">16:45</option>
																	<option value="17:00">17:00</option>
																	<option value="17:15">17:15</option>
																	<option value="17:30">17:30</option>
																	<option value="17:45">17:45</option>
																	<option value="18:00">18:00</option>
																	<option value="18:15">18:15</option>
																	<option value="18:30">18:30</option>
																	<option value="18:45">18:45</option>
																	<option value="19:00">19:00</option>
																	<option value="19:15">19:15</option>
																	<option value="19:30">19:30</option>
																	<option value="19:45">19:45</option>
																	<option value="20:00">20:00</option>
																	<option value="20:15">20:15</option>
																	<option value="20:30">20:30</option>
																	<option value="20:45">20:45</option>
																	<option value="21:00">21:00</option>
																	<option value="21:15">21:15</option>
																	<option value="21:30">21:30</option>
																	<option value="21:45">21:45</option>
																	<option value="22:00">22:00</option>
																	<option value="22:15">22:15</option>
																	<option value="22:30">22:30</option>
																	<option value="22:45">22:45</option>
																	<option value="23:00">23:00</option>
																	<option value="23:15">23:15</option>
																	<option value="23:30">23:30</option>
																	<option value="23:45">23:45</option>
																</select> <img src="./assets/images/icons/clock.png" class="img-fluid time-icon2" alt="dropdown icon" /> </div>
															<div class="col-md-4">
																<label for="inputZip" class="form-label">Promo Code</label>
																<input type="text" class="form-control" id="inputZip" /> </div>
															<div class="col-12">
																<button type="submit" class="btn btn-primary d-block m-auto">Search Parking</button>
															</div>
														</form>
													</div>
													<div class="tab-pane fade" id="hotelreservation" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
														<form class="row g-3 form-div">
															<div class="col-md-4">
																<label for="inputAddress" class="form-label">Your Destination</label>
																<input type="text" class="form-control" placeholder="Hotel, City, Region" /> </div>
															<div class="col-md-4">
																<label for="inputEmail4" class="form-label">Drop Off Date</label>
																<input type="text" class="text-field dpd1 form-control" id="hotelcheckin" name="hotelcheckin" required="" placeholder="DD/MM/YYYY" date="1663831340346" /> <img src="./assets/images/icons/calender.png" class="img-fluid date-icon" alt="dropdown icon" /> </div>
																	<div class="col-md-4">
																		<label for="inputEmail4" class="form-label">Pick Up Date</label>
																		<input type="text" class="text-field dpd2 form-control" name="hotelcheckout" id="hotelcheckout" required="" placeholder="DD/MM/YYYY" date="1664522540346" /> <img src="./assets/images/icons/calender.png" class="img-fluid date-icon2" alt="dropdown icon" /> </div>
																			<div class="col-md-4">
																				<label for="inputEmail4" class="form-label">Adults</label>
																				<input type="number" class="form-control" required placeholder="No of Adults" /> </div>
																			<div class="col-md-4">
																				<label for="inputEmail4" class="form-label">Children</label>
																				<input type="number" class="form-control" required placeholder="No of Children" /> </div>
																			<div class="col-md-4">
																				<label for="inputZip" class="form-label">Promo Code</label>
																				<input type="text" class="form-control" id="inputZip" /> </div>
																			<div class="col-12">
																				<button type="submit" class="btn btn-primary d-block m-auto">Search Hotel</button>
																			</div>
																		</form>
																	</div>
																	<div class="tab-pane fade" id="lounges" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
																		<form class="row g-3 form-div">
																			<div class="col-md-4">
																				<label for="inputAddress" class="form-label">Select Location</label>
																				<select id="inputState" class="form-select">
																					<option selected value="09:00">UK</option>
																					<option value="09:00">International</option>
																				</select> <img src="./assets/images/icons/clock.png" class="img-fluid time-icon2" alt="dropdown icon" /> </div>
																			<div class="col-md-4">
																				<label for="inputEmail4" class="form-label">Lounge City</label>
																				<select id="inputState" class="form-select">
																					<option value="">Select Airport </option>
																					<option value="">Gatwick Airport </option>
																					<option value="">Heathrow Airport </option>
																					<option value="">Stansted Airport </option>
																					<option value="">Birmingham Airport </option>
																					<option value="">Edinburgh Airport </option>
																					<option value="">Southampton Airport </option>
																					<option value="">Liverpool Airport </option>
																					<option value="">Luton Airport </option>
																					<option value="">Manchester Airport </option>
																				</select> <img src="./assets/images/icons/clock.png" class="img-fluid time-icon2" alt="dropdown icon" /> </div>
																			<div class="col-md-4">
																				<label for="inputEmail4" class="form-label">Pick Up Date</label>
																				<input type="text" class="text-field dpd2 form-control" name="LounesDate" id="LounesDate" required="" placeholder="DD/MM/YYYY" date="1664522540346" /> <img src="./assets/images/icons/calender.png" class="img-fluid date-icon2" alt="dropdown icon" /> </div>
																					<div class="col-md-2">
																						<label for="inputEmail4" class="form-label">Time of Visit</label>
																						<select id="inputState" class="form-select">
																							<option value="00:00">00:00</option>
																							<option value="00:15">00:15</option>
																							<option value="00:30">00:30</option>
																							<option value="00:45">00:45</option>
																							<option value="01:00">01:00</option>
																							<option value="01:15">01:15</option>
																							<option value="01:30">01:30</option>
																							<option value="01:45">01:45</option>
																							<option value="02:00">02:00</option>
																							<option value="02:15">02:15</option>
																							<option value="02:30">02:30</option>
																							<option value="02:45">02:45</option>
																							<option value="03:00">03:00</option>
																							<option value="03:15">03:15</option>
																							<option value="03:30">03:30</option>
																							<option value="03:45">03:45</option>
																							<option value="04:00">04:00</option>
																							<option value="04:15">04:15</option>
																							<option value="04:30">04:30</option>
																							<option value="04:45">04:45</option>
																							<option value="05:00">05:00</option>
																							<option value="05:15">05:15</option>
																							<option value="05:30">05:30</option>
																							<option value="05:45">05:45</option>
																							<option value="06:00">06:00</option>
																							<option value="06:15">06:15</option>
																							<option value="06:30">06:30</option>
																							<option value="06:45">06:45</option>
																							<option value="07:00">07:00</option>
																							<option value="07:15">07:15</option>
																							<option value="07:30">07:30</option>
																							<option value="07:45">07:45</option>
																							<option value="08:00">08:00</option>
																							<option value="08:15">08:15</option>
																							<option value="08:30">08:30</option>
																							<option value="08:45">08:45</option>
																							<option selected value="09:00">09:00</option>
																							<option value="09:15">09:15</option>
																							<option value="09:30">09:30</option>
																							<option value="09:45">09:45</option>
																							<option value="10:00">10:00</option>
																							<option value="10:15">10:15</option>
																							<option value="10:30">10:30</option>
																							<option value="10:45">10:45</option>
																							<option value="11:00">11:00</option>
																							<option value="11:15">11:15</option>
																							<option value="11:30">11:30</option>
																							<option value="11:45">11:45</option>
																							<option value="12:00">12:00</option>
																							<option value="12:15">12:15</option>
																							<option value="12:30">12:30</option>
																							<option value="12:45">12:45</option>
																							<option value="13:00">13:00</option>
																							<option value="13:15">13:15</option>
																							<option value="13:30">13:30</option>
																							<option value="13:45">13:45</option>
																							<option value="14:00">14:00</option>
																							<option value="14:15">14:15</option>
																							<option value="14:30">14:30</option>
																							<option value="14:45">14:45</option>
																							<option value="15:00">15:00</option>
																							<option value="15:15">15:15</option>
																							<option value="15:30">15:30</option>
																							<option value="15:45">15:45</option>
																							<option value="16:00">16:00</option>
																							<option value="16:15">16:15</option>
																							<option value="16:30">16:30</option>
																							<option value="16:45">16:45</option>
																							<option value="17:00">17:00</option>
																							<option value="17:15">17:15</option>
																							<option value="17:30">17:30</option>
																							<option value="17:45">17:45</option>
																							<option value="18:00">18:00</option>
																							<option value="18:15">18:15</option>
																							<option value="18:30">18:30</option>
																							<option value="18:45">18:45</option>
																							<option value="19:00">19:00</option>
																							<option value="19:15">19:15</option>
																							<option value="19:30">19:30</option>
																							<option value="19:45">19:45</option>
																							<option value="20:00">20:00</option>
																							<option value="20:15">20:15</option>
																							<option value="20:30">20:30</option>
																							<option value="20:45">20:45</option>
																							<option value="21:00">21:00</option>
																							<option value="21:15">21:15</option>
																							<option value="21:30">21:30</option>
																							<option value="21:45">21:45</option>
																							<option value="22:00">22:00</option>
																							<option value="22:15">22:15</option>
																							<option value="22:30">22:30</option>
																							<option value="22:45">22:45</option>
																							<option value="23:00">23:00</option>
																							<option value="23:15">23:15</option>
																							<option value="23:30">23:30</option>
																							<option value="23:45">23:45</option>
																						</select> <img src="./assets/images/icons/clock.png" class="img-fluid time-icon2" alt="dropdown icon" /> </div>
																					<div class="col-md-2">
																						<label for="inputEmail4" class="form-label">Adults</label>
																						<input type="number" class="form-control" required placeholder="No of Adults" /> </div>
																					<div class="col-md-2">
																						<label for="inputEmail4" class="form-label">Children</label>
																						<input type="number" class="form-control" required placeholder="No of Children" /> </div>
																					<div class="col-md-3">
																						<label for="inputEmail4" class="form-label">Lounge City</label>
																						<select id="inputState" class="form-select">
																							<option value="">0</option>
																							<option value="">1 </option>
																							<option value="">2</option>
																							<option value="">3</option>
																							<option value="">4</option>
																							<option value="">5</option>
																							<option value="">6</option>
																							<option value="">7</option>
																							<option value="">8</option>
																						</select> <img src="./assets/images/icons/clock.png" class="img-fluid time-icon2" alt="dropdown icon" /> </div>
																					<div class="col-md-3">
																						<label for="inputZip" class="form-label">Promo Code</label>
																						<input type="text" class="form-control" id="inputZip" /> </div>
																					<div class="col-12">
																						<button type="submit" class="btn btn-primary d-block m-auto">Search Lounges</button>
																					</div>
																				</form>
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

						export default Banner;