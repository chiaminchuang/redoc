import React, { Component, useState, useEffect } from "react"
import Select, { SingleValue, ActionMeta } from "react-select"
import slugify from "slugify"
import { IUrl } from "../RedocPage/RedocPage"

interface SelectApiProps {
  className?: string
  value?: IUrl
  autoFocus: boolean
  onChange: (newValue: SingleValue<IUrl>, actionMeta: ActionMeta<IUrl>) => void
}

// interface SelectApiState {
//   availableApis: Array<Url>
// }

const URLS = [
  { url: "https://petstore.swagger.io/v2/swagger.json", name: "Petshop" },
  { url: "https://api.apis.guru/v2/specs/instagram.com/1.0.0/swagger.yaml", name: "Instagram" },
  { url: "https://api.apis.guru/v2/specs/ably.io/1.1.0/openapi.json", name: "Ably" },
  { url: "https://api.apis.guru/v2/specs/airport-web.appspot.com/v1/swagger.json", name: "Airport" }
]

const SelectApi = ({ value, autoFocus, onChange }: SelectApiProps) => {
  const [availableApis, setAvailableApis] = useState(() =>
    URLS.map((item) => ({
      value: slugify(item.name).toLowerCase(),
      label: item.name,
      url: item.url
    }))
  )

  useEffect(() => {
    console.log(availableApis)
  })

  return (
    <Select
      className="select__api"
      autoFocus={autoFocus}
      value={value}
      onChange={onChange}
      options={availableApis}
      noOptionsMessage={() => "No api found"}
      placeholder={"Search Api..."}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: "#32329f"
        }
      })}
    />
  )
}

export default SelectApi
