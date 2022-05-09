import React from "react";
import { FaWindowClose } from 'react-icons/fa';
import accessTN from "../Modal1/access-tennessee.jpg"

function Modal1() {
  return(
    <div className="portfolio-modal modal fade" id="portfolioModal1">
      <div className="modal-dialog">
        <div className="modal-content" data-bs-dismiss="modal"><FaWindowClose /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                <h2>Access Tennessee</h2>
                <p className="text-muted">inclusivity is important!</p>

                <p >It's sometimes easy to forget that not every store, restaurant, activity, etc. can be used by all people due to lack of accessability for those with impairments or disabilities. Access Tennessee is an application that allows both business owners and their potential clients to interact about what kind of needs (if any) are being met and how the business can improve and become more accessible to certain communities. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal1;