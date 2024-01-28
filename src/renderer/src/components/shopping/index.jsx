import React from 'react'

const ShoppingCart = () => {
  return (
    <section className="h-100" style={{ padding: 0 }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="">
            <div className="card">
              <div className="card-body ">
                <div
                  className="d-flex product_shopping_card justify-content-between align-items-center"
                  style={{ margin: '10px 0' }}
                >
                  <div className="mainInfos d-flex justify-content-between align-items-center">
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className=" fw-normal mb-2">باذنجان</p>
                    </div>
                    <div className=" d-flex">
                      <button
                        className="btn btn-link px-2"
                        onClick={(e) =>
                          e.target.parentNode.querySelector('input[type=number]').stepDown()
                        }
                      >
                        -
                      </button>

                      <input
                        id="form1"
                        min="0"
                        name="quantity"
                        value="2"
                        type="number"
                        className="form-control form-control-sm"
                      />

                      <button
                        className="btn btn-link px-2"
                        onClick={(e) =>
                          e.target.parentNode.querySelector('input[type=number]').stepUp()
                        }
                      >
                        +
                      </button>
                    </div>
                    {/* <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1"> */}
                    <span
                      className=""
                      style={{
                        fontSize: '12px',
                        // padding: "10px 30px",
                        display: 'block'
                        // width: "100%",
                      }}
                    >
                      499.00
                    </span>
                    {/* </div> */}
                    <div className=" col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-danger">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-trash"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 7l16 0" />
                          <path d="M10 11l0 6" />
                          <path d="M14 11l0 6" />
                          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="additionalInfos">
                    <div className="exts">
                      <span>حجم كبير (+20جنية)</span>
                      <span>- صلصة (+20جنية)</span>
                      <span>- باربيكيو (+20جنية)</span>
                      <span>- خصار (+20جنية)</span>
                    </div>
                    <div className="exts">
                      <span>رجاء زيادة الطحين قليلا وعندم إضافة السلطة</span>
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex product_shopping_card justify-content-between align-items-center"
                  style={{ margin: '10px 0' }}
                >
                  <div className="mainInfos d-flex justify-content-between align-items-center">
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className=" fw-normal mb-2">باذنجان</p>
                    </div>
                    <div className=" d-flex">
                      <button
                        className="btn btn-link px-2"
                        onClick={(e) =>
                          e.target.parentNode.querySelector('input[type=number]').stepDown()
                        }
                      >
                        -
                      </button>

                      <input
                        id="form1"
                        min="0"
                        name="quantity"
                        value="2"
                        type="number"
                        className="form-control form-control-sm"
                      />

                      <button
                        className="btn btn-link px-2"
                        onClick={(e) =>
                          e.target.parentNode.querySelector('input[type=number]').stepUp()
                        }
                      >
                        +
                      </button>
                    </div>
                    {/* <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1"> */}
                    <span
                      className=""
                      style={{
                        fontSize: '12px',
                        // padding: "10px 30px",
                        display: 'block'
                        // width: "100%",
                      }}
                    >
                      499.00
                    </span>
                    {/* </div> */}
                    <div className=" col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-danger">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-trash"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 7l16 0" />
                          <path d="M10 11l0 6" />
                          <path d="M14 11l0 6" />
                          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="additionalInfos">
                    <div className="exts">
                      <span>حجم كبير (+20جنية)</span>
                      <span>- صلصة (+20جنية)</span>
                      <span>- باربيكيو (+20جنية)</span>
                      <span>- خصار (+20جنية)</span>
                    </div>
                    <div className="exts">
                      <textarea
                        rows={2}
                        value={'  رجاء زيادة الطحين قليلا وعندم إضافة السلطة'}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex product_shopping_card justify-content-between align-items-center"
                  style={{ margin: '10px 0' }}
                >
                  <div className="mainInfos d-flex justify-content-between align-items-center">
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className=" fw-normal mb-2">باذنجان</p>
                    </div>
                    <div className=" d-flex">
                      <button
                        className="btn btn-link px-2"
                        onClick={(e) =>
                          e.target.parentNode.querySelector('input[type=number]').stepDown()
                        }
                      >
                        -
                      </button>

                      <input
                        id="form1"
                        min="0"
                        name="quantity"
                        value="2"
                        type="number"
                        className="form-control form-control-sm"
                      />

                      <button
                        className="btn btn-link px-2"
                        onClick={(e) =>
                          e.target.parentNode.querySelector('input[type=number]').stepUp()
                        }
                      >
                        +
                      </button>
                    </div>
                    {/* <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1"> */}
                    <span
                      className=""
                      style={{
                        fontSize: '12px',
                        // padding: "10px 30px",
                        display: 'block'
                        // width: "100%",
                      }}
                    >
                      499.00
                    </span>
                    {/* </div> */}
                    <div className=" col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-danger">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-trash"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 7l16 0" />
                          <path d="M10 11l0 6" />
                          <path d="M14 11l0 6" />
                          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="additionalInfos">
                    <div className="exts">
                      <span>حجم كبير (+20جنية)</span>
                      <span>- صلصة (+20جنية)</span>
                      <span>- باربيكيو (+20جنية)</span>
                      <span>- خصار (+20جنية)</span>
                    </div>
                    <div className="exts">
                      <textarea
                        cols={10}
                        rows={2}
                        value={'  رجاء زيادة الطحين قليلا وعندم إضافة السلطة'}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex product_shopping_card justify-content-between align-items-center"
                  style={{ margin: '10px 0' }}
                >
                  <div className="mainInfos d-flex justify-content-between align-items-center">
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className=" fw-normal mb-2">باذنجان</p>
                    </div>
                    <div className=" d-flex">
                      <button
                        className="btn btn-link px-2"
                        onClick={(e) =>
                          e.target.parentNode.querySelector('input[type=number]').stepDown()
                        }
                      >
                        -
                      </button>

                      <input
                        id="form1"
                        min="0"
                        name="quantity"
                        value="2"
                        type="number"
                        className="form-control form-control-sm"
                      />

                      <button
                        className="btn btn-link px-2"
                        onClick={(e) =>
                          e.target.parentNode.querySelector('input[type=number]').stepUp()
                        }
                      >
                        +
                      </button>
                    </div>
                    {/* <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1"> */}
                    <span
                      className=""
                      style={{
                        fontSize: '12px',
                        // padding: "10px 30px",
                        display: 'block'
                        // width: "100%",
                      }}
                    >
                      499.00
                    </span>
                    {/* </div> */}
                    <div className=" col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-danger">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-trash"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 7l16 0" />
                          <path d="M10 11l0 6" />
                          <path d="M14 11l0 6" />
                          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="additionalInfos">
                    <div className="exts">
                      <span>حجم كبير (+20جنية)</span>
                      <span>- صلصة (+20جنية)</span>
                      <span>- باربيكيو (+20جنية)</span>
                      <span>- خصار (+20جنية)</span>
                    </div>
                    <div className="exts">
                      <textarea
                        cols={10}
                        rows={4}
                        value={'  رجاء زيادة الطحين قليلا وعندم إضافة السلطة'}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShoppingCart
