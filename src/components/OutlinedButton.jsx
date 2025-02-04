import './OutlinedButton.css'

const OutlinedButton = (props)=>{
    const {color="primary", size="regular"} = props
    return (
        <button className={`${color}-color ${size}-size`}>
            {props.children?props.children:"CTA"}
        </button>
    )
}
export default OutlinedButton