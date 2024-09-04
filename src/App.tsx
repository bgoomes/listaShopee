import { Link } from "./link";
import { links } from "./data/links.json"
import logo from "./assets/img-logo.jpeg"
 
export function App() {
 
  return (
    <div className="w-full min-h-svh flex justify-center bg-red-700 text-red-50">
      <div className="w-96 p-10 flex flex-col gap-10">
        <div className="flex items-center flex-col gap-5">
          <div className="flex flex-col border-4 items-center w-32 h-32 rounded-full ">
            <img src={logo} alt="" className="rounded-full"/>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl text-center">Lista dos itens divulgados no nosso perfil do Tik Tok</p>
            <span className="text-sm text-red-200"><a href="https://www.tiktok.com/@favsshopee">@favsshopee</a></span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
            {links.map((item) => {
              return (
                <Link key={item.id} item={item.name} link={item.link} destaque={item.destaque}/>
              )
            })}
        </div>
      </div>
    </div>
  )
}

