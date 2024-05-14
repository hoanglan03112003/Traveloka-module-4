import React from 'react'
import NavRencar from './navRencar'
import RentcarFAQ from './mainRentcarFAQ'
import RentcarPopular from './mainRentcarPopular'
import RentcarPopularCar from './mainRentcarPopularCar'
import RequestRentcar from './mainRentcarRequest'
import MAINrentcar from './mainRentcar'

function MainRentCarComponent() {
  return (
    <>
      <NavRencar />
      <MAINrentcar />
      <RequestRentcar />
      <RentcarFAQ />
      <RentcarPopular />
      <RentcarPopularCar />
    </>
  )
}

export default MainRentCarComponent