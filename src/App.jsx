import OutlinedButton from "./components/OutlinedButton"
import { LiaSignInAltSolid } from "react-icons/lia";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdExposurePlus1 } from "react-icons/md";

function App() {

  return (
    <div>
      {/* Color Variation */}
      <OutlinedButton/>
      <OutlinedButton color="primary"/>
      <OutlinedButton color="secondary"/>
      <OutlinedButton color="success"/>
      <OutlinedButton color="danger"/>
      <OutlinedButton color="danger">SIGNIN</OutlinedButton>
      {/* Size Variation */}
      <OutlinedButton size="small"/>
      <OutlinedButton size="regular"/>
      <OutlinedButton size="medium"/>
      <OutlinedButton size="large"/>
      {/* Icon Variation */}
      <OutlinedButton><LiaSignInAltSolid/>SIGNIN</OutlinedButton>
      <OutlinedButton><SiGnuprivacyguard/>SIGNUP</OutlinedButton>
      <OutlinedButton><MdExposurePlus1/>Create a short URL</OutlinedButton>
      <OutlinedButton>Go to link</OutlinedButton>
    </div>
  )

}

export default App