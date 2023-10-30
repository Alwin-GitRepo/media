import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar className='bg-warning'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='text-primary fw-bolder fs-4'>
            <i class="fa-solid fa-cloud-arrow-up fa-shake mx-2"></i>
            Media Player
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header