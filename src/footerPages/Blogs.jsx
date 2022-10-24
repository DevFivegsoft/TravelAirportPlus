import React from 'react'

const Blog = () => {
    return (
        <>
            <section id="banner-section" class="inner-image">
                <div class="container">
                    <div class="row banner-size">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="div-content">
                                <h3 class="banner-heading-black">Blogs</h3>
                                <p class="banner-para-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="section-heading">
                            <h2 class="sec-main">Blogs</h2>  </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div class="card mb-3"> <img src="./assets/images/blog/blog-1.jpg" class="card-img-top" alt="Blog Image" />
                                <h5 class="card-title">WHY KEEP AIRPORT PARKING AT TOP OF YOUR TRAVEL PLANS?</h5>
                                <div class="card-body"> <span class="card-text"><strong>Date: </strong>9-27-2022</span> <a href="blog-detail" class="btn btn-blog">Read More <i class="fa-solid fa-arrow-right"></i></a> </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div class="card mb-3"> <img src="./assets/images/blog/blog-2.jpg" class="card-img-top" alt="Blog Image" />
                                <h5 class="card-title">WHY KEEP AIRPORT PARKING AT TOP OF YOUR TRAVEL PLANS?</h5>
                                <div class="card-body"> <span class="card-text"><strong>Date: </strong>9-27-2022</span> <a href="blog-detail" class="btn btn-blog">Read More <i class="fa-solid fa-arrow-right"></i></a> </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div class="card mb-3"> <img src="./assets/images/blog/blog-3.jpg" class="card-img-top" alt="Blog Image" />
                                <h5 class="card-title">WHY KEEP AIRPORT PARKING AT TOP OF YOUR TRAVEL PLANS?</h5>
                                <div class="card-body"> <span class="card-text"><strong>Date: </strong>9-27-2022</span> <a href="blog-detail" class="btn btn-blog">Read More <i class="fa-solid fa-arrow-right"></i></a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog