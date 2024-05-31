import React, { Component } from "react"
import "./SelectApiPage.css"
import Logo from "../logo.png"
import AppFooter from "../AppFooter/AppFooter"
import SelectApi from "../SelectApi/SelectApi"
import { IUrl } from "../RedocPage/RedocPage"
import { useNavigate } from "react-router-dom"

// interface SelectApiPageProps {
//   history: Array<string>
// }

const SelectApiPage = () => {
  const navigate = useNavigate()
  const handleChange = (selectedApi: IUrl) => {
    navigate(selectedApi.value)
  }
  return (
    <div>
      <div className="search-wrapper">
        <div>
          <img src={Logo} alt="Redoc" />
          <SelectApi autoFocus={true} onChange={handleChange} />
        </div>
      </div>
      <AppFooter />
    </div>
  )
}

export default SelectApiPage
