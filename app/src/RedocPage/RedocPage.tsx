import React, { useState, useEffect } from "react"
import "./RedocPage.css"
import Logo from "../logo.png"
import { RedocStandalone } from "redoc"
import slugify from "slugify"
import { Link } from "react-router-dom"
import SelectApi from "../SelectApi/SelectApi"
import { useNavigate, useParams } from "react-router-dom"

export interface IUrl {
  url: string
  label: string
  value: string
}

const URLS = [
  { url: "https://petstore.swagger.io/v2/swagger.json", name: "Petshop" },
  { url: "https://api.apis.guru/v2/specs/instagram.com/1.0.0/swagger.yaml", name: "Instagram" },
  { url: "https://api.apis.guru/v2/specs/ably.io/1.1.0/openapi.json", name: "Ably" },
  { url: "https://api.apis.guru/v2/specs/airport-web.appspot.com/v1/swagger.json", name: "Airport" }
]

// class RedocPage extends Component<RedocPageProps, RedocPageState> {
//   constructor(props: RedocPageProps) {
//     super(props)

//     console.log("RedocPage - constructor", props)

//     // this.state = {
//     //   availableApis: URLS.map((item) => ({
//     //     value: slugify(item.name).toLowerCase(),
//     //     label: item.name,
//     //     url: item.url
//     //   })),
//     //   activeApi: {
//     //     url: "",
//     //     label: "",
//     //     value: ""
//     //   }
//     // }

//     // const activeApiFromQuery = this.state.availableApis.find(
//     //   (element) => element.value === this.props.match.params.api
//     // )

//     // if (activeApiFromQuery) {
//     //   this.setState({ activeApi: activeApiFromQuery })
//     // } else {
//     //   this.props.history.push("/")
//     // }
//   }

//   handleChange = (selectedApi: Url) => {
//     this.setState({
//       activeApi: selectedApi
//     })

//     this.props.history.push(selectedApi.value)
//   }

// }
const RedocPage = () => {
  const navigate = useNavigate()
  const params = useParams()

  const [activeApi, setActiveApi] = useState<IUrl>(() => {
    console.log("RedocPage - params", params)

    const availableApis = URLS.map((item) => ({
      value: slugify(item.name).toLowerCase(),
      label: item.name,
      url: item.url
    }))
    console.log("RedocPage - availableApis", availableApis)

    const activeApiFromQuery = availableApis.find((element) => element.value === params.api)
    console.log(activeApiFromQuery)
    // setActiveApi(activeApiFromQuery)
    return activeApiFromQuery
  })

  // useEffect(() => {})
  const handleChange = (selectedApi: IUrl) => {
    navigate(`/${selectedApi.value}`)
    setActiveApi(selectedApi)
  }
  return (
    <div>
      <header className="RedocPage-header">
        <Link to={"/"}>
          <img src={Logo} alt="Redoc" />
        </Link>

        <SelectApi className="select" value={activeApi} autoFocus={false} onChange={handleChange} />
      </header>
      <section className="container__redoc">
        <RedocStandalone
          specUrl={activeApi.url}
          options={{
            nativeScrollbars: true,
            scrollYOffset: 60,
            theme: { colors: { primary: { main: "#32329f" } } }
          }}
        />
      </section>
    </div>
  )
}

export default RedocPage
