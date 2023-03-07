import { FC, PropsWithChildren } from "react";//FUNCTIONAL COMPONENT

export const DarkLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div style={{
        backgroundColor:'rgba(0,0,0,0.3)',
        borderRadius:'5px',
        padding:'10px'
    }}>
        <h3>Dark Layout</h3>
        {children}
    </div>
  )
}
