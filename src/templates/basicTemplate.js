import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import "../styles/vendor/bootstrap/css/bootstrap.min.css"
import "../fonts/font-awesome-4.7.0/css/font-awesome.min.css"
import "../fonts/iconic/css/material-design-iconic-font.min.css"
import "../fonts/linearicons-v1.0.0/icon-font.min.css"
import "../styles/vendor/animate/animate.css"
import "../styles/vendor/css-hamburgers/hamburgers.min.css"
import "../styles/vendor/animsition/css/animsition.min.css"
import "../styles/vendor/select2/select2.min.css"
import "../styles/vendor/daterangepicker/daterangepicker.css"
import "../styles/vendor/slick/slick.css"
import "../styles/vendor/MagnificPopup/magnific-popup.css"
import "../styles/vendor/perfect-scrollbar/perfect-scrollbar.css"


import "../styles/util.css"
import "../styles/main.css"

const basicTemplate = props => {
  const { pageContext } = props
  const { pageContent, links } = pageContext

  return (
    <Layout>
    <div style={{  margin: `1.45rem` }}>
        
      <ul>
        {pageContent.map((data, index) => {
          return <li key={`content_item_${index}`}>{data.item}</li>
        })}
      </ul>
      <ul>
        {
            links.map((item, index) => {
            return (
                <li key={`link_${index}`}>
                <Link to={item.to}>{item.to}</Link>
                </li>
            )
            })
        }
      </ul>
      <h1>sdasdad</h1>        
                <div class="wrap-header-cart">
                    <div class="s-full js-hide-cart"></div>

                    <div class="header-cart flex-col-l p-l-65 p-r-25">
                        <div class="header-cart-title flex-w flex-sb-m p-b-8">
                            <span class="mtext-103 cl2">
                                Your Cart
                            </span>

                            <div class="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
                                <i class="zmdi zmdi-close"></i>
                            </div>
                        </div>

                        <div class="header-cart-content flex-w js-pscroll">
                            <ul class="header-cart-wrapitem w-full">
                                <li class="header-cart-item flex-w flex-t m-b-12">
                                    <div class="header-cart-item-img">
                                        <img data-src="images/item-cart-01.jpg" alt="IMG"/>
                                    </div>

                                    <div class="header-cart-item-txt p-t-8">
                                        <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                            White Shirt Pleat
                                        </a>

                                        <span class="header-cart-item-info">
                                            1 x $19.00
                                        </span>
                                    </div>
                                </li>

                                <li class="header-cart-item flex-w flex-t m-b-12">
                                    <div class="header-cart-item-img">
                                        <img src="images/item-cart-02.jpg" alt="IMG"/>
                                    </div>

                                    <div class="header-cart-item-txt p-t-8">
                                        <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                            Converse All Star
                                        </a>

                                        <span class="header-cart-item-info">
                                            1 x $39.00
                                        </span>
                                    </div>
                                </li>

                                <li class="header-cart-item flex-w flex-t m-b-12">
                                    <div class="header-cart-item-img">
                                        <img src="images/item-cart-03.jpg" alt="IMG"/>
                                    </div>

                                    <div class="header-cart-item-txt p-t-8">
                                        <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                            Nixon Porter Leather
                                        </a>

                                        <span class="header-cart-item-info">
                                            1 x $17.00
                                        </span>
                                    </div>
                                </li>
                            </ul>

                            <div class="w-full">
                                <div class="header-cart-total w-full p-tb-40">
                                    Total: $75.00
                                </div>

                                <div class="header-cart-buttons flex-w w-full">
                                    <a href="shoping-cart.html"
                                        class="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                                        View Cart
                                    </a>

                                    <a href="shoping-cart.html"
                                        class="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                                        Check Out
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg0 m-t-23 p-b-140">
                    <div className="container">
                        <div className="flex-w flex-sb-m p-b-52">
                            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
                                <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
                                    All Products
                                </button>

                                <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">
                                    Women
                                </button>

                                <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".men">
                                    Men
                                </button>

                                <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".bag">
                                    Bag
                                </button>

                                <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".shoes">
                                    Shoes
                                </button>

                                <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".watches">
                                    Watches
                                </button>
                            </div>

                            <div className="flex-w flex-c-m m-tb-10">
                                <div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                                    <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
                                    <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                                    Filter
                                </div>

                                <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                                    <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                                    <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                                    Search
                                </div>
                            </div>
                            
                            
                            <div className="dis-none panel-search w-full p-t-10 p-b-15">
                                <div className="bor8 dis-flex p-l-15">
                                    <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                                        <i className="zmdi zmdi-search"></i>
                                    </button>

                                    <input className="mtext-107 cl2 size-114 plh2 p-r-15" type="text" name="search-product" placeholder="Search"/>
                                </div>	
                            </div>

                            
                            <div className="dis-none panel-filter w-full p-t-10">
                                <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                                    <div className="filter-col1 p-r-15 p-b-27">
                                        <div className="mtext-102 cl2 p-b-15">
                                            Sort By
                                        </div>

                                        <ul>
                                            <li className="p-b-6">
                                                <Link to="#" className="filter-link stext-106 trans-04">
                                                    Default
                                                </Link>
                                            </li>

                                            <li className="p-b-6">
                                                <Link to="#" className="filter-link stext-106 trans-04">
                                                    Popularity
                                                </Link>
                                            </li>

                                            <li className="p-b-6">
                                                <Link to="#" className="filter-link stext-106 trans-04">
                                                    Average rating
                                                </Link>
                                            </li>

                                            <li className="p-b-6">
                                                <Link to="#" className="filter-link stext-106 trans-04 filter-link-active">
                                                    Newness
                                                </Link>
                                            </li>

                                            <li className="p-b-6">
                                                <Link to="#" className="filter-link stext-106 trans-04">
                                                    Price: Low to High
                                                </Link>
                                            </li>

                                            <li className="p-b-6">
                                                <Link to="#" className="filter-link stext-106 trans-04">
                                                    Price: High to Low
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="filter-col2 p-r-15 p-b-27">
                                        <div className="mtext-102 cl2 p-b-15">
                                            Price
                                        </div>

                                        <ul>
                                            <li className="p-b-6">
                                                <Link to="#" className="filter-link stext-106 trans-04 filter-link-active">
                                                    All
                                                </Link>
                                            </li>

                                            <li className="p-b-6">
                                                <Link to="#" className="filter-link stext-106 trans-04">
                                                    $0.00 - $50.00
                                                </Link>
                                            </li>

                                            <li className="p-b-6">
                                                <Link to="#" className="filter-link stext-106 trans-04">
                                                    $50.00 - $100.00
                                                </Link>
                                            </li>

                                            <li className="p-b-6">
                                                <Link to="#" className="filter-link stext-106 trans-04">
                                                    $100.00 - $150.00
                                                </Link>
                                            </li>

                                            <li className="p-b-6">
                                                <Link to="#" className="filter-link stext-106 trans-04">
                                                    $150.00 - $200.00
                                                </Link>
                                            </li>

                                            <li className="p-b-6">
                                                <Link to="#" className="filter-link stext-106 trans-04">
                                                    $200.00+
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="filter-col3 p-r-15 p-b-27">
                                        <div className="mtext-102 cl2 p-b-15">
                                            Color
                                        </div>

                                        <ul>
                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{color: '#222'}}>
                                                    <i className="zmdi zmdi-circle"></i>
                                                </span>

                                                <Link to="#" className="filter-link stext-106 trans-04">
                                                    Black
                                                </Link>
                                            </li>

                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{color: '#4272d7'}}>
                                                    <i className="zmdi zmdi-circle"></i>
                                                </span>

                                                <Link to="#" className="filter-link stext-106 trans-04 filter-link-active">
                                                    Blue
                                                </Link>
                                            </li>

                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{color: '#b3b3b3'}}>
                                                    <i className="zmdi zmdi-circle"></i>
                                                </span>

                                                <Link to="#" className="filter-link stext-106 trans-04">
                                                    Grey
                                                </Link>
                                            </li>

                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{color: "#00ad5f"}}>
                                                    <i className="zmdi zmdi-circle"></i>
                                                </span>

                                                <Link to="#" className="filter-link stext-106 trans-04">
                                                    Green
                                                </Link>
                                            </li>

                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{color: "#fa4251"}}>
                                                    <i className="zmdi zmdi-circle"></i>
                                                </span>

                                                <Link to="#" className="filter-link stext-106 trans-04">
                                                    Red
                                                </Link>
                                            </li>

                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{color:"#aaa"}}>
                                                    <i className="zmdi zmdi-circle-o"></i>
                                                </span>

                                                <Link to="#" className="filter-link stext-106 trans-04">
                                                    White
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="filter-col4 p-b-27">
                                        <div className="mtext-102 cl2 p-b-15">
                                            Tags
                                        </div>

                                        <div className="flex-w p-t-4 m-r--5">
                                            <Link to="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                                Fashion
                                            </Link>

                                            <Link to="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                                Lifestyle
                                            </Link>

                                            <Link to="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                                Denim
                                            </Link>

                                            <Link to="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                                Streetstyle
                                            </Link>

                                            <Link to="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                                Crafts
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row isotope-grid">
                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-01.jpg" alt="IMG-PRODUCT"/>

                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </Link>
                                    </div>

                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Esprit Ruffle Shirt
                                            </Link>

                                            <span className="stext-105 cl3">
                                                $16.64
                                            </span>
                                        </div>

                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <Link to="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="../src/images/icons/icon-heart-01.png" alt="ICON"/>
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-02.jpg" alt="IMG-PRODUCT"/>

                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </Link>
                                    </div>

                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Herschel supply
                                            </Link>

                                            <span className="stext-105 cl3">
                                                $35.31
                                            </span>
                                        </div>

                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <Link to="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
                                
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-03.jpg" alt="IMG-PRODUCT"/>

                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </Link>
                                    </div>

                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Only Check Trouser
                                            </Link>

                                            <span className="stext-105 cl3">
                                                $25.50
                                            </span>
                                        </div>

                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <Link to="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-05.jpg" alt="IMG-PRODUCT"/>

                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </Link>
                                    </div>

                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Front Pocket Jumper
                                            </Link>

                                            <span className="stext-105 cl3">
                                                $34.75
                                            </span>
                                        </div>

                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <Link to="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">
                                
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-06.jpg" alt="IMG-PRODUCT"/>

                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </Link>
                                    </div>

                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Vintage Inspired classNameic 
                                            </Link>

                                            <span className="stext-105 cl3">
                                                $93.20
                                            </span>
                                        </div>

                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <Link to="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-07.jpg" alt="IMG-PRODUCT"/>

                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </Link>
                                    </div>

                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Shirt in Stretch Cotton
                                            </Link>

                                            <span className="stext-105 cl3">
                                                $52.66
                                            </span>
                                        </div>

                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <Link to="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-08.jpg" alt="IMG-PRODUCT"/>

                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </Link>
                                    </div>

                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Pieces Metallic Printed
                                            </Link>

                                            <span className="stext-105 cl3">
                                                $18.96
                                            </span>
                                        </div>

                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <Link to="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item shoes">
                                
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-09.jpg" alt="IMG-PRODUCT"/>

                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </Link>
                                    </div>

                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Converse All Star Hi Plimsolls
                                            </Link>

                                            <span className="stext-105 cl3">
                                                $75.00
                                            </span>
                                        </div>

                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <Link to="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-10.jpg" alt="IMG-PRODUCT"/>

                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </Link>
                                    </div>

                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Femme T-Shirt In Stripe
                                            </Link>

                                            <span className="stext-105 cl3">
                                                $25.85
                                            </span>
                                        </div>

                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <Link to="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
                                
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-11.jpg" alt="IMG-PRODUCT"/>

                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </Link>
                                    </div>

                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Herschel supply 
                                            </Link>

                                            <span className="stext-105 cl3">
                                                $63.16
                                            </span>
                                        </div>

                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <Link to="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
                                
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-12.jpg" alt="IMG-PRODUCT"/>

                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </Link>
                                    </div>

                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Herschel supply
                                            </Link>

                                            <span className="stext-105 cl3">
                                                $63.15
                                            </span>
                                        </div>

                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <Link to="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-13.jpg" alt="IMG-PRODUCT"/>

                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </Link>
                                    </div>

                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                T-Shirt with Sleeve
                                            </Link>

                                            <span className="stext-105 cl3">
                                                $18.49
                                            </span>
                                        </div>

                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <Link to="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-14.jpg" alt="IMG-PRODUCT"/>

                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </Link>
                                    </div>

                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Pretty Little Thing
                                            </Link>

                                            <span className="stext-105 cl3">
                                                $54.79
                                            </span>
                                        </div>

                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <Link to="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">
                                
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-15.jpg" alt="IMG-PRODUCT"/>

                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </Link>
                                    </div>

                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Mini Silver Mesh Watch
                                            </Link>

                                            <span className="stext-105 cl3">
                                                $86.85
                                            </span>
                                        </div>

                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <Link to="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-16.jpg" alt="IMG-PRODUCT"/>

                                        <Link to="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </Link>
                                    </div>

                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Square Neck Back
                                            </Link>

                                            <span className="stext-105 cl3">
                                                $29.64
                                            </span>
                                        </div>

                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <Link to="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="flex-c-m flex-w w-full p-t-45">
                            <Link to="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
                                Load More
                            </Link>
                        </div>
                    </div>
                </div>
    
        
        </div>
    
   </Layout>
  )
}
export default basicTemplate