import Image, { type ImageProps } from "next/image";
import { Signup } from '@repo/ui/signup'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div style={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center',height:'100vh', width:"100vw"}}>
      hi there from web app
      <Signup />
    </div>
  );
}
