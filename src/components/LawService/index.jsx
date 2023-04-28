export const LawService = ({ serviceIcon, serviceName }) => {

    return (
        <li className="text-center col-3">
            <img style={{ maxHeight: "50%", filter: "brightness(0) invert(1)" }} src={serviceIcon} alt={serviceName} />
            <h3 style={{ fontSize: "90%" }} className="m-0 text-break">{serviceName.toUpperCase()}</h3>
        </li>
    )
}